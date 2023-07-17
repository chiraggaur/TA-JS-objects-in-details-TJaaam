// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let methods = {
    eat : function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        return  this.location = newLocation;
    },
    summary : function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
};

let dogExtraMethods = {
    bark : function(){
       alert (`I am ${this.name} and I can bark 🐶`);
    },
    changeName : function(newName){
       this.name = newName;
    },
    changeColor : function(newColor){
        this.color = newColor;
    },
    summary : function(){
       return  `I am ${this.name} and I am of ${this.color} color. I can also bark`;

    }
    
}
 Object.setPrototypeOf(dogExtraMethods,methods);

function animalDog(location,numberOfLegs,name,color){
    let obj = Object.create(dogExtraMethods);
    obj.name = name;
    obj.color = color;
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;


}
let catExtraMethods = {
    meow(){
       alert (`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName){
       this.name = newName;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
    },
    summary(){
       return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

    }
    
}
 Object.setPrototypeOf(catExtraMethods,methods);

function animalCat(location,numberOfLegs,name,colorOfEyes){
    let obj = Object.create(catExtraMethods);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;


}

function animal(location,numberOfLegs){
    let obj = Object.create(methods);
        obj.location = location;
        obj.numberOfLegs = numberOfLegs;
        return obj;
} 
//  let dog = animal("delhi",4);
   

