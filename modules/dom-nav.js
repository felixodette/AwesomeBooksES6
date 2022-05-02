const btnList = document.querySelector('[data-link-list]');
const btnAdd = document.querySelector('[data-link-add]');
const btnContact = document.querySelector('[data-link-contact]');

const sectList = document.querySelector('.book-list');
const sectAdd = document.querySelector('.add-book');
const sectContact = document.querySelector('.contact-info');

btnList.addEventListener('click', () => {
  btnList.classList.add('active');
  btnAdd.classList.remove('active');
  btnContact.classList.remove('active');
  sectList.style.display = 'block';
  sectAdd.style.display = 'none';
  sectContact.style.display = 'none';
});

btnAdd.addEventListener('click', () => {
  btnList.classList.remove('active');
  btnAdd.classList.add('active');
  btnContact.classList.remove('active');
  sectList.style.display = 'none';
  sectAdd.style.display = 'block';
  sectContact.style.display = 'none';
});

btnContact.addEventListener('click', () => {
  btnList.classList.remove('active');
  btnAdd.classList.remove('active');
  btnContact.classList.add('active');
  sectList.style.display = 'none';
  sectAdd.style.display = 'none';
  sectContact.style.display = 'block';
});