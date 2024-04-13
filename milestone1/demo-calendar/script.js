document.addEventListener("DOMContentLoaded", function() {
    const mushrooms = [
        { name: "Birkenrotkappe", value: 1, imageUrl: "../figs-cap/bell.webp" },
        { name: "Espenrotkappe", value: 1, imageUrl: "https://example.com/path/to/espenrotkappe.png" },
        { name: "Flockenstieliger Hexenröhrling", value: 1, imageUrl: "https://example.com/path/to/flockenstieliger.png" },
        // Add more mushrooms with their images here
    ];

    const mushroomList = document.getElementById("mushroomList");

    function displayMushrooms() {
        mushroomList.innerHTML = '';
        mushrooms.forEach(mushroom => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = mushroom.imageUrl;
            img.alt = mushroom.name;
            img.style.width = '100px'; // Adjust the image size as needed
            li.appendChild(img);
            li.appendChild(document.createTextNode(" " + mushroom.name + " (Value: " + mushroom.value + ")"));
            mushroomList.appendChild(li);
        });
    }

    window.filterMushrooms = function() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const filteredMushrooms = mushrooms.filter(mushroom => mushroom.name.toLowerCase().includes(searchInput));
        mushroomList.innerHTML = '';
        filteredMushrooms.forEach(mushroom => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = mushroom.imageUrl;
            img.alt = mushroom.name;
            img.style.width = '100px'; // Adjust the image size as needed
            li.appendChild(img);
            li.appendChild(document.createTextNode(" " + mushroom.name + " (Value: " + mushroom.value + ")"));
            mushroomList.appendChild(li);
        });
    }

    displayMushrooms();
});
