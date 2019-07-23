//enum method for books

function BookDetails(){          //create function
    let books =[{                               //you create object array here
        name : 'The Shining',
        Genre : userBooks.horror,
        genre: 'horror',
        author : 'Stephen King',
        price : '20$',
        pages : '785',
        avl : true

    },
    {
        name :'Memoirs of Sherlock Holmes',
        Genre : userBooks.detective,
        genre: 'detective',
        author : 'Arthur C. Doyle',
        price : "8$",
        pages : '385',
        avl : false

    },
    {
        name :'Goosebumps: Horrorland',
        Genre : userBooks.horror,
        genre: 'horror',
        author : 'R.L. Stine',
        price : "4$",
        pages : '286',
        avl : true
    },
    {
        name :'Harry Potter and the Goblet of Fire',
        Genre : userBooks.fantasy,
        genre: 'fantasy',
        author : 'J.K. Rowling',
        price : "13$",
        pages : '436',
        avl : false
    },
    {
        name :'I, Robot',
        Genre : userBooks.scifi,
        genre: 'horror',        
        author : 'Isaac Asimov',
        price : "7$",
        pages : '287',
        avl : true
    }

];
return books;
};


enum userBooks {'horror','detective','fantasy','scifi'};

function userBookDetails(books:userBooks):Array<string>{
    console.log(`Genre: ${userBooks[books=1]}`);
    let userBookOutput:string[] = [];
    let newBookDetail = BookDetails();
    for(let b of newBookDetail){
        if(b.avl){
            userBookOutput.push ("Book is Available:",b.name, b.author);
            break;
        }

        // else { userBookOutput.push("","Following book is not available:",b.name,b.author);
            
        // }

    }
console.log(userBookOutput);
return userBookOutput;

}

userBookDetails(userBooks.horror);