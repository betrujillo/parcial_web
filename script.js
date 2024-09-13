document.addEventListener("DOMContentLoaded", function() {
    const API_URL = 'https://rickandmortyapi.com/api/character/?name=';
    const charactersContainer = document.getElementById('characters-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    // Evento al enviar el formulario
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchCharacters(searchTerm);
        }
    });

    // Función para buscar personajes según el nombre
    async function searchCharacters(name) {
        try {
            const response = await fetch(`${API_URL}${name}`);
            const data = await response.json();
            if (data.results) {
                displayCharacters(data.results);
            } else {
                charactersContainer.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        } catch (error) {
            console.error('Error al buscar personajes:', error);
            charactersContainer.innerHTML = '<p>Error al realizar la búsqueda.</p>';
        }
    }

    // Función para mostrar los personajes en la página
    function displayCharacters(characters) {
        charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            `;
            
            charactersContainer.appendChild(characterCard);
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const API_URL = 'https://rickandmortyapi.com/api/character/?name=';
    const charactersContainer = document.getElementById('characters-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    // Evento al enviar el formulario
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchCharacters(searchTerm);
        }
    });

    // Función para buscar personajes según el nombre
    async function searchCharacters(name) {
        try {
            const response = await fetch(`${API_URL}${name}`);
            const data = await response.json();
            if (data.results) {
                displayCharacters(data.results);
            } else {
                charactersContainer.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        } catch (error) {
            console.error('Error al buscar personajes:', error);
            charactersContainer.innerHTML = '<p>Error al realizar la búsqueda.</p>';
        }
    }

    // Función para mostrar los personajes en la página
    function displayCharacters(characters) {
        charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            `;
            
            charactersContainer.appendChild(characterCard);
        });
    }
});
