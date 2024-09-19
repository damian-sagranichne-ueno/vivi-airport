let salidas = [
    {
        "horario": "13:15",
        "vuelo": "OB708",
        "aerolinea": "Aerolíneas XX",
        "origen": "Ciudad A",
        "estima": "14:15",
        "sector": "Sector A",
        "estado": "Aterrizado"
    },
    {
        "horario": "14:00",
        "vuelo": "OB709",
        "aerolinea": "Aerolíneas XY",
        "origen": "Ciudad B",
        "estima": "15:00",
        "sector": "Sector B",
        "estado": "En Vuelo"
    }
];

let llegadas = [
    {
        "horario": "15:30",
        "vuelo": "OB710",
        "aerolinea": "Aerolíneas XX",
        "origen": "Ciudad C",
        "estima": "16:00",
        "sector": "Sector C",
        "estado": "Aterrizado"
    },
    {
        "horario": "16:00",
        "vuelo": "OB711",
        "aerolinea": "Aerolíneas XY",
        "origen": "Ciudad D",
        "estima": "16:30",
        "sector": "Sector D",
        "estado": "Demorado"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Cargar vuelos de salidas por defecto
    renderFlights(salidas);

    function renderFlights(flights) {
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = ''; // Limpiar el contenido anterior
        
        flights.forEach(flight => {
            const flightRow = document.createElement('div');
            flightRow.classList.add('info-row');

            flightRow.innerHTML = `
                <span>${flight.horario}</span>
                <span>${flight.vuelo}</span>
                <span>${flight.aerolinea}</span>
                <span>${flight.origen}</span>
                <span>${flight.estima}</span>
                <span>${flight.sector}</span>
                <span>${flight.estado}</span>
            `;

            infoContent.appendChild(flightRow);
        });
    }

    // Control de tabs (salidas y llegadas)
    document.getElementById('salidas').addEventListener('click', function() {
        document.getElementById('salidas').classList.add('active');
        document.getElementById('llegadas').classList.remove('active');
        renderFlights(salidas); // Renderizar salidas
    });

    document.getElementById('llegadas').addEventListener('click', function() {
        document.getElementById('llegadas').classList.add('active');
        document.getElementById('salidas').classList.remove('active');
        renderFlights(llegadas); // Renderizar llegadas
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Referencia al botón de hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    // Alternar la visibilidad del menú al hacer clic
    menuToggle.addEventListener('click', function () {
        if (hamburgerMenu.style.display === 'none' || hamburgerMenu.style.display === '') {
            hamburgerMenu.style.display = 'block';
        } else {
            hamburgerMenu.style.display = 'none';
        }
    });

    // Cargar vuelos de salidas por defecto
    renderFlights(salidas);

    function renderFlights(flights) {
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = ''; // Limpiar el contenido anterior
        
        flights.forEach(flight => {
            const flightRow = document.createElement('div');
            flightRow.classList.add('info-row');

            flightRow.innerHTML = `
                <span>${flight.horario}</span>
                <span>${flight.vuelo}</span>
                <span>${flight.aerolinea}</span>
                <span>${flight.origen}</span>
                <span>${flight.estima}</span>
                <span>${flight.sector}</span>
                <span>${flight.estado}</span>
            `;

            infoContent.appendChild(flightRow);
        });
    }

    // Control de tabs (salidas y llegadas)
    document.getElementById('salidas').addEventListener('click', function() {
        document.getElementById('salidas').classList.add('active');
        document.getElementById('llegadas').classList.remove('active');
        renderFlights(salidas); // Renderizar salidas
    });

    document.getElementById('llegadas').addEventListener('click', function() {
        document.getElementById('llegadas').classList.add('active');
        document.getElementById('salidas').classList.remove('active');
        renderFlights(llegadas); // Renderizar llegadas
    });
});
