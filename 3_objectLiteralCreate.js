// Create books with object literal syntax
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount.
  // Write code here:

  var book1 = {
      title: "Yes Please",
      author: "Amy Poehler",
      pageCount: 329
    };

  var book2 = {
      title: "Harriet the Spy",
      author: "Louise Fitzhugh",
      pageCount: 330
    };

  var book3 = {
      title: "Franny and Zooey",
      author: "J.D. Salinger",
      pageCount: 202
    };

  // Add a property of haveRead to each book object you created. This should be set to true or false.
  // Write code here:
  book1.haveRead = true;
  book2.haveRead = true;
  book3.haveRead = false;

  // Store these objects in an array called books.
  // Write code here:
  var books = [book1, book2, book3];

  // return this array
  return books;
}
// call threeBooks and console log the return
console.log(threeBooks());
