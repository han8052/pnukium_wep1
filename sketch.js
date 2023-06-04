let a,s,d,x,y,w,h;
function setup() {
  createCanvas(400, 400);
 button=createButton('네모')
  button.position(50,350);
  button.size(100,50);
  button.style('font-size','20px');
  button.style('color','brown');
  
  
  button2=createButton('세모')
  button2.position(150,350);
  button2.size(100,50);
  button2.style('font-size','20px');
  button2.style('color','orange'); 
  
  button3=createButton('원')
  button3.position(250,350);
  button3.size(100,50);
  button3.style('font-size','20px');
  button3.style('color','gray'); 
}
// function preload(){
  //img= loadImage('./img/mole.png') ;             
// }
function circleB(){
  background(220);
  for(x=0;x<=width;x=x+1 ){ 
  x=random(0,width);
  y=random(0,height);
    a=random(0,255);
     s=random(0,255);
     d=random(0,255);

     fill(a,s,d);

  ellipse(x,y,20,20);
   }
  }
  



function rectB(){
  background(220);
  for(x=0;x<=width;x=x+1 ){ 
  x=random(0,width);
  y=random(0,height);
    a=random(0,255);
     s=random(0,255);
     d=random(0,255);

     fill(a,s,d);

  rect(x,y,20,20);
}

}

function triB(){
  background(220);
  
  for(x=0;x<=width;x=x+20) {
   for(y=0;y<=height;y=y+20){
  triangle(x,y,t);
     
   }
  }

}



// function draw() {
 
//   background(0,0,0);
  
 
//   noStroke();
//   for(x=0;x<=width;x=x+20) {
//    for(y=0;y<=height;y=y+20){

  
//      a=random(0,255);
//      s=random(0,255);
//      d=random(0,255);
//      g=random(0,42);
//      t=random(100,100);
//      fill(a,s,d);
//      ellipse(x,y,g);
//      rect(2,y,t);
//      triangle(x,y,t);
//       rect(301,y,t);
    
  
 
    


function draw() {
  button.mousePressed(rectB);
  button2.mousePressed(triB);
  button3.mousePressed(circleB);
     
  
   
    }


  
  




