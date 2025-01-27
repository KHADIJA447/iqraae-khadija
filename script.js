// Affichage ou masquage des dropdowns
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Liste des sourates
const sourates = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", 
    /* Ajouter toutes les 114 sourates */
];

// Générer la liste des sourates
const souratesList = document.getElementById('sourates-list');
sourates.forEach((sourate, index) => {
    const button = document.createElement('button');
    button.innerText = `${index + 1}- ${sourate}`;
    souratesList.appendChild(button);
});

// Filtrer les sourates
function filterSourates() {
    const query = document.getElementById('search').value;
    const buttons = souratesList.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.display = btn.innerText.includes(query) ? 'block' : 'none';
    });
}
