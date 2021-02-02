class mango extends BaseClass{
    constructor(x,y,height,angle){

    
      super(x,y,50,height,angle);
      this.image = loadImage("Plucking mangoes_images/mango.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }

   
