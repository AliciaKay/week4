// Create books with object literal syntax
function threeBooks(title, author, pageCount) {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount.
  // Write code here:
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
}

var book1 = new threeBooks("Yes Please", "Amy Poehler", 329);

var book2 = new threeBooks("Harriet the Spy", "Louise Fitzhugh", 330);

var book3 = new threeBooks("Franny and Zooey", "J.D. Salinger", 202);

  // Add a property of haveRead to each book object you created. This should be set to true or false.
  // Write code here:
threeBooks.prototype.haveRead = boolean;
book1.haveRead = true;
book2.haveRead = true;
book3.haveRead = false;
  // Store these objects in an array called books.
  // Write code here:
var books = Array.from(threeBooks);

  // return this array
  return books;
}
// call threeBooks and console log the return
console.log(threeBooks);
