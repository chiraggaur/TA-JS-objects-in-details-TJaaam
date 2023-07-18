// ## An object-oriented book-list!

// - [ ] Create a class BookList
// - [ ] Create another class called Book

class BookList{
    constructor(){};
}
class Book {
    constructor(){};
}

// #### Each Book should have several properties:

// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate


class Book {
    constructor(Title,Category,Author,isRead = false,finishedDate){
        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
   };
}

// Book class will have the following methods:

// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

class Book {
    constructor(Title,Category,Author,isRead = false,finishedDate){
        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
   }
      markBookAsRead(){
       this.isRead = true;
       this.finishedDate = Date.now();
      }; 
}
let book2 = new Book("Creator","autobiography","me",false,1/2/2021);

// #### BookList should have the following properties:
class BookList{
    constructor(booksArray,readBookIndex){
         this.booksArray = booksArray;
         this.readBookIndex = readBookIndex;
    };
}

// 1. An array of all the Books
// 2. Current read book index

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

class BookList{
    constructor(booksArray,readBookIndex){
         this.booksArray = booksArray;
         this.readBookIndex = readBookIndex;
    }
      add([Book]){
        this.booksArray = this.booksArray.concat(Book);
      };
      getCurrentBook(){
        return this.booksArray[this.readBookIndex ];
      };
      getNextBook(){
        return this.booksArray[this.readBookIndex + 1 ];
      };
      getPrevBook(){
        return this.booksArray[this.readBookIndex - 1 ];
      };
      changeCurrentBook(cb){
        return this.booksArray[cb];
      };
}
  let book1 = new BookList(["notevil","BigDam","Color","KotaFactory"],1);

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
