const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const bookTitleLink = document.querySelectorAll('.book h2 > a');
const bookUl = document.querySelectorAll('.book ul');
const bookUlLi = document.querySelectorAll('.book ul > li');
const newElemLi = document.createElement('li');
const bgImage = document.querySelector('body');



function advRemove () {
    adv.remove();
}

function changeBgImage () {
    bgImage.style.backgroundImage = 'url("/image/you-dont-know-js.jpg")';
}

function sortBlockBook () {
    books[0].prepend(book[1]);
    books[0].insertBefore(book[3],book[5]);
    books[0].insertBefore(book[2],book[3]);
    books[0].insertBefore(book[2],book[5]);
    books[0].insertBefore(book[5],book[2]);
}

function sortListBooks () {
    bookUlLi[4].before(bookUlLi[6]);
    bookUlLi[4].before(bookUlLi[8]);
    bookUlLi[10].before(bookUlLi[2]);
    bookUlLi[49].before(bookUlLi[55]);
    bookUlLi[52].before(bookUlLi[51]);
    bookUlLi[53].before(bookUlLi[51]);
    bookUlLi[52].append(bookUlLi[53]);
    bookUlLi[50].append(bookUlLi[48]);
    bookUlLi[51].append(bookUlLi[54]);
}

function renameBookTitle () {
    bookTitleLink[4].textContent = 'Книга 3. this и Прототипы Объектов';
}

function createElementLi (stringContent) {
    newElemLi.textContent = stringContent;
    bookUlLi[25].append(newElemLi);
}


changeBgImage ();
advRemove ();
sortBlockBook ();
sortListBooks ();
renameBookTitle ();
createElementLi ('Глава 8: За пределами ES6');
