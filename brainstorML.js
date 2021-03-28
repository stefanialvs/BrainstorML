//==================================================
//Declare Variables
//==================================================

//images
let postImage;
let postImageLength;
let postIcon;
let postMarker;
let postButtonsJSON = {'grayPost':{'postX': 0, 'postY': 0,
                        'path':'/images/posts/grayPost.png'},
                       'yellowPost':{'postX': 0, 'postY': 1,
                        'path':'/images/posts/yellowPost.png'},
                       'canaryPost':{'postX': 0, 'postY': 2,
                        'path':'/images/posts/canaryPost.png'},
                       'orangePost':{'postX': 0, 'postY': 3,
                        'path':'/images/posts/orangePost.png'},
                       'greenPost':{'postX': 0, 'postY': 4,
                        'path':'/images/posts/greenPost.png'},
                       'frogPost':{'postX': 0, 'postY': 5,
                        'path':'/images/posts/frogPost.png'},
                       'grassPost':{'postX': 0, 'postY': 6,
                        'path':'/images/posts/grassPost.png'},
                       'aquaPost':{'postX': 0, 'postY': 7,
                        'path':'/images/posts/aquaPost.png'},
                       'bluePost':{'postX': 1, 'postY': 0,
                        'path':'/images/posts/bluePost.png'},
                       'skyPost':{'postX': 1, 'postY': 1,
                        'path':'/images/posts/skyPost.png'},
                       'navyPost':{'postX': 1, 'postY': 2,
                        'path':'/images/posts/navyPost.png'},
                       'fiucsaPost':{'postX': 1, 'postY': 3,
                        'path':'/images/posts/fiucsaPost.png'},
                       'rosePost':{'postX': 1, 'postY': 4,
                        'path':'/images/posts/rosePost.png'},
                       'pinkPost':{'postX': 1, 'postY': 5,
                        'path':'/images/posts/pinkPost.png'},
                       'purplePost':{'postX': 1, 'postY': 6,
                        'path':'/images/posts/purplePost.png'},
                       'charcoalPost':{'postX': 1, 'postY': 7,
                        'path':'/images/posts/charcoalPost.png'}};

//buttons
let tempButton;
let postButton;

//fonts
let fontRegular;
let fontSemiBold;

//ideas
let posts = [];
let ideasTable;

//==================================================
//Preload and Setup
//==================================================

function preload(){
  //images
  postImage = loadImage('/images/post.png');
  postIcon = loadImage('images/post_icon.png');
  postMarker = loadImage('images/post_container.png');
  postImageLength = 130;
    
  //fonts
  fontRegular = loadFont('/font/Poppins-Regular.ttf');
  fontSemiBold = loadFont('/font/Poppins-SemiBold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  fill(255,255,255);
  input.position(50, 50);
  setupTable();
  setupTempButton();
  //setupPostButton();
  setupPostButtons();
  
}

function setupTable(){
  ideasTable = new p5.Table();
  ideasTable.addColumn('id');
  ideasTable.addColumn('x');
  ideasTable.addColumn('y');
  ideasTable.addColumn('idea');
  console.log('setup table');
}

function setupTempButton() {
  tempButton = createButton('Post it');
  tempButton.position(210, 50);
  tempButton.mousePressed(newPost);
  console.log('setup temp button')
}

function setupPostButton() {
  //postButton = createButton('Post Image')
  postButton = createImg('/images/post_icon.png', 'post');
  postButton.position(40, 80);
  postButton.mousePressed(newPost);
  console.log('setup post button')
}


//post color buttons
function setupPostButtons() {
  var postColors = Object.keys(postButtonsJSON);
  for (let i = 0; i < postColors.length; i++){
    let postColor = postColors[i];
    let postPath = postButtonsJSON[postColor].path;
    let postX = postButtonsJSON[postColor].postX * 60 + 20;
    let postY = postButtonsJSON[postColor].postY * 60 + 200;
    postButtonsJSON[postColor].button = createImg(postPath, postColor);
    postButtonsJSON[postColor].button.position(postX, postY);
  }
}



//==================================================
//Post class
//==================================================

class Post {
  constructor(idea) {
    this.x = random(200,800);
    this.y = random(100, 700);
    this.idea = idea;
    this.ideaLength = textWidth(this.idea);
    this.isClicked = false;
    
    // Dragging variables
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;
    this.rollover = false;
  }
  
  //---------------- Communication Utility ----------------//
  
  
  idea2Table() {
    let newRow = ideasTable.addRow();
    newRow.setNum('id', ideasTable.getRowCount() - 1);
    newRow.setNum('x', this.x);
    newRow.setNum('y', this.y);
    newRow.setNum('idea', this.idea);
  }
  
  changeIdea() {
    //TO DO: change idea  
  }
  
  //---------------- Display Utility ----------------//
  
  clicked(px, py) {
	let distX = abs(px - this.x);
	let distY = abs(py - this.y);
	if ((distX < postImageLength/2) && 
        (distY < postImageLength/2)) {
		// this.image = clickedImage
        this.isClicked = true;
		console.log("CLICKED mouse");
      
        // Dragging utility
        this.dragging = true;
        this.offsetX = this.x - px;
        this.offsetY = this.y - py;
    }
    else {
      this.isClicked = false;
    }
  }
  
  notPressed(px, py) {
      print("mouse was released");
      this.dragging = false;
  }
    
  display(px, py) {
    
    // Dragging utility
    if (this.dragging) {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
    }
    
    //matching image and post center
    image(postImage,this.x-postImageLength/2, 
          this.y-postImageLength/2,
          postImageLength,
          postImageLength);
    if (this.isClicked == true) {
      image(postMarker,this.x-((postImageLength/2)+10), 
          this.y-((postImageLength/2)+15),
          postImageLength+20,
          postImageLength+20)
    }
    fill(0);
    textFont(fontRegular);
    textSize(15);
    text(this.idea, this.x-this.ideaLength/2, this.y-5, 10);
  }
}

//==================================================
//Interactions
//==================================================

function newPost() {
  fill(255,255,255)
  posts.push(new Post('hola'))
} 

function ideas2Table(ideas){
  //Receives ideas list and saves ideas table in csv
  //saveTable()
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].idea)
  } 
}

//==================================================
//Mouse Pressed
//==================================================

function mousePressed() {
	// Click post function
	for (let i = 0; i < posts.length; i++) {
		posts[i].clicked(mouseX, mouseY)
	}
}

function mouseReleased() {
  for (let i = 0; i < posts.length; i++) {
    posts[i].notPressed();
  }  
}

//==================================================
//Draw
//==================================================

function draw() {
  background(255)
  textFont(fontRegular);
  fill(235, 192, 52);
  textSize(30)
  text("Enter your idea", 50, 35);
  for (let i = 0; i < posts.length; i++) {
    posts[i].display(mouseX, mouseY);
  }
}