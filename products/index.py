import os

def rename_images(directory_path, prefix='image_', extension='.jpeg'):
    # List all files in the directory
    x=1
    files = os.listdir(directory_path)
    print(files)
    # Filter only image files (you may need to adjust the extensions)
    image_files = [f for f in files if not f.lower().endswith(( '.py'))]

    # Rename each image file
    for i, old_name in enumerate(image_files, start=1):
        new_name = f'material{x}.jpeg'
        old_path = os.path.join(directory_path, old_name)
        new_path = os.path.join(directory_path, new_name)
        os.rename(old_path, new_path)
        print(f'Renamed: {old_name} -> {new_name}')
        x=x+1

# Specify the directory containing your images
directory_path = './'

# Specify the prefix and extension for the new names
prefix = 'image_'
extension = '.jpeg'

# Rename images in the specified directory
rename_images(directory_path, prefix, extension)
