class Box {
    constructor(x,y,radius){
       var options = {
           isStatic:true,
           'density':1.2,
           'friction': 0.5,
           'restitution':0.3,
       };
       this.body= Bodies.circle(this.x,this.y,this.radius/2,options);
       this. x = x;
       this. y=y;
       this. r=radius;
       World. add(world, this. body);
   }
   
   display () {
   var paperposition = this . body. position;
   push();
   translate(paperPosition . x, paperPosition .y) ;
   ellipseMode(CENTER) ;
   strokeWeight(3 ) ;
   fill(80,253,10);
   ellipse(0, 0,this. r);
   pop ( ) ;
       }
    }     
   
   
   
   
   
   
   
   
   
   
   
   