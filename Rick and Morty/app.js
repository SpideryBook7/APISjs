import { createCard, createCardModal, createPag} from './ui.js';

const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const fetchApi = url => fetch(url).then(response => response.json())

pagination.innerHTML = createPag();


function createPag() {
    let buttons = ``;
    for (let i = 1; i <= 42; i++) {
        buttons += ` 
        <li class="page-item">
        <a class="page-link" href="#" data-id="${i}">${i}</a>
        </li>
        `
    }
    return buttons;
}

function getCharacters(page = 1) {
    fetchApi(`${URL}/character/?page=${page}`)
        .then(data => {
            const characters = data.results;
            showCharacters(characters);
        })

}

function getCharactersById(id) {
    fetchApi(`${URL}/character/${id}`)
        .then(data => {
            const character = data;
            modalTitle.innerHTML = character.name;
            modalBody.innerHTML = '';
            modalBody.appendChild(createCardModal(character));
        })
}


function createCard(character) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtle');
    card.style.width = '18rem';
    const htmlCard = `  
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${character.name}</h5>
        <p class="card-text">${character.status}</p>
        <p class="card-text">${character.origin.name}</p>
        <a href="#" 
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-id="${character.id}">Ver más</a>
    </div>`
    card.innerHTML = htmlCard;
    return card;
}

function createCardModal(character) {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-secondary-subtle');
    card.style.width = '80%';
    card.style.margin = '0 auto';
    let statusColor = '';
    if(character-status === 'Alive'){
        statusColor = 'bg-success';
    }else if (character.status === 'Dead'){
        statusColor = 'bg-danger';
    } else {
        statusColor = 'bg-warning';
    }

    const htmlCard = `
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text badge ${ statusColor }"> ${ character.status }</p>
        <p class="card-text">${character.origin.name}</p>
        <p class="card-text">${character.location.name}</p>
    </div>`
    card.innerHTML = htmlCard;
    return card;
}

function showCharacters(characters) {
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character));
    });
}

function getButton(e) {
    e.preventDefault();
    if (e.target.classList.contains('page-link')) {
        const id = e.target.getAttribute('data-id');
        getCharactersById(id);
    }
}


function getButtonCard(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
        const id = e.target.getAttribute('data-id');
        getCharactersById(id);
    }
}

createPag();
getCharacters();


pagination.addEventListener('click', getButton);
containerChar.addEventListener('click', getButtonCard);