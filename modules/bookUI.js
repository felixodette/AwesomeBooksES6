import { Book } from './book.js';

export default class BookUI {
  static displayBooks() {
    const books = Book.getList();
    books.forEach((book) => BookUI.addBooks(book));
  }

  static addBooks(book) {
    const list = document.querySelector('[data-list-table]');
    const bookRow = document.createElement('tr');
    bookRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="delete btn-secondary" id="btn-remove" data-btn-remove>Remove</button></td>`;
    list.appendChild(bookRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('[data-book]').value = '';
    document.querySelector('[data-author]').value = '';
  }
}