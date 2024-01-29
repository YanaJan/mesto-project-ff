const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(item, removeCard) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    return card;
}

function removeCard(event) {
    event.target.closest(".card").remove();
  }
  
initialCards.forEach((item) => {
    placesList.append(createCard(item, removeCard));
  });
