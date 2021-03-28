//==================================================================
// DECLARE VARIABLES
//==================================================================

//images
let postImage;
let postImageLength;
let postIcon;
let postMarker;
let postButtonsJSON = {'gray':{'postX': 0, 'postY': 0,
                        'path':'assets/images/posts/grayPost.png'},
                       'yellow':{'postX': 0, 'postY': 1,
                        'path':'assets/images/posts/yellowPost.png'},
                       'canary':{'postX': 0, 'postY': 2,
                        'path':'assets/images/posts/canaryPost.png'},
                       'orange':{'postX': 0, 'postY': 3,
                        'path':'assets/images/posts/orangePost.png'},
                       'green':{'postX': 0, 'postY': 4,
                        'path':'assets/images/posts/greenPost.png'},
                       'frog':{'postX': 0, 'postY': 5,
                        'path':'assets/images/posts/frogPost.png'},
                       'grass':{'postX': 0, 'postY': 6,
                        'path':'assets/images/posts/grassPost.png'},
                       'aqua':{'postX': 0, 'postY': 7,
                        'path':'assets/images/posts/aquaPost.png'},
                       'blue':{'postX': 1, 'postY': 0,
                        'path':'assets/images/posts/bluePost.png'},
                       'sky':{'postX': 1, 'postY': 1,
                        'path':'assets/images/posts/skyPost.png'},
                       'navy':{'postX': 1, 'postY': 2,
                        'path':'assets/images/posts/navyPost.png'},
                       'fiucsa':{'postX': 1, 'postY': 3,
                        'path':'assets/images/posts/fiucsaPost.png'},
                       'rose':{'postX': 1, 'postY': 4,
                        'path':'assets/images/posts/rosePost.png'},
                       'pink':{'postX': 1, 'postY': 5,
                        'path':'assets/images/posts/pinkPost.png'},
                       'purple':{'postX': 1, 'postY': 6,
                        'path':'assets/images/posts/purplePost.png'},
                       'charcoal':{'postX': 1, 'postY': 7,
                        'path':'assets/images/posts/charcoalPost.png'}};

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
  postImage = loadImage('assets/images/post.png');
  postIcon = loadImage('assets/images/post_icon.png');
  postMarker = loadImage('assets/images/post_container.png');
  postImageLength = 110;
  postImagesJSON = preloadPostImages();
  
  //fonts
  fontRegular = loadFont('assets/font/Poppins-Regular.ttf');
  fontSemiBold = loadFont('assets/font/Poppins-SemiBold.ttf');
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
  input.position(50, 100);  
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
    let postX = postButtonsJSON[postColor].postX * 60 + 10;
    let postY = postButtonsJSON[postColor].postY * 60 + 250;
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
    console.log('postX', postX, 'postY', postY);
  }
  console.log('setup colored post buttons');
}

function preloadPostImages(){
  // preload coloredPost images for later use
  let grayPostImage      = loadImage('assets/images/posts/grayPost.png');
  let yellowPostImage    = loadImage('assets/images/posts/yellowPost.png');
  let canaryPostImage    = loadImage('assets/images/posts/canaryPost.png');
  let orangePostImage    = loadImage('assets/images/posts/orangePost.png');
  let greenPostImage     = loadImage('assets/images/posts/greenPost.png');
  let frogPostImage      = loadImage('assets/images/posts/frogPost.png');
  let grassPostImage     = loadImage('assets/images/posts/grassPost.png');
  let aquaPostImage      = loadImage('assets/images/posts/aquaPost.png');
  let bluePostImage      = loadImage('assets/images/posts/bluePost.png');
  let skyPostImage       = loadImage('assets/images/posts/skyPost.png');
  let navyPostImage      = loadImage('assets/images/posts/navyPost.png');
  let fiucsaPostImage    = loadImage('assets/images/posts/fiucsaPost.png');
  let rosePostImage      = loadImage('assets/images/posts/rosePost.png');
  let pinkPostImage      = loadImage('assets/images/posts/pinkPost.png');
  let purplePostImage    = loadImage('assets/images/posts/purplePost.png');
  let charcoalPostImage  = loadImage('assets/images/posts/charcoalPost.png');
  
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
    this.x = random(200,1700);
    this.y = random(100,700);
    this.idea = idea;
    this.ideaLength = textWidth(this.idea);
    this.isClicked = false;
    
    // Colored post image
    this.postImage = postImagesJSON[postColor];
    console.log('Constructor postColor', postColor);
    
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
          this.y-((postImageLength/2)+10),
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
function newYellowPost(){posts.push(new Post('ideas', 'yellow'))}
function newGrayPost(){posts.push(new Post('ideas', 'gray'))}
function newCanaryPost(){posts.push(new Post('ideas', 'canary'))}
function newOrangePost(){posts.push(new Post('ideas', 'orange'))}
function newGreenPost(){posts.push(new Post('ideas', 'green'))}
function newFrogPost(){posts.push(new Post('ideas', 'frog'))}
function newGrassPost(){posts.push(new Post('ideas', 'grass'))}
function newAquaPost(){posts.push(new Post('ideas', 'aqua'))}
function newBluePost(){posts.push(new Post('ideas', 'blue'))}
function newSkyPost(){posts.push(new Post('ideas', 'sky'))}
function newNavyPost(){posts.push(new Post('ideas', 'navy'))}
function newFiucsaPost(){posts.push(new Post('ideas', 'fiucsa'))}
function newRosePost(){posts.push(new Post('ideas', 'rose'))}
function newPinkPost(){posts.push(new Post('ideas', 'pink'))}
function newPurplePost(){posts.push(new Post('ideas', 'purple'))}
function newCharcoalPost(){posts.push(new Post('ideas', 'charcoal'))}

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
  background("#f5f5f5")
  for (let i = 0; i < posts.length; i++) {
    posts[i].display(mouseX, mouseY);
  }
}

