import os

def rename_files_in_folder(folder_path):
    # Get a list of all files in the folder
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    
    # Sort files to ensure consistent ordering
    files.sort()
    
    # Rename each file with a number starting from 1
    for idx, file in enumerate(files, start=1):
        file_extension = os.path.splitext(file)[1]  # Get the file extension
        new_name = f"{idx}{file_extension}"  # Create the new file name
        old_file = os.path.join(folder_path, file)
        new_file = os.path.join(folder_path, new_name)
        os.rename(old_file, new_file)  # Rename the file

    print(f"Renamed {len(files)} files in folder {folder_path}")

# Example usage
folder_path = r'C:\Users\khogs\Prosjekter\Ida-prosjekt-git\bildekollasj\2024-07-16'  # Use raw string to handle backslashes
rename_files_in_folder(folder_path)
