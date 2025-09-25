import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
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
MAILERLITE_GROUP_WAITINGLIST = os.getenv("MAILERLITE_GROUP", "")


class WaitingListSignup(BaseModel):
    email: EmailStr
    product: str


@app.post("/api/waiting-list")
async def waiting_list_signup(data: WaitingListSignup):
    if not MAILERLITE_API_TOKEN:
        raise HTTPException(
            status_code=500, detail="MailerLite API token not configured"
        )
    if not MAILERLITE_GROUP_WAITINGLIST:
        raise HTTPException(
            status_code=500, detail="MailerLite Group ID not configured"
        )
    # MailerLite API v2: Add subscriber to group
    url = f"https://api.mailerlite.com/api/v2/groups/{MAILERLITE_GROUP_WAITINGLIST}/subscribers"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {MAILERLITE_API_TOKEN}",
    }
    payload = {"email": data.email}
    resp = requests.post(url, json=payload, headers=headers)
    if resp.status_code not in (200, 201):
        raise HTTPException(status_code=502, detail=f"MailerLite error: {resp.text}")
    return {"success": True}
