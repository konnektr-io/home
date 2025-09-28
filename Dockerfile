# syntax=docker/dockerfile:1

# --- Build frontend ---
FROM node:lts-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --dangerously-allow-all-builds
COPY frontend .
RUN chmod +x node_modules/.bin/*
RUN pnpm run build

# --- Build backend ---
FROM python:3.12-slim AS backend-build
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend .

# --- Final image ---
FROM python:3.12-slim
WORKDIR /app

# Copy backend code
COPY --from=backend-build /app/backend ./backend
# Copy frontend build output
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Copy .env if present (for local dev, override in cloud)
COPY backend/.env ./backend/.env


# Install backend dependencies in final image
RUN pip install --no-cache-dir -r backend/requirements.txt

# Expose port
EXPOSE 8080

# Entrypoint: serve FastAPI app with uvicorn
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8080"]
