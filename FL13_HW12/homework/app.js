const root = document.getElementById('root');
let bookList = JSON.parse(localStorage.getItem('bookList'));
let leftPart = document.createElement('div');
leftPart.setAttribute('class', 'left-part');
let rightPart = document.createElement('div');
rightPart.setAttribute('class', 'right-part');
let addBook = document.createElement('button');
addBook.setAttribute('class', 'add-button');
addBook.textContent = 'Add book';
let editBook = document.createElement('button');
editBook.setAttribute('class', 'edit-button');

function createDom(obj) {

  if(!obj) {
    return ;
  }

  leftPart.innerHTML = '';

  for (let el of obj) {
    let book = document.createElement('a');
      book.setAttribute('class', 'book');
      book.setAttribute('href', `?id=${el.id}#preview`);
      book.innerHTML = el.title;
      let bookContainer = document.createElement('div');
      bookContainer.setAttribute('class', 'book-container');
     
      let editBtn = editBook.cloneNode(true);
      editBtn.setAttribute('id', `${obj.indexOf(el) + 1}`);
      editBtn.textContent = 'Edit';
      bookContainer.append(book, editBtn);
      leftPart.append(bookContainer);
  }
  
  leftPart.append(addBook);
  root.append(leftPart, rightPart);
}

createDom(bookList);

let title, author, image, plot;
title = document.createElement('h2');
author = document.createElement('div');
author.setAttribute('class', 'author');
image = document.createElement('img');
plot = document.createElement('div');
plot.setAttribute('class', 'plot');

let updatestate = function(state) {
  if (!state) {
    return;
  }

  let id = state.page.match(/=\d#/);
  console.log(id);
  
  if (id) {
    let id2 = id[0][1] - 1;
    rightPart.innerHTML = '';
    image.setAttribute('src', `${bookList[`${id2}`].url}`);
    title.innerHTML = bookList[`${id2}`].title;
    author.innerHTML = bookList[`${id2}`].author;
    plot.innerHTML = bookList[`${id2}`].plot;
    rightPart.append(title, author, image, plot);
  }
};

window.addEventListener('popstate', function(e) {

  if (e.state !== null) {
    updatestate(e.state);
  } else {
    updatestate(null);
  }
});

if (localStorage.getItem('localState')) {
  let localState = JSON.parse(localStorage.getItem('localState'));
  updatestate(localState);
}

let saveBook = function(id) {
  let newBook;

  if (typeof id === 'number') {
     newBook = {
      id: `${id + 1}`,
      title: document.querySelector('.title').value,
      author: document.querySelector('.author').value,
      url: document.querySelector('.url').value,
      plot: document.querySelector('.plot').value
    };

    bookList[id] = newBook;
    localStorage.setItem('bookList', JSON.stringify(bookList));
  } else { 

    newBook = {
      id: `${bookList.length + 1}`,
      title: document.querySelector('.title').value,
      author: document.querySelector('.author').value,
      url: document.querySelector('.url').value,
      plot: document.querySelector('.plot').value
    };
    bookList.push(newBook);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
  
  createDom(bookList);
};

leftPart.addEventListener('click', function(event) {
  let state;
  if (event.target.tagName === 'A') {
    state = { page: event.target.getAttribute('href') };
    localStorage.setItem('localState', JSON.stringify(state));
    history.pushState(state, '', state.page);
    updatestate(state);
    event.preventDefault();
  }

  if (event.target.className === 'add-button') {
    rightPart.innerHTML = '';
    state = { page: './index.html#add' };
    localStorage.setItem('localState', JSON.stringify(state));
    history.pushState(state, '', state.page);
    updatestate(state);
    event.preventDefault();

    let newForm = document.createElement('form');
    let pName = document.createElement('p');
    pName.textContent = 'Title';
    let pAuthor = document.createElement('p');
    pAuthor.textContent = 'Author';
    let pUrl = document.createElement('p');
    pUrl.textContent = 'Url';
    let pPlot = document.createElement('p');
    pPlot.textContent = 'Plot';
    let inputName = document.createElement('input');
    inputName.setAttribute('required', '');
    inputName.setAttribute('class', 'title');
    let inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('required', '');
    inputAuthor.setAttribute('class', 'author');
    let inputUrl = document.createElement('input');
    inputUrl.setAttribute('required', '');
    inputUrl.setAttribute('class', 'url');
    inputUrl.setAttribute('type', 'url');
    let inputPlot = document.createElement('input');
    inputPlot.setAttribute('required', '');
    inputPlot.setAttribute('class', 'plot');
    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Submit');
    inputSubmit.setAttribute('class', 'submit');

    newForm.append(pName, inputName, pAuthor, inputAuthor, pUrl, inputUrl, pPlot, inputPlot, inputSubmit);
    rightPart.append(newForm);

    inputSubmit.addEventListener('click', function () {

      if (inputName.value && inputAuthor.value && inputUrl.value && inputPlot.value) {
        saveBook();
        state = { page: `?id=${event.target.id}#preview` };
        history.pushState(state, '', state.page);
        localStorage.setItem('localState', JSON.stringify(state));
        updatestate(state);
      }

    });
  }

  if (event.target.className === 'edit-button') {
    rightPart.innerHTML = '';
    event.target.setAttribute('href', `?id=${event.target.id}#edit`);
    state = { page: event.target.getAttribute('href') };
    history.pushState(state, '', state.page);
    event.preventDefault();

    let newForm = document.createElement('form');
    let pName = document.createElement('p');
    pName.textContent = 'Title';
    let pAuthor = document.createElement('p');
    pAuthor.textContent = 'Author';
    let pUrl = document.createElement('p');
    pUrl.textContent = 'Url';
    let pPlot = document.createElement('p');
    pPlot.textContent = 'Plot';
    let inputName = document.createElement('input');
    inputName.setAttribute('required', '');
    inputName.setAttribute('class', 'title');
    let inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('required', '');
    inputAuthor.setAttribute('class', 'author');
    let inputUrl = document.createElement('input');
    inputUrl.setAttribute('required', '');
    inputUrl.setAttribute('class', 'url');
    inputUrl.setAttribute('type', 'url');
    let inputPlot = document.createElement('input');
    inputPlot.setAttribute('required', '');
    inputPlot.setAttribute('class', 'plot');

    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Submit');


    let inputSave = document.createElement('input');
    inputSave.setAttribute('type', 'submit');
    inputSave.setAttribute('value', 'Submit');
    inputSave.setAttribute('class', 'submit');

    let inputCancel = document.createElement('button');

    inputCancel.textContent = 'Cancel';
    inputName.value = bookList[event.target.id - 1].title;
    inputAuthor.value = bookList[event.target.id - 1].author;
    inputUrl.value = bookList[event.target.id - 1].url;
    inputPlot.value = bookList[event.target.id - 1].plot;

    inputSave.addEventListener('click', function() {
      if (inputName.value && inputAuthor.value && inputUrl.value && inputPlot.value) {
      saveBook(event.target.id - 1);
      state = { page: `?id=${event.target.id}#preview` };
      history.pushState(state, '', state.page);
      localStorage.setItem('localState', JSON.stringify(state));
      updatestate(state);
      let timeOut = 300;
      setTimeout(() => alert('Book successfully updated'), timeOut);
      }
    });

    inputCancel.addEventListener('click', function() {
      let conf = confirm('Discard changes?');
      if (conf) {
        let prevPage = -1;
        history.go(prevPage);
      }
    });

    newForm.append(pName, inputName, pAuthor, inputAuthor, pUrl, inputUrl, pPlot, inputPlot, inputSave, inputCancel);
    rightPart.append(newForm);

  }

});