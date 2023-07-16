 // ## More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

    // class Square {
    //     contructor(side){  // width & height to side doubt 
            // this.width = width;
            // this.height = height
    //     }
    // } 

// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

// class Square {
//     contructor(side){  // width & height to side doubt 
            // this.width = side;
            // this.height = side;
//     }
//     description(){
//         alert (`The square is ${width} x ${height}`);
//     }
// } 

// - Create another method named `calcArea` that will return the area of the square.


// class Square {
//     contructor(side){  // width & height to side doubt 
            // this.width = side;
            // this.height = side;
//     }
//     description(){
//         alert (`The square is ${width} x ${height}`);
//     }
//     calcArea(){
//         return this.side * this.side;
//     }
// } 


// - Create a getter method named `area` that will return area of the square.

// class Square {
//     contructor(side){  // width & height to side doubt 
            // this.width = side;
            // this.height = side;
//     }
//     description(){
//         alert (`The square is ${width} x ${height}`);
//     }
//     calcArea(){
//         return this.side * this.side;
//     }
//     get area(){
//         return this.side * this.side;
//     }
// } 

// - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

    // class Square {
    //     contructor(side){  // width & height to side doubt 
    //         this.width = side;
    //         this.height = side;
    //     }
    //     set area(value){
    //         this.width = 12;
    //         this.height = 12;
    //     }
    // } 

// - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

    // class Square {
    //     contructor(side){  // width & height to side doubt 
    //         this.width = width;
    //         this.height = height
    //     }
    //      static isEqual(){
    //         if(square1.area() === square2.area()){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //      }
    // } 
    //   let square1 = new Square(12);  // return true
    //   let square2 = new Square(12);

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

  //   let square1 = new Square(12);  // return true
    //   let square2 = new Square(12);

// - Check the `area` getter method on both square.

    //  square1.area();
    //  square2.area();

// - Check the `isEqual` method and pass the two instance you created above.

    //  Square.isEqual();

// ## User Class

// - Create a class named `User` that accepts `firstName` and `lastName` property

// class User {
//     constructor(firstName,lastName){

//     }
// }

// - Create a getter method named `fullName` that will return the full name of the person.

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     get fullName(){
//            return this.firstName + this.lastName;
//     }
// }

// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)


// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     set fullName(fullname){
//            this.firstName = fullname.split(' ')[0];
//            this.lastName = this.lastName.split(' ')[1];

//            if(fullname.length < 5){
//                 alert `Full name should be more than 5 characters`;
//            }
//     }
// }  // let user1 = new User("Ankit","Bhola"); 

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//       nameContains(str){
//          let fullname = this.firstName + " "+ this.lastName;
//          return fullname.includes(`${str}`);
//       }
// }


// - Create two instance of the `User` class

// let user1 = new User("Ankit","Bhola"); 

// - Check by using the `fullName` setter method with name bigger than 5 characters.

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     set fullName(fullname){
//            this.firstName = fullname.split(' ')[0];
//            this.lastName = this.lastName.split(' ')[1];

//            if(fullname.length < 5){
//                 alert `Full name should be more than 5 characters`;
//            }
//     }
// }   let user1 = new User("Ankit","Bhola"); // doubt

// - Check by using the `fullName` setter method with name less than 5 characters.

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     set fullName(fullname){
//            this.firstName = fullname.split(' ')[0];
//            this.lastName = this.lastName.split(' ')[1];

//            if(fullname.length < 5){
//                 alert `Full name should be more than 5 characters`;
//            }
//     }
// }   let user1 = new User("Ankit","Bhola"); // doubt


// - Check the `fullName` using getter

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     get fullName(){
//            return this.firstName + this.lastName;
//     }
// } let user1 = new User("Ankit","Bhola"); // doubt
//      user1.fullName; // in getter method function is not called with brackets () ;

// - Check the `nameContains` method

// class User {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//       nameContains(str){
//          let fullname = this.firstName + " "+ this.lastName;
//          return fullname.includes(`${str}`);
//       }
// }
    //  let user1 = new User("Ankit","Bhola"); // doubt
    //  user1.nameContains("Bhola"); //true