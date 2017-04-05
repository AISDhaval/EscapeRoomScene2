var numberOfPictures = 8;
var doorTransition = new Array(numberOfPictures);
var startAnimate;
var animationSpeed;
var myFrameCount;

function preload()
{
  //images
  door = loadImage('https://dl.dropboxusercontent.com/s/8ck06heei1runy9/door.png');
  doorlock = loadImage('https://dl.dropboxusercontent.com/s/7ma7vss4opzhzl6/lock.png');
  
  //Canvas 1 change to Canvas 2
  doorTransition[0] = loadImage('https://dl.dropboxusercontent.com/s/gt4frzg07flp5ng/Screen%20Shot%201.png');
  doorTransition[1] = loadImage('https://dl.dropboxusercontent.com/s/fi9rw2ermm6evo2/Screen%20Shot%202.png');
  doorTransition[2] = loadImage('https://dl.dropboxusercontent.com/s/1o96utixr6h2oqj/Screen%20Shot%203.png');
  doorTransition[3] = loadImage('https://dl.dropboxusercontent.com/s/03gsuea75slnrv7/Screen%20Shot%204.png');
  doorTransition[4] = loadImage('https://dl.dropboxusercontent.com/s/012gcddyqmx278j/Screen%20Shot%205.png');
  doorTransition[5] = loadImage('https://dl.dropboxusercontent.com/s/a9ga103hvpqtcu0/Screen%20Shot%206.png');
  doorTransition[6] = loadImage('https://dl.dropboxusercontent.com/s/r1w3rsu990l3z6u/Screen%20Shot%207.png');
  doorTransition[7] = loadImage('https://dl.dropboxusercontent.com/s/jt5xzde6ht1mt69/Screen%20Shot%208.png');
  doorTransition[8] = loadImage('https://dl.dropboxusercontent.com/s/mklzwzmbir7wv35/Screen%20Shot%209.png');
  doorTransition[9] = loadImage('https://dl.dropboxusercontent.com/s/o8mixpqya363219/Screen%20Shot%2010.png');
}

function setup()
{  
  createCanvas(1000,600);
  canvas = 1;
  lock = false;
  
  startAnimate = 0;
  animationSpeed = 5;
  myFrameCount = 0;
}

function draw()
{
  background(155,155,155);
 /*
  if (canvas == 0)
  {
    canvas1();
  }
  else if (canvas == 1)
  {
    canvas2();
  }
  */
  if (startAnimate == 0)
  {
    image(doorTransition[0],0,0,1000,600);
  }

  if (mouseX > 535 && mouseX < 535 + 80 && mouseY > 350 && mouseY < 350 + 88  )
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      if (startAnimate == 0)
      {
        startAnimate =2; 
      }
      else if (startAnimate == 2) 
      {
        startAnimate = 0; 
      }
      lock = true;
    }
  }
  else
  {
    cursor(ARROW);
  }

  if (startAnimate == 1)
  {
    animateSequence();
  }

  if (startAnimate == 2)
  {
    image(doorTransition[9],0,0,1000,600);
  }
}


/*function canvas1()
{
  image(door,400,200,200,400);
  image(doorlock,535,350,80,88);
  noStroke();
  fill(0,0,0);
  rect(380,200,20,400);
  rect(380,180,220,20);
  rect(600,180,20,420);
  
  if(mouseX > 535 && mouseX < 535 + 80 && mouseY > 350 && mouseY < 350 + 88  )
  {
    cursor(HAND);
    
    if ( lock == false && mouseIsPressed == true)
    {
      
      if (canvas == 0)
      {
        canvas = 1; 
      }
      else if (canvas == 1) 
      {
        canvas = 0; 
      }
      lock = true;
    }
  }

  else
  {
    cursor(ARROW);
  }
  
}
*/


/*function canvas2()
{
  background(0,0,0);
  image(doorlock,-25,100,1000,1000);
  itemGrid();
  
  if(mouseX > 535 && mouseX < 535 + 80 && mouseY > 350 && mouseY < 350 + 88  )
  {
    cursor(HAND);

    if ( lock == false && mouseIsPressed == true)
    {

      if (canvas == 0)
      {
        canvas = 1; 
      }
      else if (canvas == 1) 
      {
        canvas = 0; 
      }
      lock = true;
    }

  }
  else
  {
    cursor(ARROW);
  }
  
}
*/

/*
function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(220,20,560,90);

  // first digit box
  fill(125,125,125);
  rect(340,30,70,70);

  // second digit box
  fill(125,125,125);
  rect(420,30,70,70);

  // third digit box
  fill(125,125,125);
  rect(500,30,70,70);
  // fourth digit box
  fill(125,125,125);
  rect(580,30,70,70);

}
*/

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
} 

function animateSequence()
{


  if (myFrameCount % 40 < 5 && lock == false && mouseX > 535 && mouseX < 535 + 80 && mouseY > 350 && mouseY < 350 + 88  )
  {
    image(doorTransition[0],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 5 && myFrameCount % 40 < 10)
  {
    image(doorTransition[1],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 10 && myFrameCount % 40 < 15)
  {
    image(doorTransition[2],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 15 && myFrameCount % 40 < 20)
  {
    image(doorTransition[3],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 20 && myFrameCount % 40 < 25)
  {
    image(doorTransition[4],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 25 && myFrameCount % 40 < 30)
  {
    image(doorTransition[5],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 30 && myFrameCount % 40 < 35)
  {
    image(doorTransition[6],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 35 && myFrameCount % 40 < 40)
  {
    image(doorTransition[7],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 40 && myFrameCount % 40 < 45)
  {
    image(doorTransition[8],0,0,1000,600);
  }
  else if (myFrameCount % 40 >= 45 && myFrameCount % 40 < 50)
  {
    image(doorTransition[9],0,0,1000,600);
    rect(100,100,400,400);
  }


  myFrameCount++;
  if (myFrameCount> 35)
    startAnimate = 2;
  
}






