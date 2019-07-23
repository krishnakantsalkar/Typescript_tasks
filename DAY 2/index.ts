//enum method for books

function BookDetails(){          //1-create function
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


enum userBooks {'horror','detective','fantasy','scifi'}; //2-create an enum (user defined data type)

function userBookDetails(books:userBooks):Array<string>{  //3-create function method enter parameter,return type: generic array of string
    console.log(`Genre: ${userBooks[books]}`); //3-define index of parameter to return value instead of index
    let userBookOutput:string[] = []; //4-create variable and and let it hav empty string array
    let newBookDetail = BookDetails(); // 5-create variable and store book details
    for(let b of newBookDetail){ //6-apply for of loop
        if(b.avl){
            userBookOutput.push ("Book is Available:",b.name, b.author,b.price); // if avl is true push values in empty string above
            break;
        }

        else { userBookOutput.push("","Following book is not available:",b.name,b.author,b.price);
            
        }

    }
console.log(userBookOutput); //7-
return userBookOutput; //8- 

}

userBookDetails(userBooks.horror);//9- call fuction and enter paramaters