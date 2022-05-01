import * as bkScript from './modules/book.js';
import * as uiScript from './modules/bookUI.js';
import './modules/dom-nav.js';

document.addEventListener('DOMContentLoaded', uiScript.BookUI.displayBooks);
document.querySelector(`[data-book-form]`).addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('[data-book]').value;
  const author = document.querySelector('[data-author]').value;

  const book = new bkScript.Book(title, author);
  uiScript.BookUI.addBooks(book);
  bkScript.Book.addItem(book);
  uiScript.BookUI.clearFields();
});
document.getElementById('section-book-list').addEventListener('click', (e) => {
  uiScript.BookUI.deleteBook(e.target);
  // eslint-disable-next-line max-len
  bkScript.Book.deleteItem(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});