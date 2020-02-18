var Vehicle=require("./vehicle");

module.exports=class Car extends Vehicle{

    constructor (){
        super("Car");
    }
    speedUp(){
        super.speedUp(60);
    }
}

