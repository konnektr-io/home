FROM node:lts-alpine AS build-stage
WORKDIR /

# Set environment variables for the frontend build
ARG GTM_ID=GTM-PLACEHOLDER
ENV PUBLIC_ENV__GTM_ID=$GTM_ID


# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --dangerously-allow-all-builds
COPY . .
RUN chmod +x node_modules/.bin/*
ENV NODE_OPTIONS=--max-old-space-size=8192
RUN pnpm run build



FROM nginxinc/nginx-unprivileged:alpine-slim
USER root
RUN apk upgrade --no-cache
USER nginx
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 8080
