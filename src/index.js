console.log('%c HI', 'color: firebrick')

function fetchImages() {
    // To pass the tests, don't forget to return your fetch!
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((img) => renderBooks(img));
  }

  function renderImages(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const img = document.createElement('img');
      h2.innerHTML = book.name;
      main.appendChild(img);
    });
  }