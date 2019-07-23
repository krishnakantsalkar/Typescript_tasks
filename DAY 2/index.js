//enum method for books
function BookDetails() {
    var books = [{
            name: 'The Shining',
            Genre: userBooks.horror,
            genre: 'horror',
            author: 'Stephen King',
            price: '20$',
            pages: '785',
            avl: true
        },
        {
            name: 'Memoirs of Sherlock Holmes',
            Genre: userBooks.detective,
            genre: 'detective',
            author: 'Arthur C. Doyle',
            price: "8$",
            pages: '385',
            avl: false
        },
        {
            name: 'Goosebumps: Horrorland',
            Genre: userBooks.horror,
            genre: 'horror',
            author: 'R.L. Stine',
            price: "4$",
            pages: '286',
            avl: true
        },
        {
            name: 'Harry Potter and the Goblet of Fire',
            Genre: userBooks.fantasy,
            genre: 'fantasy',
            author: 'J.K. Rowling',
            price: "13$",
            pages: '436',
            avl: false
        },
        {
            name: 'I, Robot',
            Genre: userBooks.scifi,
            genre: 'horror',
            author: 'Isaac Asimov',
            price: "7$",
            pages: '287',
            avl: true
        }
    ];
    return books;
}
;
var userBooks;
(function (userBooks) {
    userBooks[userBooks["horror"] = 0] = "horror";
    userBooks[userBooks["detective"] = 1] = "detective";
    userBooks[userBooks["fantasy"] = 2] = "fantasy";
    userBooks[userBooks["scifi"] = 3] = "scifi";
})(userBooks || (userBooks = {}));
;
function userBookDetails(books) {
    console.log("Genre: " + userBooks[books]);
    var userBookOutput = [];
    var newBookDetail = BookDetails();
    for (var _i = 0, newBookDetail_1 = newBookDetail; _i < newBookDetail_1.length; _i++) {
        var b = newBookDetail_1[_i];
        if (b.avl) {
            userBookOutput.push("Book is Available:", b.name, b.author);
        }
        // else { userBookOutput.push("","Following book is not available:",b.name,b.author);
        // }
    }
    console.log(userBookOutput);
    return userBookOutput;
}
userBookDetails(userBooks.horror);
