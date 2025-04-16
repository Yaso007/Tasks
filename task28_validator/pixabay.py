import os
import time
import requests
from bs4 import BeautifulSoup

# Configuration
SEARCH_TERM = "nature"  # Change this
MAX_IMAGES = 5          # Test with 5 first
DOWNLOAD_FOLDER = "pixabay_downloads"

# Setup
os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

# Critical headers to avoid 403 errors
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://pixabay.com/',
    'DNT': '1'
}

def download_image(url, filename):
    """Download and save an image"""
    try:
        response = requests.get(url, headers=HEADERS, stream=True, timeout=10)
        response.raise_for_status()
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {str(e)}")
        return False

print(f"Starting Pixabay download for '{SEARCH_TERM}'...")

page = 1
downloaded = 0

while downloaded < MAX_IMAGES:
    try:
        # New working URL format
        url = f"https://pixabay.com/images/search/{SEARCH_TERM}/?pagi={page}"
        print(f"\nFetching page {page}...")
        
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Updated 2024 selector
        img_tags = soup.select('img[src^="https://cdn.pixabay.com/photo"]')
        
        if not img_tags:
            print("No more images found!")
            break
            
        for img in img_tags:
            if downloaded >= MAX_IMAGES:
                break
                
            img_url = img['src']
            if '640' in img_url:  # Skip thumbnails
                continue
                
            filename = os.path.join(DOWNLOAD_FOLDER, f"image_{downloaded+1}.jpg")
            
            print(f"Downloading {downloaded+1}/{MAX_IMAGES}: {img_url[:50]}...")
            if download_image(img_url, filename):
                downloaded += 1
                time.sleep(1)  # Be polite
                
        page += 1
        
    except Exception as e:
        print(f"Error: {str(e)}")
        time.sleep(5)
        continue

print(f"\nDownload complete! Saved {downloaded} images to '{DOWNLOAD_FOLDER}'")