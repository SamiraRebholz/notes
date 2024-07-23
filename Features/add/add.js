const addButton = document.getElementsByClassName('add');
const sidebar = document.getElementsByClassName('side');

addButton[0].addEventListener('click', function() {
    const userNoteCard = document.createElement('div');
    userNoteCard.classList.add('userNoteCard');
    sidebar[0].appendChild(userNoteCard);

    const titleCard = document.createElement('h3');
    titleCard.classList.add('titleCard');
    titleCard.innerHTML = 'Title';
    userNoteCard.appendChild(titleCard);

    const dateAddedCard = document.createElement('h4');
    dateAddedCard.classList.add('dateAddedCard');
    const currentDate = new Date();
    const formattedDate = currentDate.getDate().toString().padStart(2, '0') + '/' +
                           (currentDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
                           currentDate.getFullYear();
    dateAddedCard.innerHTML = formattedDate;
    userNoteCard.appendChild(dateAddedCard);
});