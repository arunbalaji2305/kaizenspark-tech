# Production Dockerfile for KaizenSpark Tech (Next.js 14 app router)

# 1. Base image
FROM node:18-alpine AS base

# 2. Dependencies stage
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package manifests and install ALL deps (build needs devDependencies)
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Build stage
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js standalone build (already configured in next.config.js)
RUN npm run build

# 4. Runtime stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy built app from builder image
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

# Container listens on 3000 (we'll map to host 3000)
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
