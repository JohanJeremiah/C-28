class tree extends BaseClass{
        constructor(x,y,height,angle){

        
          super(x,y,160,height,angle);
          this.image = loadImage("Plucking mangoes_images/tree.png");
          Matter.Body.setAngle(this.body, angle);
        }
      }
