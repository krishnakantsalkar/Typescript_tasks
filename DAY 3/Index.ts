//practice of function types

function Books(author: string, price: number): string {
  if (author) {
    console.log(author);
  }
  if (price) {
    console.log(price);
  }
  return author;
}

let course: (auth: string, pric: number) => string;
course = Books;
course("Stephen king", 20);

let course1: (mainauth: string, pricee: number) => string;
course1 = course;
course("R.L.Stine", 8);
