//practice of function types
function Books(author, price) {
    if (author) {
        console.log(author);
    }
    if (price) {
        console.log(price);
    }
    return author;
}
var course;
course = Books;
course("Stephen king", 20);
var course1;
course1 = course;
course("R.L.Stine", 8);
