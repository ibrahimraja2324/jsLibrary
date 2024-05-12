document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
})

const myLibrary = [];

function Book(bookName, authorName, readStatus) {
  this.bookName = bookName;
  this.authorName = authorName
  this.readStatus = readStatus
}

function addBookToLibrary() {
  // do stuff here
  var bookName = document.getElementById("bookName").value;
  var authorName = document.getElementById("authorName").value;
  var readStatus = document.getElementById("readStatus").checked;

  var newBook = new Book(bookName, authorName, readStatus)

  myLibrary.push(newBook)

  displayLibrary()
}

function displayLibrary() {
  var tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = '';

  myLibrary.forEach((item,index) => {
    const row = document.createElement('tr');

    const bNameCell = document.createElement('td')
    bNameCell.textContent = item.bookName;
    row.appendChild(bNameCell)

    const aNameCell = document.createElement('td')
    aNameCell.textContent = item.authorName;
    row.appendChild(aNameCell)

    const rStatusCell = document.createElement('td')
    rStatusCell.textContent = item.readStatus ? "Read" : "Not Read";
    row.appendChild(rStatusCell)

    const deleteCell = document.createElement('td')
    const deleteButton = document.createElement('button')

    deleteButton.textContent = 'Delete'

    deleteButton.setAttribute('data-index', index);

    deleteButton.addEventListener('click', (event) => {
      const rowIndex = event.target.getAttribute('data-index');
      myLibrary.splice(rowIndex, 1);
      displayLibrary();
    })

    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    

    tableBody.appendChild(row)
  })
}

