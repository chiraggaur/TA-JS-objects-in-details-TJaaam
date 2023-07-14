// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

//    let methodsOfObj = {
//     isAnswerCorrect(index){
//         return   this.correctAnswerIndex === index? true:false;
//     },
//     getCorrectAnswer(){
//         return 'Kuwait City';
//     }
//    }


//   function question(title,options,correctAnswerIndex){

//     let obj = Object.create(methodsOfObj); // create Dunder prtotype of obj __prototype__
//       obj.title = title;
//       obj.options = options;
//       obj.correctAnswerIndex = correctAnswerIndex;

//       return obj;

//   }

//   let firstQuestion = question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );



// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)




  function question(title,options,correctAnswerIndex){

      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;

  }
  question.prototype = {
    isAnswerCorrect(index){
        return   this.correctAnswerIndex === index? true:false;
    },
    getCorrectAnswer(){
        return 'Kuwait City';
    }
   }

  let firstQuestion = new question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion =  new question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );




// - Create using class

// class question {
//     constructor(title,options,correctAnswerIndex){
//       this.title = title;
//       this.options = options;
//       this.correctAnswerIndex = correctAnswerIndex;
// }

//     isAnswerCorrect(index){
//         return   this.correctAnswerIndex === index? true:false;
//     }
//     getCorrectAnswer(){
//         return 'Kuwait City';
//     }


// }
//    let firstQuestion = new question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  new question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );



