function setup() {
  createCanvas(600, 600);
  background(200,54,150);//
}

function draw() {

  if(mouseIsPressed){
    fill(random([0],[256]),random([0],[256]), random([0],[256]));
  }else{
    fill(72,72)
  }
  arc(mouseX, mouseY, 80, 80, PI, 3 * PI);
  
  describe(
  'shattered outline of ellipse with a quarter of a white circle bottom-right'
);
  
  
}
