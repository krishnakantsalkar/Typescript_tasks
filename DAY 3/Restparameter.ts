function Book1() {
  //create function
  let books = [
    {
      id: 1, //1- give id to all objects
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
  //6-create new function with parameter that you want
  let books = Book1(); //7- call the main object array here in a new variable
  return books.filter(item => item.id === id)[0]; //8- in the new variable apply filter to get desired data
}

function createRestParam(...rest: number[]): string[] {
  //2-create function with rest parameter like this
  let storebooks: string[] = []; //3-create an empty array to store output values
  for (let d of rest) {
    //4- apply for of loop
    let bookid = Rest(d); //5- make a new function and store that func in variable
    storebooks.push(bookid.name, bookid.genre); //9- push the filtered data inside empty array
  }
  console.log(storebooks); //10- outside for of loop print the output of loop
  return storebooks; //11- return value
}
createRestParam(1); //12- invoke the function , pass the parameter
