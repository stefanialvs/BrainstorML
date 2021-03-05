let post;
let button;
let ideas = [];
let fontina;

function preload(){
  post = loadImage('assets/images/sticky.png');
  fontina = loadFont('assets/font/Poppins-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  fill(255,255,255);
  input.position((windowWidth/2)-120, 100);
  button = createButton('Post it');
  button.position((windowWidth/2)+40, 100);
  button.mousePressed(newPost);
}

function newPost() {
  fill(255,255,255)
  ideas.push(new Post(idea=input.value()))
} 


class Post {
  constructor(idea) {
    this.x = random(50,1800);
    this.y = random(30, 600);
    this.idea = idea;
  }
  
  display() {
    // fill(255, 204, 0);
    // rect(this.x-5, this.y-60, 100, 100, 3);
    // noStroke();
    image(post,this.x-30, this.y-50,130,130)
    fill(0);
    textFont(fontina);
    textSize(15);
    text(this.idea, this.x, this.y, 10);
  }
}

function draw() {
  background(245,245,245);
  textFont(fontina);
  for (let i = 0; i < ideas.length; i++) {
    ideas[i].display();
  }
}