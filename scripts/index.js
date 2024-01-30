const cardTemplate = document.querySelector('#card-template').content;
const list = document.querySelector('.places__list');

function createCard(item, removeCard) {
    const card = cardTemplate.cloneNode(true);
    const cardImg = card.querySelector('.card__image');
    cardImg.src = item.link;
    cardImg.alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    return card;
}

function removeCard(event) {
    event.target.closest(".card").remove();
  }
  
initialCards.forEach((item) => {
    list.append(createCard(item, removeCard));
  });
