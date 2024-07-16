import os
from PIL import Image
import pillow_heif

# Register HEIF plugin
pillow_heif.register_heif_opener()

# Directory containing images
directory = "C:\\Users\\khogs\\Prosjekter\\Ida-prosjekt-git\\bildekollasj\\2024-07-16"  # Change this to the path of your images

# Convert images to JPG
for filename in os.listdir(directory):
    if filename.lower().endswith(('.heic', '.jpeg', '.jpg', '.png', '.bmp')):
        img_path = os.path.join(directory, filename)
        try:
            img = Image.open(img_path)

            # Convert to RGB if image has alpha channel
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            # Save as JPG
            new_filename = os.path.splitext(filename)[0] + ".jpg"
            img.save(os.path.join(directory, new_filename), "JPEG")
            print(f"Converted {filename} to {new_filename}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")
