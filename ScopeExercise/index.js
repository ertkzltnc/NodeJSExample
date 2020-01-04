class OutOfContext {
    constructor() {
        this.name = "Ertuğrul";
        this.age = 25;


    }
    showMeData() {
      setTimeout(()=> {
        this.printData();   
      
          
      },3000);

    //   setTimeout(function() {
    //     this.printData();   
      
          
    //   },3000);

    }

    printData(){
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)

    }
}
var x=new OutOfContext();
x.showMeData();