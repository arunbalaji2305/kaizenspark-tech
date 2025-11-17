# How to Share This Project with Docker

## Step 1: Save the Docker Image (YOU do this)

After the Docker build completes, run this command:

```powershell
docker save kaizenspark-tech > kaizenspark-tech.tar
```

This will create a file called `kaizenspark-tech.tar` (approximately 500MB-1GB)

## Step 2: Share the Files

Upload these files to Google Drive/Dropbox/OneDrive:
1. `kaizenspark-tech.tar` (the Docker image)
2. `docker-compose.yml` (makes it easy to run)

Share the download link with your friend.

## Step 3: Your Friend Loads and Runs (FRIEND does this)

### Your friend needs:
- Docker Desktop installed (download from: https://www.docker.com/products/docker-desktop/)

### Commands for your friend:

```powershell
# 1. Load the Docker image
docker load < kaizenspark-tech.tar

# 2. Run the application (place docker-compose.yml in the same folder)
docker-compose up

# OR run directly without docker-compose:
docker run -p 3000:3000 kaizenspark-tech
```

### Access the website:
Open browser and go to: **http://localhost:3000**

### To stop:
Press `Ctrl+C` in the terminal

---

## Alternative: Quick Commands Reference

### For you (creating the image):
```powershell
cd "c:\Users\arunb\Desktop\Website demo"
docker build -t kaizenspark-tech .
docker save kaizenspark-tech > kaizenspark-tech.tar
```

### For your friend (running the image):
```powershell
docker load < kaizenspark-tech.tar
docker run -p 3000:3000 kaizenspark-tech
```

That's it! Simple and clean! 🚀
