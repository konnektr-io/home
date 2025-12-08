FROM node:lts-alpine AS build-stage
WORKDIR /

# Set environment variables for the frontend build
ARG GTM_ID
ENV PUBLIC_ENV__GTM_ID=$GTM_ID

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install


# Copy the rest of the frontend code and build it
COPY / ./
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN pnpm run build

FROM nginxinc/nginx-unprivileged:alpine-slim
USER root
RUN apk upgrade --no-cache
USER nginx
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 8080
