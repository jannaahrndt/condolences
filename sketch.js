// The RiTa lib is included in index.html
// The text files are files in the project
var bg = []; 
let cg;
let lines, markov, txt1, txt2;
let x = 250, y = 100;
let myFont;

function preload() {
  myFont = loadFont('data/Goodbyecrewelworldnf-mLVeP.otf');
  txt1 = loadStrings('data/Mitch.txt');
  txt2 = loadStrings('data/condolences.txt');

    bg[0] = loadImage("data/samplers-01.png");
    bg[1] = loadImage("data/samplers-02.png");
    bg[2] = loadImage("data/samplers-03.png");
  
      bg[3] = loadImage("data/samplers-04.png");

        bg[4] = loadImage("data/samplers-05.png");
  
        bg[5] = loadImage("data/samplers-06.png");
  
          bg[6] = loadImage("data/samplers-07.png");
  
          bg[7] = loadImage("data/samplers-08.png");
  
          bg[8] = loadImage("data/samplers-09.png");
  
            bg[9] = loadImage("data/samplers-10.png");
}

function setup() {
    let c = createCanvas(800, 800);
  cg = createGraphics(600,500);
  
  textFont(myFont, 24);
  textLeading(36);
  textAlign(LEFT);
  //strokeWeight(1);
  //stroke(175);
  lines = ["click to (re)generate"];
  
  // create a markov model w' n=4
  markov = RiTa.markov(3);

  // load text into the model
  markov.addText(txt1.join(' '));
  markov.addText(txt2.join(' '));

  drawText();
  
}

function drawText() {
  background(255);
  var r = round(random(0,bg.length));
  image(bg[r], 0, 0,width,height);
  //image(cg,0,0);
  fill(0,0,100,95);
  textSize(24);
  text(lines.join(' '), x, y, 420, 440);
  
}

function mouseClicked() {
  lines = markov.generate(2);
  textSize(16);
  x = 150;
  y = 300;
  drawText();
  //saveCanvas( 'myCanvas', 'png')
}

  
 




