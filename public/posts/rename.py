import os

def rename_images(directory):
    # Get a list of all JPEG files in the directory
    images = [file for file in os.listdir(directory) if file.lower().endswith(".jpeg")]

    # Sort the images (optional if you want them renamed in the order they appear)
    images.sort()

    # Loop through the images and rename them
    for index, image in enumerate(images, start=1):
        new_name = f"images{index}.jpeg"
        old_path = os.path.join(directory, image)
        new_path = os.path.join(directory, new_name)

        # Rename the file
        os.rename(old_path, new_path)
        print(f"Renamed: {image} -> {new_name}")

# Replace with the path to your directory
directory_path = "./"
rename_images(directory_path)
