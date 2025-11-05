import { getBreeds } from './api.js';
import { showBreeds, updateButtons } from './ui.js';

let currentPage = 1;
let limit = 10;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    loadBreeds(currentPage);
})

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));

document.getElementById("more-limit").addEventListener("click", function () {
    limit += 5;
    loadBreeds(currentPage);
    document.getElementById("limit-label").textContent = limit + " cats";
    console.log("Límite: ", limit);
})

document.getElementById("less-limit").addEventListener("click", function () {
    if (limit > 5){
        limit -= 5;
        loadBreeds(currentPage);
        document.getElementById("limit-label").textContent = limit + " cats";
        console.log("Límite: ", limit);
    }
})

