
class Bookly{
    constructor(name,author,url,status = "Not Read"){
        this.name =  name;
        this.author = author;
        this.url = url;
        this.status = status;
    }

     read(currentstatus){
        this.status = currentstatus;
        if(this.status === "Read"){
            return "Completed";
        }
     }
     deleteBook(){
      this = {};
     }


}  let Book1 = new Bookly("lier","no-one","xyz",);