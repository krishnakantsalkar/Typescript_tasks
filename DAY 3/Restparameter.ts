function Book1() {
  let books = [
    {
      id: 1,
      name: "The Shining",
      genre: "horror",
      author: "Stephen King",
      price: "20$",
      pages: "785",
      avl: true
    },
    {
      id: 2,
      name: "Memoirs of Sherlock Holmes",
      genre: "detective",
      author: "Arthur C. Doyle",
      price: "8$",
      pages: "385",
      avl: false
    },
    {
      id: 3,
      name: "Goosebumps: Horrorland",
      genre: "horror",
      author: "R.L. Stine",
      price: "4$",
      pages: "286",
      avl: true
    },
    {
      id: 4,
      name: "Harry Potter and the Goblet of Fire",
      genre: "fantasy",
      author: "J.K. Rowling",
      price: "13$",
      pages: "436",
      avl: false
    },
    {
      id: 5,
      name: "I, Robot",
      genre: "horror",
      author: "Isaac Asimov",
      price: "7$",
      pages: "287",
      avl: true
    }
  ];
  return books;
}

function Rest(id: number) {
  let books = Book1();
  return books.filter(item => item.id === id)[0];
}

function createRestParam(...rest: number[]): string[] {
  let storebooks: string[] = [];
  for (let d of rest) {
    let bookid = Rest(d);
    storebooks.push(bookid.name, bookid.genre);
  }
  console.log(storebooks);
  return storebooks;
}
createRestParam(1);
