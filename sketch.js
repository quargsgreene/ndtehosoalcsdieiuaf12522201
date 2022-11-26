let capture;
let microphone;



function setup() {
  
  let canvas = createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(8);
  capture=createCapture(VIDEO);
  capture.hide();
  
  canvas.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
}


function draw() {
let micLevel = mic.getLevel();

push();
if(mouseIsPressed){
  stroke(0);
  strokeWeight(10);
  point(pmouseX,pmouseY);
}
pop();

push();
noFill();
strokeWeight(3);
stroke(0);
rect(width/2,height/2,300,300);
rect(10,height/4,600,200);
rect(800,20,500,500);

pop();


push();
fill(200);
for(let i = 0;i<10;i++){
  text('The organized wave show',100,405+15*i);
}

pop();

push();

for(let i = 0; i<width;i+=3){
  strokeWeight(1);
  stroke(i/10,0,i/10,1);
  line(0,i,width,i);
}

pop();
  
push();
for(let i=0;i<100;i++){
  strokeWeight(1);
  stroke(0);
  fill(0,100,0);
  rect(0,0,50/i,50/i);
}

for(let i=0;i<100;i++){
  strokeWeight(1);
  stroke(0);
  fill(0,100,0);
  rect(200,400,300/i,50/i);
}

for(let i=0;i<100;i++){
  strokeWeight(1);
  stroke(0);
  fill(0,100,0);
  rect(600,25,100/i,300/i);
}
pop();

  
rect(mouseX,mouseY,random(10,20),random(10,20));



push();
strokeWeight(random(100));
stroke(0,100,0,5);
rect(width/2,height/2,300,300);
rect(10,height/4,600,200);
rect(800,20,500,500);
pop();

for(let i=0;i<100;i+=10){
    stroke(0,155-100*micLevel,155-100*micLevel,30);
    strokeWeight(0.5);
    noFill();
    rotate(micLevel*PI/10);
    ellipse(50+i*10+100*micLevel,micLevel,30,1000);
}

for(let i=0;i<100;i+=10){
    stroke(0,random(100)-100*micLevel,0,30);
    strokeWeight(random(2));
    noFill();
    rotate(-micLevel*PI/10);
    ellipse(50+i*10+100*micLevel,micLevel,30,400);
}

push();
stroke(25,0,50);
fill(random(150),70);
ellipse(random(width/2),random(height/4),random(20),random(20));   
pop();

image(capture,width/2,height/2,300,300);


image(capture,10,height/4,600,200);




image(capture,800,20,500,500);






 }
 