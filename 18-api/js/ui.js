const catGrid = document.getElementById('catGrid');
//Div de la página de detalles del gatete
const catInfo = document.getElementById("catInfo");

export function showBreeds(breeds){
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">Ver detalles 
        `;
        catGrid.appendChild(catCard);
    });
}

//Función que muestra los detalles del gato obtenidos
export function showCatDetails (carDetails) {
    //Variable con la información de la raza del gatete
    const cat = carDetails.breeds[0];
    const catCard = document.createElement("div");
    catCard.className = "cat-details-card";
    console.log("url del gato (función showCatDetails (ui.js)): "+carDetails.url)
    catCard.innerHTML = `
        <div class="cat-card-img">
            <img src="${carDetails.url}" alt="Imágen gato">
        </div>
        <div class="cat-card-info">
            <h1>${cat.name}</h1>
            <p>Temperamento: + ${cat.temperament}</p>
            <p>Amigable con niños: + ${cat.child_friendly} </p>
            <p>Amigable con perros: + ${cat.dog_friendly}</p>
            <p>Origen + ${cat.origin}</p>
            <p><a href="${cat.wikipedia_url}">Gato en wikipedia</a></p>
            <a class="back-button" href="api.html" target="_blank">Regresar</a>
        </div>
    `
    //Añadir tarjeta del gato en el html
    catInfo.appendChild(catCard);
}

export function updateButtons(currentPage, pageCount){
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = pageCount <= currentPage;
}