FROM node:lts-alpine AS build-stage
WORKDIR /src

# Set environment variables for the frontend build
ARG GA_MEASUREMENT_ID
ENV VITE_GTAG=$GTAG

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of the frontend code and build it
COPY / ./
RUN pnpm run build

FROM nginxinc/nginx-unprivileged:alpine-slim
USER root
RUN apk upgrade --no-cache
USER nginx
COPY client/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build-stage /src/dist/pwa /usr/share/nginx/html
EXPOSE 8080
