/*const addButton = document.getElementsByClassName('add');
const sidebar = document.getElementsByClassName('side');
const dateInNote = document.getElementsByClassName('note > dateAdded')

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
    //jede card soll eine .note haben; die .note soll den Inhalt der note speichern

});*/
document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementsByClassName('add')[0];
    const sidebar = document.getElementsByClassName('notesOverview')[0];
    const noteSection = document.querySelector('.note');
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    const noteDate = document.getElementById('note-date');
    
    addButton.addEventListener('click', function() {
        const noteId = `note-${Date.now()}`;
        const userNoteCard = document.createElement('div');
        userNoteCard.classList.add('userNoteCard');
        userNoteCard.setAttribute('data-id', noteId);
        sidebar.appendChild(userNoteCard);

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

        localStorage.setItem(noteId, JSON.stringify({ title: 'Title', content: '', date: formattedDate }));

        userNoteCard.addEventListener('click', function() {
            const noteData = JSON.parse(localStorage.getItem(noteId));
            noteTitle.value = noteData.title;
            noteContent.value = noteData.content;
            noteDate.innerHTML = noteData.date;
            noteSection.setAttribute('data-id', noteId);
        });
    });

    noteTitle.addEventListener('input', saveNote);
    noteContent.addEventListener('input', saveNote);

    function saveNote() {
        const noteId = noteSection.getAttribute('data-id');
        if (noteId) {
            const noteData = {
                title: noteTitle.value,
                content: noteContent.value,
                date: noteDate.innerHTML
            };
            localStorage.setItem(noteId, JSON.stringify(noteData));
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        const noteId = localStorage.key(i);
        const noteData = JSON.parse(localStorage.getItem(noteId));
        const userNoteCard = document.createElement('div');
        userNoteCard.classList.add('userNoteCard');
        userNoteCard.setAttribute('data-id', noteId);
        sidebar.appendChild(userNoteCard);

        const titleCard = document.createElement('h3');
        titleCard.classList.add('titleCard');
        titleCard.innerHTML = noteData.title;
        userNoteCard.appendChild(titleCard);

        const dateAddedCard = document.createElement('h4');
        dateAddedCard.classList.add('dateAddedCard');
        dateAddedCard.innerHTML = noteData.date;
        userNoteCard.appendChild(dateAddedCard);

        userNoteCard.addEventListener('click', function() {
            noteTitle.value = noteData.title;
            noteContent.value = noteData.content;
            noteDate.innerHTML = noteData.date;
            noteSection.setAttribute('data-id', noteId);
        });
    }
});