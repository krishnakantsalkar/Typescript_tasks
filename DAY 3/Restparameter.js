function Book1() {
    //1-create function
    var books = [
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
function Rest(id) {
    var books = Book1();
    return books.filter(function (item) { return item.id === id; })[0];
}
function createRestParam() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var storebooks = [];
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var d = rest_1[_a];
        var bookid = Rest(d);
        storebooks.push(bookid.name, bookid.genre);
    }
    console.log(storebooks);
    return storebooks;
}
createRestParam(1);
