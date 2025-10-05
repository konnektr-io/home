import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr
import requests


app = FastAPI()


# Allow CORS for local dev and static frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAILERLITE_API_TOKEN = os.getenv("MAILERLITE_API_TOKEN")
MAILERLITE_GROUPS = {
    "graph": os.getenv("MAILERLITE_GROUP_WAITINGLIST_GRAPH", ""),
    "assembler": os.getenv("MAILERLITE_GROUP_WAITINGLIST_ASSEMBLER", ""),
    "flow": os.getenv("MAILERLITE_GROUP_WAITINGLIST_FLOW", ""),
    "compass": os.getenv("MAILERLITE_GROUP_WAITINGLIST_COMPASS", ""),
    "demo": os.getenv("MAILERLITE_GROUP_WAITINGLIST_REQUESTDEMO", ""),
}

class WaitingListSignup(BaseModel):
    email: EmailStr
    product: str


@app.post("/api/waitinglist")
async def waiting_list_signup(data: WaitingListSignup):
    if not MAILERLITE_API_TOKEN:
        raise HTTPException(
            status_code=500, detail="MailerLite API token not configured"
        )
    product = data.product.lower().strip()
    group_id = MAILERLITE_GROUPS.get(product)
    if not group_id:
        raise HTTPException(
            status_code=400,
            detail=f"Unknown or unsupported product/group: '{data.product}'. Valid options: {', '.join([k for k, v in MAILERLITE_GROUPS.items() if v])}",
        )
    url = f"https://api.mailerlite.com/api/v2/groups/{group_id}/subscribers"
    headers = {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": MAILERLITE_API_TOKEN,
    }
    payload = {"email": data.email}
    resp = requests.post(url, json=payload, headers=headers)
    if resp.status_code not in (200, 201):
        raise HTTPException(status_code=502, detail=f"MailerLite error: {resp.text}")
    return {"success": True}

# Serve static frontend files
frontend_dist_path = os.path.join(
    os.path.dirname(__file__), "..", "frontend", "dist", "client"
)
app.mount("/", StaticFiles(directory=frontend_dist_path, html=True), name="static")

# fallback to index.html for SPA routing
@app.get("/{full_path:path}")
async def spa_fallback(full_path: str):
    index_path = os.path.join(frontend_dist_path, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="Not Found")
