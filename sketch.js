// I chose route 1 of manipulating text (responsive text)
// i don't know why this won't run in open processing but in runs in Visual Studio Code

let f1;
let eight = "8";
let answer = ['yes', 'it is certain', 'without a doubt', 'absolutely', 'outlook good', 'ask again later', 'reply hazy, try again', 'no idea', 'cannot predict now', 'no.', 'outlook not so good', 'doubtful', 'probably not','my sources say no'];

let c1, c2;

let input;
let button;
let reset;


function preload(){
  f1 = loadFont('ds_digital/DS-DIGI.TTF')
}

function setup() {
  createCanvas(800, 800);
  background(0,29,102);
  push ();
  translate (width/2, height/2);
  fill (0);
  ellipse (0,0,400);
  fill(255)
  ellipse (0,0, 250);
  fill(0);
  textFont(f1, 250);
  textAlign(CENTER);
  text (eight, 0, 75);
  pop (); //original 8 ball


//https://p5js.org/reference/#/p5.Element/style --> for ".style"
//https://editor.p5js.org/tom.smith/sketches/fASj3inoc --> for creation of textbox and buttons
  input = createInput("Type 'Yes or No' Question Here"); // creates text box
  input.position (50, 50); // position where textbox starts (left side)
  input.size (700); // how big text box is
  input.style ('font-size', '45px'); // size of letters in textbox
  input.style('text-align', 'center'); // centers text in textbox
  
  button = createButton("Ask 8Ball"); // creates button that says "Ask 8Ball"
  button.position (330,130); // position where button is
  button.style ('font-size', '30px'); // size of letters in button
  button.mousePressed(askQuestion); // calls the function which gives the 8ball answers when button is clicked with mouse

  reset = createButton("Reset 8Ball"); // creates button that says "Reset 8Ball"
  reset.position (315,630); // position where button is
  reset.style ('font-size', '30px'); // size of letters in button
  reset.mousePressed(ballReset); // resets back to original 8ball when button is pressed
}

function askQuestion(){
  push();
  translate (width/2, height/2);
  fill(50);
  ellipse (0,0, 250);
  fill(0);
  pop (); //dark inner circle of 8ball

  fill(0,0,255);
  triangle (295,335,505,335,400,525); // blue triangle in center of 8ball

  push();
  translate (width/2, height/2);
  fill(255);
  textFont(f1, 15);
  textAlign(CENTER);
  text(answer[floor(random(14))], 0, 0); //text is random 8ball answer from answer array
  pop();
  }

  function ballReset(){
    push ();
    translate (width/2, height/2);
    fill (0);
    ellipse (0,0,400);
    fill(255);
    ellipse (0,0, 250);
    fill(0);
    textFont(f1, 250);
    textAlign(CENTER);
    text (eight, 0, 75);
    pop ();
  } // original 8ball
