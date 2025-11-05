
const options = {
    headers: {
        'x-api-key': 'live_sWUXes7EOjtdks4l7QVVR6Hgm0YIJGqHRK3TLMHZXdGJcf4NIFj93wmyl3vYrd4L'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

//Esta función recibe la id de la imágen del gato que se consigue desde el botón detalles de cada gato seleccionado
//Regresa un json con los detalles del gato 
export async function getCatDetails (id) {
    //Parte fija de la URL
    const apiUrl = "https://api.thecatapi.com/v1/images/";
    try {
        //No estoy seguro de qué hace pero tipo concatena la id del a la URL
        const response = await fetch(`${apiUrl}${id}`, options); 
        //Si no hay nada tira el error
        if (!response.ok){
            throw new Error("Error " + response.status);
        }
        //Constante con la información del gato obtenida (porque los datos solo se puede obtener una vez con esta función)
        const carData = await response.json();
        console.log("url prueba: ", carData.url)
        console.log("Gato obtenido (función getCatDetails): \n" , carData);
        //Regresar los datos obtenidos
        return await carData;
    } catch (error) {
        console.error(error);
    }
}
