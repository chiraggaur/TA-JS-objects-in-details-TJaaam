

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
     eat(){
        return `I eat a lot `;
     };
     sleep(){
        return `I sleep less`;
     };
     walk(){
        return `I walk Daily`;
     }
}

class Player extends Person{
     
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){
        return 'I am a player';
    }
}
class Cricketer extends Player{
     
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        return 'I play Cricket';
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        return 'I Teach Maths upto Clas 10';
    }
}
class Artist extends Person{
      constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
      }
      createArt(){
        return `I create Songs`;
      }

}
 let person1 = new Cricketer("Anmol",24,"Male","Cricket","India");   