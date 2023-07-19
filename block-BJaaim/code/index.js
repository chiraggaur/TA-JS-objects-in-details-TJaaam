class Questions{
    constructor(Title,Options,CorrectAnswer){
        this.Title = Title;
        this.Options = Options;
        this.CorrectAnswer = CorrectAnswer;
    }
    isCorrect(answer){
        if(this.CorrectAnswer === answer){
            return `true`;
        } else {
            return 'false';
        }
    };
    getCorrectAnswer(){
        return this.CorrectAnswer;
    };
    createUI(){
        return "create UI in DOM";
    };
}

class Quiz{
    constructor(allQuestion,activeIndex,score,activeQUESTION){
        this.allQuestion = allQuestion;
        this.activeQUESTION = activeQUESTION;
        this.activeIndex = activeIndex;
        this.score = score;
    }
    nextQuestion(){
      this.activeQUESTION = this.allQuestion[this.activeIndex + 1];

    };
    updateScore(){
        return this.CorrectAnswer;
    };
    createUI(){
        return "create UI in DOM";
    };
}
