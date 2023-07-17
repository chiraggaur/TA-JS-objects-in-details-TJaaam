// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// Pseudoclassical Pattern




//  Object.setPrototypeOf(dogExtraMethods,methods);

// function animalDog(location,numberOfLegs,name,color){
//     let obj = Object.create(dogExtraMethods);
//     obj.name = name;
//     obj.color = color;
//     obj.location = location;
//     obj.numberOfLegs = numberOfLegs;
//     return obj;


// }
// let catExtraMethods = {
//     meow(){
//        alert (`I am ${this.name} and I can do mewo meow 😹`);
//     },
//     changeName(newName){
//        this.name = newName;
//     },
//     changeColorOfEyes(newColor){
//         this.colorOfEyes = newColor;
//     },
//     summary(){
//        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

//     }
    
// }
//  Object.setPrototypeOf(catExtraMethods,methods);

// function animalCat(location,numberOfLegs,name,colorOfEyes){
//     let obj = Object.create(catExtraMethods);
//     obj.name = name;
//     obj.colorOfEyes = colorOfEyes;
//     obj.location = location;
//     obj.numberOfLegs = numberOfLegs;
//     return obj;


// }

// Animal.prototype = {
//     eat : function(){
//         console.log(`I live in ${this.location} and I can eat`)
//     },
//     changeLocation: function(newLocation){
//         return  this.location = newLocation;
//     },
//     summary : function(){
//         return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//     }
// };
// function Animal(location,numberOfLegs){
//         this.location = location;
//         this.numberOfLegs = numberOfLegs;
// } 

// AnimalCat.prototype = {
//     meow(){
//        alert (`I am ${this.name} and I can do mewo meow 😹`);
//     },
//     changeName(newName){
//        this.name = newName;
//     },
//     changeColorOfEyes(newColor){
//         this.colorOfEyes = newColor;
//     },
//     summary(){
//        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

//     }
    
// }
// Object.setPrototypeOf(AnimalCat.prototype,Animal.prototype);

// function AnimalCat (location,numberOfLegs,name,colorOfEyes){
//      Animal.call(this,location,numberOfLegs);
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
// } 

//  let dog1 = new Animal("delhi",4);
//  let dog2 = new AnimalDog("delhi",4,"Bruno","brown");
//  let cat1 = new AnimalCat("delhi",4,"Bruno","white");
   

//  - Class Pattern




class Animal{
    constructor (location,numberOfLegs){
        // this object data
        this.location = location;
        this.numberOfLegs = numberOfLegs;
}    
    // methods
    eat (){
        console.log(`I live in ${this.location} and I can eat`)
    };
    changeLocation(newLocation){
        return  this.location = newLocation;
    };
    summary (){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    };

}




class AnimalDog extends Animal{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs);
       this.name = name;
       this.color = color;
    } 
    bark (){
        alert (`I am ${this.name} and I can bark 🐶`);
     };
     changeName(newName){
        this.name = newName;
     };
     changeColor(newColor){
         this.color = newColor;
     };
     summary (){
        return  `I am ${this.name} and I am of ${this.color} color. I can also bark`;
 
     }
} 

class AnimalCat extends Animal{
    constructor(location,numberOfLegs,name,colorOfEyes){
        super(location,numberOfLegs);
       this.name = name;
       this.colorOfEyes = colorOfEyes;
    } 
    meow(){
       alert (`I am ${this.name} and I can do mewo meow 😹`);
    };
    changeName(newName){
       this.name = newName;
    };
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
    };
    summary(){
       return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

    }
} 


 let dog1 = new Animal("delhi",4);
 let dog2 = new AnimalDog("delhi",4,"Bruno","brown");
  let cat1 = new AnimalCat("delhi",4,"Bruno","white");