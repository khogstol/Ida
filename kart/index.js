let map;
let markers = [];

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 58.292808, lng: 7.781895 },
    zoom: 4
  });

  // Add initial markers
  addMarkersFromText("Mountain View, CA:37.4220656:-122.0840897:assets/9.JPEG\nSeattle, WA:47.648994:-122.3503845:http://maps.google.com/mapfiles/ms/icons/green-dot.png\nTrondheim, Norge:63.417438:10.495787:assets/9.JPEG");

  // Example of adding marker from a string
  const tekst = "";
  addMarkersFromText(tekst);
});

document.getElementById('fileInput').addEventListener('change', function (event) {
  const file = event.target.files[0];  // Get the selected file
  if (!file) {
      return;  // Exit if no file is selected
  }
  const reader = new FileReader();  // Create a new FileReader object
  reader.onload = function (e) {
    const tekst = e.target.result;
    addMarkersFromText(tekst);
  };

  reader.onerror = function (e) {
    console.error("Error reading file", e);
  };

  reader.readAsText(file);  // Read the file as text
});

function addMarkersFromText(text) {
  // Clear existing markers
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  const lines = text.split("\n");  // Correct newline character
  lines.forEach(item => {
    const listSplit = item.split(":");
    if (listSplit.length >= 4) {  // Ensure there are enough parts
      const sted = listSplit[0];
      const lat = Number(listSplit[1]);
      const lng = Number(listSplit[2]);
      const iconUrl = "bilder/" + listSplit[3];
      
      const marker = new google.maps.Marker({
        map,
        position: { lat, lng },
        title: sted,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      });

      // Load the image to get its natural dimensions
      const image = new Image();
      image.src = iconUrl;
      const tall = 15;
      image.onload = () => {
        const hoverIcon = {
          url: iconUrl,
          size: new google.maps.Size(image.naturalWidth/tall, image.naturalHeight/(tall/2)),
          scaledSize: new google.maps.Size(image.naturalWidth/tall, image.naturalHeight/tall) // Use original size
        };

        marker.hoverIcon = hoverIcon;
      };

      // Add event listeners for hover effect
      marker.addListener('mouseover', () => {
        marker.setIcon(marker.hoverIcon);
        document.getElementById('infoTekst').textContent = marker.title;
      });

      marker.addListener('mouseout', () => {
        marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
        document.getElementById('infoTekst').textContent = "           ";
      });

      marker.addListener('click', () => {
        marker.setIcon(marker.hoverIcon);
        document.getElementById('infoTekst').textContent = marker.title;
      });

  
      markers.push(marker);
    }
  });
}
