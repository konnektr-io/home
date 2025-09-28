
# Konnektr Home

Konnektr Home is the public-facing marketing and information website for the Konnektr Platform. It provides product information, pricing, interactive demos, and seamless transitions to platform applications.

## Folder Structure

- `frontend/` — React + TypeScript + Vite marketing site
- `backend/` — Python FastAPI backend for waiting list signup (MailerLite integration)

## Getting Started

### Frontend

```bash
cd frontend
pnpm install
pnpm run dev
```

### Backend (Waiting List Signup)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
cp .env.example .env  # Fill in your MailerLite API token and group IDs
uvicorn main:app --reload --port 8080
```

## Deployment

- Frontend: Deploy as a static site (Nginx/CDN recommended)
- Backend: Containerize with Docker and deploy as a stateless service in Kubernetes

## Waiting List Signup (MailerLite)

- The backend exposes `/api/waiting-list` for email signups
- API token and group IDs are stored in environment variables (`.env`)
- Frontend POSTs email and product name to backend

## License

This project is licensed under the Apache License 2.0. See [LICENSE](./LICENSE).
