// - [ ] Using function to create object

//  function userList(name,id,noOfProjects){
//     let store = {};
//     store.name = name;
//     store.id = id;
//     store.noOfProjects = noOfProjects;
//     store.getProjects = function (){
//         return this.noOfProjects;
//     };
//     store.changeName = function (newName){
//         return this.name;
//     };
//     store.incrementProject = function (){
//         return this.noOfProjects = store.noOfProjects + 1 ;
//     };
//     store.decrementProject = function (){
//         return this.noOfProjects = store.noOfProjects - 1 ;
//     };

//     return store;
//  }  
//  let user1 = userList("chirag",123,100);
//  let user2 = userList("chirag",123,100);

// - [ ] Using Object.create (prototypal pattern)

// let methods = {
//     getProjects : function (){
//         return this.noOfProjects;
//     },
//     changeName :function (newName){
//         return this.name;
//     },
//     incrementProject :function (){
//         return this.noOfProjects = this.noOfProjects + 1 ;
//     },
//     decrementProject : function (){
//         return this.noOfProjects = this.noOfProjects - 1 ;
//     }

// }

// function userList(name,id,noOfProjects){
//     let store = Object.create(methods);
//     store.name = name;
//     store.id = id;
//     store.noOfProjects = noOfProjects;
    
//     return store;
//  }  
//  let user1 = userList("chirag",123,100);
//  let user2 = userList("chirag",123,100);

// - [ ] Using Pseudoclassical Way

// function userList(name,id,noOfProjects){
//     // let store = Object.create(userList.prototype);
    
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
    
//     // return store;
//  }  

// userList.prototype = {
//     getProjects : function (){
//         return this.noOfProjects;
//     },
//     changeName :function (newName){
//         return this.name;
//     },
//     incrementProject :function (){
//         return this.noOfProjects = this.noOfProjects + 1 ;
//     },
//     decrementProject : function (){
//         return this.noOfProjects = this.noOfProjects - 1 ;
//     }

// }


//  let user1 = new  userList("chirag",123,100); // new will automate object creation, prototype methods assign and return object;
//  let user2 = new userList("chirag",123,100);

// - [ ] Using Class



class userList {

       constructor (name,id,noOfProjects){
        // let store = Object.create(userList.prototype);
        
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
        
        // return store;
     }  
        getProjects (){
            return this.noOfProjects;
        };
        changeName  (newName){
            return this.name;
        };
        incrementProject (){
            return this.noOfProjects = this.noOfProjects + 1 ;
        };
        decrementProject  (){
            return this.noOfProjects = this.noOfProjects - 1 ;
        };
    


}


 let user1 = new  userList("chirag",123,100); // new will automate object creation, prototype methods assign and return object;
 let user2 = new userList("chirag",123,100);