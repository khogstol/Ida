document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];  // Get the selected file
    if (!file) {
        return;  // Exit if no file is selected
    }

    const reader = new FileReader();  // Create a new FileReader object
    reader.onload = function (e) {
        const content = e.target.result;
        const dictionary = {};
        const lines = content.split("\n");  // Correct newline character
        lines.forEach(item => {
            const listSplit = item.split(":");
            if (listSplit.length >= 4) {  // Ensure there are enough parts
                const list = [listSplit[1],listSplit[2],listSplit[3]];
                dictionary[listSplit[0]] = list;
                document.getElementById('fileContent').textContent += list + "\n";  // Display the file content
            }
        }); // Get the file content
    };

    reader.onerror = function (e) {
        console.error("Error reading file", e);
    };

    reader.readAsText(file);  // Read the file as text
});

