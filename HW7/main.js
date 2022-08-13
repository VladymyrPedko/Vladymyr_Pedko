const addBtn = document.querySelector('.btn');
const card = document.querySelector('.card-wrapper');

let cards = [];

addBtn.addEventListener('click', () => {

    cards.push(randomNft());
    newNft();

});
function deleteCard(id) {
    cards = cards.filter(el => el.id !== id);
    newNft()
}

function newNft() {
    let result = '';
    for (let i = 0; i < cards.length; i++){
        result += `<div class="nft">
                <div class="card">
                <img class="photo" src="https://random.imagecdn.app/500/500" alt="photo">
                <div class="name">Card<br>Name</div>
                <div class="description">card<br>description</div>
                </div>
                <div class="wait-card">
                <button class="btn-delete" onclick = "deleteCard(${cards[i].id})"><img class="icon" src="icon/Icons.png" alt="Icon"></button>
                </div>
                </div>`;

    }
    card.innerHTML = result
}

function randomNft() {
    const nameCard = 'Card Name';
    const surname = 'card description';
    return {
        name: nameCard,
        description: surname,
        id: getRandomId()
    }}
function getRandomId() {
    return Math.floor(Math.random() * 10000);
}



