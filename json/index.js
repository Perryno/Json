let books = [
  { title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007 },
  { title: "The Wise Man's Fear", author: "Patrick Rothfuss", year: 2011 },
  { title: "The Slow Regard of Silent Things", author: "Patrick Rothfuss", year: 2014 },
  { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 },
  { title: "A Clash of Kings", author: "George R.R. Martin", year: 1998 },
  { title: "A Storm of Swords", author: "George R.R. Martin", year: 2000 },
  { title: "A Feast for Crows", author: "George R.R. Martin", year: 2005 },
  { title: "A Dance with Dragons", author: "George R.R. Martin", year: 2011 },
  { title: "The Winds of Winter", author: "George R.R. Martin", year: 2022 },
  { title: "A Dream of Spring", author: "George R.R. Martin", year: 2022 }
];

let booksJSON = JSON.stringify(books);

localStorage.setItem("books", booksJSON);
