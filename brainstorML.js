//==================================================================
// DECLARE VARIABLES
//==================================================================

//images
let postImage;
let postImageLength;
let postIcon;
let postMarker;
let postButtonsJSON = {'gray':{'postX': 0, 'postY': 0,
                        'path':'/images/posts/grayPost.png'},
                       'yellow':{'postX': 0, 'postY': 1,
                        'path':'/images/posts/yellowPost.png'},
                       'canary':{'postX': 0, 'postY': 2,
                        'path':'/images/posts/canaryPost.png'},
                       'orange':{'postX': 0, 'postY': 3,
                        'path':'/images/posts/orangePost.png'},
                       'green':{'postX': 0, 'postY': 4,
                        'path':'/images/posts/greenPost.png'},
                       'frog':{'postX': 0, 'postY': 5,
                        'path':'/images/posts/frogPost.png'},
                       'grass':{'postX': 0, 'postY': 6,
                        'path':'/images/posts/grassPost.png'},
                       'aqua':{'postX': 0, 'postY': 7,
                        'path':'/images/posts/aquaPost.png'},
                       'blue':{'postX': 1, 'postY': 0,
                        'path':'/images/posts/bluePost.png'},
                       'sky':{'postX': 1, 'postY': 1,
                        'path':'/images/posts/skyPost.png'},
                       'navy':{'postX': 1, 'postY': 2,
                        'path':'/images/posts/navyPost.png'},
                       'fiucsa':{'postX': 1, 'postY': 3,
                        'path':'/images/posts/fiucsaPost.png'},
                       'rose':{'postX': 1, 'postY': 4,
                        'path':'/images/posts/rosePost.png'},
                       'pink':{'postX': 1, 'postY': 5,
                        'path':'/images/posts/pinkPost.png'},
                       'purple':{'postX': 1, 'postY': 6,
                        'path':'/images/posts/purplePost.png'},
                       'charcoal':{'postX': 1, 'postY': 7,
                        'path':'/images/posts/charcoalPost.png'}};

//fonts
let fontRegular;
let fontSemiBold;

//ideas
let posts = [];
let ideasTable;

//==================================================================
// SETUP
//==================================================================

function preload(){
  //images
  postImage = loadImage('/images/post.png');
  postIcon = loadImage('images/post_icon.png');
  postMarker = loadImage('images/post_container.png');
  postImageLength = 130;
  postImagesJSON = preloadPostImages();
  
  //fonts
  fontRegular = loadFont('/font/Poppins-Regular.ttf');
  fontSemiBold = loadFont('/font/Poppins-SemiBold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupInput()
  setupPostButtons();
  setupTable();
}

function setupInput(){
  input = createInput();
  fill(255,255,255);
  input.position(50, 50);  
}

function setupTable(){
  ideasTable = new p5.Table();
  ideasTable.addColumn('id');
  ideasTable.addColumn('x');
  ideasTable.addColumn('y');
  ideasTable.addColumn('idea');
  console.log('setup table');
}

function setupPostButtons() {
  // loop through postButtonsJSON and parse it to create
  // coloredPost buttons
  var postColors = Object.keys(postButtonsJSON);
  for (let i = 0; i < postColors.length; i++){
    let postColor = postColors[i];
    let postPath = postButtonsJSON[postColor].path;
    let postX = postButtonsJSON[postColor].postX * 60 + 20;
    let postY = postButtonsJSON[postColor].postY * 60 + 200;
    postButtonsJSON[postColor].button = createImg(postPath, postColor);
    postButtonsJSON[postColor].button.position(postX, postY);
    
    // Nasty hardcode
    if (postColor =='gray') {
      postButtonsJSON[postColor].button.mousePressed(newGrayPost);}
    if (postColor =='yellow') {
      postButtonsJSON[postColor].button.mousePressed(newYellowPost);}
    if (postColor =='canary') {
      postButtonsJSON[postColor].button.mousePressed(newCanaryPost);}
    if (postColor =='orange') {
      postButtonsJSON[postColor].button.mousePressed(newOrangePost);}
    if (postColor =='green') {
      postButtonsJSON[postColor].button.mousePressed(newGreenPost);}    
    if (postColor =='frog') {
      postButtonsJSON[postColor].button.mousePressed(newFrogPost);}
    if (postColor =='grass') {
      postButtonsJSON[postColor].button.mousePressed(newGrassPost);}
    if (postColor =='aqua') {
      postButtonsJSON[postColor].button.mousePressed(newAquaPost);}
    if (postColor =='blue') {
      postButtonsJSON[postColor].button.mousePressed(newBluePost);}
    if (postColor =='sky') {
      postButtonsJSON[postColor].button.mousePressed(newSkyPost);}
    if (postColor =='navy') {
      postButtonsJSON[postColor].button.mousePressed(newNavyPost);}
    if (postColor =='fiucsa') {
      postButtonsJSON[postColor].button.mousePressed(newFiucsaPost);}
    if (postColor =='rose') {
      postButtonsJSON[postColor].button.mousePressed(newRosePost);}
    if (postColor =='pink') {
      postButtonsJSON[postColor].button.mousePressed(newPinkPost);}
    if (postColor =='purple') {
      postButtonsJSON[postColor].button.mousePressed(newPurplePost);}
    if (postColor =='charcoal') {
      postButtonsJSON[postColor].button.mousePressed(newCharcoalPost);}
    
    //postButtonsJSON[postColor].button.mousePressed(newPost);
  }
  console.log('setup colored post buttons')
}

function preloadPostImages(){
  // preload coloredPost images for later use
  let grayPostImage      = loadImage('/images/posts/grayPost.png');
  let yellowPostImage    = loadImage('/images/posts/yellowPost.png');
  let canaryPostImage    = loadImage('/images/posts/canaryPost.png');
  let orangePostImage    = loadImage('/images/posts/orangePost.png');
  let greenPostImage     = loadImage('/images/posts/greenPost.png');
  let frogPostImage      = loadImage('/images/posts/frogPost.png');
  let grassPostImage     = loadImage('/images/posts/grassPost.png');
  let aquaPostImage      = loadImage('/images/posts/aquaPost.png');
  let bluePostImage      = loadImage('/images/posts/bluePost.png');
  let skyPostImage       = loadImage('/images/posts/skyPost.png');
  let navyPostImage      = loadImage('/images/posts/navyPost.png');
  let fiucsaPostImage    = loadImage('/images/posts/fiucsaPost.png');
  let rosePostImage      = loadImage('/images/posts/rosePost.png');
  let pinkPostImage      = loadImage('/images/posts/pinkPost.png');
  let purplePostImage    = loadImage('/images/posts/purplePost.png');
  let charcoalPostImage  = loadImage('/images/posts/charcoalPost.png');
  
  // Declare color Images for easy use
  postImagesJSON = {'gray': grayPostImage,
                    'yellow': yellowPostImage,
                    'canary': canaryPostImage,
                    'orange': orangePostImage,
                    'green': greenPostImage,
                    'frog': frogPostImage,
                    'grass': grassPostImage,
                    'aqua': aquaPostImage,
                    'blue': bluePostImage,
                    'sky': skyPostImage,
                    'navy': navyPostImage,
                    'fiucsa': fiucsaPostImage,
                    'rose': rosePostImage,
                    'pink': pinkPostImage,
                    'purple': purplePostImage,
                    'charcoal': charcoalPostImage};

  console.log('preload colored post images');
  return postImagesJSON;
}

//==================================================================
// POST CLASS
//==================================================================

class Post {
  constructor(idea, postColor) {
    this.x = random(200,800);
    this.y = random(100, 700);
    this.idea = idea;
    this.ideaLength = textWidth(this.idea);
    this.isClicked = false;
    
    // Colored post image
    this.postImage = postImagesJSON[postColor];
    console.log('Constructur postColor', postColor);
    
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
    image(this.postImage,this.x-postImageLength/2, 
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

//==================================================================
// INTERACTION FUNCTIONS
//==================================================================

// Colored post constructors
function newYellowPost(){posts.push(new Post('hola', 'yellow'))}
function newGrayPost(){posts.push(new Post('hola', 'gray'))}
function newCanaryPost(){posts.push(new Post('hola', 'canary'))}
function newOrangePost(){posts.push(new Post('hola', 'orange'))}
function newGreenPost(){posts.push(new Post('hola', 'green'))}
function newFrogPost(){posts.push(new Post('hola', 'frog'))}
function newGrassPost(){posts.push(new Post('hola', 'grass'))}
function newAquaPost(){posts.push(new Post('hola', 'aqua'))}
function newBluePost(){posts.push(new Post('hola', 'blue'))}
function newSkyPost(){posts.push(new Post('hola', 'sky'))}
function newNavyPost(){posts.push(new Post('hola', 'navy'))}
function newFiucsaPost(){posts.push(new Post('hola', 'fiucsa'))}
function newRosePost(){posts.push(new Post('hola', 'rose'))}
function newPinkPost(){posts.push(new Post('hola', 'pink'))}
function newPurplePost(){posts.push(new Post('hola', 'purple'))}
function newCharcoalPost(){posts.push(new Post('hola', 'charcoal'))}

function ideas2Table(ideas){
  //Receives ideas list and saves ideas table in csv
  //saveTable()
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].idea)
  } 
}

//==================================================================
// CLICKS
//==================================================================

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

//==================================================================
// DRAW
//==================================================================

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

