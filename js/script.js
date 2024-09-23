const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const bookTitle = document.querySelectorAll('.book h2');
const bookUl = document.querySelectorAll('.book ul');
const bookUlLi = document.querySelectorAll('.book ul > li');
const newElemLi = document.createElement('li');
const bgImage = document.querySelector('body');

console.log(bgImage);
console.log(books);
console.log(book);
console.log(adv);
console.log(bookTitle);
console.log(bookUl);
console.log(bookUlLi);

adv.remove();

books[0].prepend(book[1]);
books[0].insertBefore(book[3],book[5]);
books[0].insertBefore(book[2],book[3]);
books[0].insertBefore(book[3],book[5]);
books[0].insertBefore(book[2],book[5]);
books[0].insertBefore(book[5],book[2]);

bookTitle[4].innerHTML = 'Книга 3. this и Прототипы Объектов';
bookTitle[4].style.color = 'darkkhaki';

bookUlLi[4].before(bookUlLi[6]);
bookUlLi[4].before(bookUlLi[8]);
bookUlLi[10].before(bookUlLi[2]);
bookUlLi[49].before(bookUlLi[55]);
bookUlLi[52].before(bookUlLi[51]);
bookUlLi[53].before(bookUlLi[51]);
bookUlLi[52].append(bookUlLi[53]);
bookUlLi[50].append(bookUlLi[48]);
bookUlLi[51].append(bookUlLi[54]);

newElemLi.textContent = 'Глава 8: За пределами ES6';
bookUlLi[25].append(newElemLi);

bgImage.style.backgroundImage = 'url("/image/you-dont-know-js.jpg")';
