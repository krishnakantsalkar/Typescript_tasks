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
; //2-create an enum (user defined data type)
function userBookDetails(books) {
    console.log("Genre: " + userBooks[books]); //3-define index of parameter to return value instead of index
    var userBookOutput = []; //4-create variable and and let it hav empty string array
    var newBookDetail = BookDetails(); // 5-create variable and store book details
    for (var _i = 0, newBookDetail_1 = newBookDetail; _i < newBookDetail_1.length; _i++) { //6-apply for of loop
        var b = newBookDetail_1[_i];
        if (b.avl) {
            userBookOutput.push("Book is Available:", b.name, b.author, b.price); // if avl is true push values in empty string above
            break;
        }
        else {
            userBookOutput.push("", "Following book is not available:", b.name, b.author, b.price);
        }
    }
    console.log(userBookOutput); //7-
    return userBookOutput; //8- 
}
userBookDetails(userBooks.horror); //9- call fuction and enter paramaters
