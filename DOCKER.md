# KaizenSpark Tech - Docker Deployment Guide

## Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

## Quick Start with Docker Compose

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

## Manual Docker Commands

### Build the Docker image:
```bash
docker build -t kaizenspark-tech .
```

### Run the container:
```bash
docker run -p 3000:3000 kaizenspark-tech
```

### Run in detached mode (background):
```bash
docker run -d -p 3000:3000 --name kaizenspark-tech kaizenspark-tech
```

### Stop the container:
```bash
docker stop kaizenspark-tech
```

### Remove the container:
```bash
docker rm kaizenspark-tech
```

## Production Deployment

For production deployment, you can push the image to Docker Hub or any container registry:

```bash
# Tag the image
docker tag kaizenspark-tech yourusername/kaizenspark-tech:latest

# Push to Docker Hub
docker push yourusername/kaizenspark-tech:latest
```

## Environment Variables

If you need to add environment variables, create a `.env` file and modify docker-compose.yml:

```yaml
services:
  web:
    env_file:
      - .env
```

## Notes

- The application runs on port 3000 by default
- The Dockerfile uses multi-stage builds for optimized image size
- The application runs as a non-root user for security
- Static files are properly cached for better performance
