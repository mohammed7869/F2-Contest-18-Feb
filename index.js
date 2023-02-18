// Initialize the array to store issued books
const issuedBooks = [];

// Get references to the form and table elements
const issueBookForm = document.getElementById('issue-book-form');
const issuedBooksTableBody = document.querySelector('#issued-books-table tbody');

// Add a submit event listener to the form
issueBookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values of the book name and issued to inputs
  const bookName = document.getElementById('book-name').value;
  const issuedTo = document.getElementById('issued-to').value;

  // Generate a unique ID for the new book object
  const id = issuedBooks.length + 1;

  // Get the current date and time for the issued time field
  const issuedTime = new Date().toLocaleString();

  // Create a new book object with the generated ID and the form inputs
  const newBook = {
    id,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: issuedTime,
    status: 'issued'
  };

  // Add the new book object to the issuedBooks array
  issuedBooks.push(newBook);

  // Create a new row in the table for the issued book
  const newRow = issuedBooksTableBody.insertRow();
  newRow.innerHTML = `
    <td>${newBook.id}</td>
    <td>${newBook.book_name}</td>
    <td>${newBook.issued_to}</td>
    <td>${newBook.issued_time}</td>
    <td>${newBook.status}</td>
  `;

  // Reset the form inputs
  issueBookForm.reset();
});

// Add a submit event listener to the form
issueBookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values of the book name and issued to inputs
  const bookName = document.getElementById('book-name').value;
  const issuedTo = document.getElementById('issued-to').value;

  // Generate a unique ID for the new book object
  const id = issuedBooks.length + 1;

  // Get the current date and time for the issued time field
  const issuedTime = new Date().toLocaleString();

  // Create a new book object with the generated ID and the form inputs
  const newBook = {
    id,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: issuedTime,
    status: 'issued'
  };

  // Add the new book object to the issuedBooks array
  issuedBooks.push(newBook);

  // Create a new row in the table for the issued book
  const newRow = issuedBooksTableBody.insertRow();
  newRow.innerHTML = `
    <td>${newBook.id}</td>
    <td>${newBook.book_name}</td>
    <td>${newBook.issued_to}</td>
    <td>${newBook.issued_time}</td>
    <td contenteditable="true">${newBook.status}</td>
  `;

  // Reset the form inputs
  issueBookForm.reset();
});

// Add a function to update the status of an issued book
function updateBookStatus(id, newStatus) {
  // Find the book object in the issuedBooks array
  const bookIndex = issuedBooks.findIndex(book => book.id === id);

  // Update the book object's status property
  issuedBooks[bookIndex].status = newStatus;
}



  // Check if the clicked cell is in the "Status" column
  if (target.cellIndex === 4) {
    // Get the ID of the book from the first cell in the row
    const bookId = Number(target.parentNode.cells[0])}
