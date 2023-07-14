    
     //For single question we need the following data and methods: 
    


    //  Create the object using the following ways

    // 1. without Object

     //Data 

    //  let Title = "What is your Exact Age ?";
    //  let options = [18,20,24,26,30];
    //  let correctAnswerIndex = 2;
    // Methods
    //  function isAnswerCorrect(index){
    //       if(index === correctAnswerIndex){
    //          return true;
    //       } else {
    //         return false;
    //       }
    //  }
    //  function getCorrectAnswer(){
    //         return 24;
    //  }

    //  2. Organize using object
  
//     let quiz = {
//           Title : "What is your Exact Age ?",
//           options : [18,20,24,26,30],
//           correctAnswerIndex : 2,   
//         isAnswerCorrect(index){
//          if(index === quiz.correctAnswerIndex){
//             return true;
//          } else {
//            return false;
//          }
//     },
//     getCorrectAnswer(){
//            return 24;
//     }
//   }

//   Use a function to create object

// function quizQuestion(Title,options,correctAnswerIndex){
//     let quiz = {};
//     quiz.Title = Title;
//     quiz.options = options;
//     quiz.correctAnswerIndex =  correctAnswerIndex; 
//     quiz.isAnswerCorrect = (index)=>{
//         if(index === quiz.correctAnswerIndex){
//            return true;
//         } else {
//           return false;
//         }
//      };
//     quiz.getCorrectAnswer= ()=>{
//         return 24;
//    };
//    return quiz;
// }


// let userInput = quizQuestion("What is your Exact Age ?",[18,20,24,26,30], 2);

// - Convert the function to use `this` keyword

function quizQuestion(Title,options,correctAnswerIndex){
    let quiz = {};
    quiz.Title = Title;
    quiz.options = options;
    quiz.correctAnswerIndex =  correctAnswerIndex; 
    quiz.isAnswerCorrect = (index)=>{
        if(index === this.correctAnswerIndex){
           return true;
        } else {
          return false;
        }
     };
    quiz.getCorrectAnswer= ()=>{
        return 24;
   };
   return quiz;
}
let userInput = quizQuestion("What is your Exact Age ?",[18,20,24,26,30], 2);