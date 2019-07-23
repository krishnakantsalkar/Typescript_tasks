function BookDetails() {
    var books = [{
            name: 'The Shining',
            genre: 'horror',
            author: 'Stephen King',
            price: '20$',
            pages: '785',
            avl: true
        },
        {
            name: 'Memoirs of Sherlock Holmes',
            genre: 'detective fiction',
            author: 'Arthur C. Doyle',
            price: "8$",
            pages: '385',
            avl: false
        },
        {
            name: 'Goosebumps: Horrorland',
            genre: 'horror',
            author: 'R.L. Stine',
            price: "4$",
            pages: '286',
            avl: true
        },
        {
            name: 'Harry Potter and the Goblet of Fire',
            genre: 'fantasy',
            author: 'J.K. Rowling',
            price: "13$",
            pages: '436',
            avl: false
        },
        {
            name: 'I, Robot',
            genre: 'Sciene Fiction',
            author: 'Isaac Asimov',
            price: "7$",
            pages: '287',
            avl: true
        }
    ];
    return books;
}
;
function currentBookDetails(data) {
    var storecurrentBookDetails;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (d.avl) {
            storecurrentBookDetails = d.name + " - " + d.author + " " + d.genre + " " + d.price;
            break;
        }
        ;
    }
    ;
    console.log(storecurrentBookDetails);
    return storecurrentBookDetails;
}
;
var newbookdetail = BookDetails();
currentBookDetails(newbookdetail);
