// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

    //  function createUser(name,age){
    //     let obj = {};
    //     obj.name = name;
    //     obj.age = age;
    //     return obj;
    //  }
     
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
    //  function createUser(name,age){
    //     let obj = {};
    //     obj.name = name;
    //     obj.age = age;
    //    obj.sayHello = function(){
    //     alert `Welcome ${this.name}`;
    //     return obj;
    //  }
    // }
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

    //  function createUser(name,age){
    //     let obj = {};
    //     obj.name = name;
    //     obj.age = age;
    //     obj.sayHello = function(){
    //     alert `Welcome ${this.name}`;
    // }
    //     return obj;
    // }
    //      let personOne = createUser("anmol",18);
    //      let personTwo = createUser ("sumit",20);   

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
     
    //  let input = {
    //     sayHello : function(){
    //       alert `Welcome ${this.name}`; // this not working doubt 
    //     //   return this.name;
    //  }
    // }

    //    function createUser(name,age){
    //     let obj = Object.create(input);
    //     obj.name = name;
    //     obj.age = age;
    //     return obj;
    // }
      
    //      let personOne = createUser("anmol",18);
    //      let personTwo = createUser ("sumit",20); 

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

    //  createUser.prototype = {
    //     sayHello : function(){
    //       alert `Welcome ${this.name}`; // this not working doubt 
    //     //   return this.name;
    //  }
    // }

    //    function createUser(name,age){
    //     let obj = Object.create(createUser.prototype);
    //     obj.name = name;
    //     obj.age = age;
    //     return obj;
    // }
      
    //      let personOne = createUser("anmol",18);
    //      let personTwo = createUser ("sumit",20); 

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

    //  createUser.prototype = {
    //     sayHello : function(){
    //       alert `Welcome ${this.name}`; // this not working doubt 
    //     //   return this.name;
    //  }
    // }

    //    function createUser(name,age){
    //     this.name = name;
    //     this.age = age;

    // }
      
    //      let personOne = new createUser("anmol",18);
    //      let personTwo = new createUser ("sumit",20); 

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
        //  personOne.sayHello();

        //  personTwo.sayHello(); // doubt in this used above

// 8. Convert the `createUser` function into `User` class.


       class user {
            constructor(name,age){
            this.name = name;
            this.age = age;
    
        }
            sayHello(){
                alert `Welcome ${this.name}`; // this not working doubt 
            //   return this.name;
        }
       }

      
         let personOne = new user("anmol",18);
         let personTwo = new user ("sumit",20);

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
         
    //    createUser("aman",20);