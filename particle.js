let mic;

function setup() {
  createCanvas(1700, 1700);
  // create and start the audio
  mic = new p5.AudioIn();
  mic.start();
}
  
function draw(){
  stroke(random(500),random(240),random(270))
  fill(random(255),random(255),random(255), 30)
  strokeWeight(random (500))
  
  let diameter = mic.getLevel()*2000
  circle(random(width),random(height),diameter)
}

