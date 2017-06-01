//var numberOfPictures = 8;
//var doorTransition = new Array(numberOfPictures);
//var startAnimate;
//var animationSpeed;
//var myFrameCount;
var lock;

function preload()
{
  //images
  door = loadImage('https://dl.dropboxusercontent.com/s/8ck06heei1runy9/door.png');
  doorlock = loadImage('https://dl.dropboxusercontent.com/s/7ma7vss4opzhzl6/lock.png');
  lockenvelope = loadImage('https://dl.dropboxusercontent.com/s/miewuq46ggkref2/Lock.jpg');
  envelope = loadImage('https://dl.dropboxusercontent.com/s/x17zl4easw14z9s/Envelope.jpg');
}


function setup()
{
  createCanvas(800,600);
  canvas = 0;
  lock = false;
}

function draw()
{
  background(155,155,155);

  if (canvas == 0)
  {
    canvas1();
  }
  else if (canvas == 1)
  {
    canvas2();
  }
  else if (canvas == 2)
  {
    canvas3();
  }
  else
  {
    cursor(ARROW);
  }
}

function canvas1()
{
  image(lockenvelope,0,0,800,600);

  if(mouseX > 480 && mouseX < 480 + 160 && mouseY > 30 && mouseY < 30 + 88  )
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
   else if(mouseX > 460 && mouseX < 460 + 160 && mouseY > 140 && mouseY < 140 + 400  )
   {
         cursor(HAND);

         if ( lock == false && mouseIsPressed == true)
         {

               if (canvas == 0)
               {
                 canvas = 2;
               }
               else if (canvas == 2)
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

/*function userInterface(a,b,c,d,pw1,pw2,pw3,pw4)
{
  textSize(20);
  strokeWeight(5);
  stroke(0,0,0);
  fill(200,200,200);
  rect(a,a/10,b,b-100);
  rect(a,a,b,b);
  strokeWeight(3);
  fill(255,255,255);
  rect(c+15,a-75,50,50);
  rect(c+70,a-75,50,50);
  rect(c+125,a-75,50,50);
  rect(c+180,a-75,50,50);
  rect(c,c,d,d);
  fill(230,230,230);

  //1
  fill(230,230,230);
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c,c,d/3,d/3);
  text("1",c+(c/3),c+(c/3));
  fill(230,230,230);
  //2
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c,d/3,d/3);
  text("2",c+(3*c/3),c+(c/3));
  fill(230,230,230);
  //3
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c,d/3,d/3);
  text("3",c+(5*c/3),c+(c/3));
  fill(230,230,230);
  //4
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c,c+(d/3),d/3,d/3);
  text("4",c+(c/3),c+(3*c/3));
  fill(230,230,230);
  //5
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c+(d/3),d/3,d/3);
  text("5",c+(3*c/3),c+(3*c/3));
  fill(230,230,230);
  //6
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c+(d/3),d/3,d/3);
  text("6",c+(5*c/3),c+(3*c/3));
  fill(230,230,230);
  //7
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c,c+((d*2)/3),d/3,d/3);
  text("7",c+(c/3),c+(5*c/3));
  fill(230,230,230);
  //8
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c+((d*2)/3),d/3,d/3);
  text("8",c+(3*c/3),c+(5*c/3));
  fill(230,230,230);
  //9
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c+((d*2)/3),d/3,d/3);
  text("9",c+(5*c/3),c+(5*c/3));
  fill(230,230,230);


  //HAND
  //1
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //2
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //3
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //4
  else if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //5
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //6
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //7
  else if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //8
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //9
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else if (mouseX >= 1 && mouseX <= 91 && mouseY >= 100 && mouseY <= 150 && accessGranted == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else if (mouseX >= 1 && mouseX <= 91 && mouseY >= 300 && mouseY <= 350 && accessGranted == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      startTime = 1;
    }
  }
  else
  {
    cursor(ARROW);
  }
}
*/
function canvas2()
{
  background(255,0,0);
  image(envelope,0,0,800,600);

  if(mouseX > 0 && mouseX < 0 + 800 && mouseY > 0 && mouseY < 0 + 600  )
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


function canvas3()
{
  background(255,0,0);

  userInterface();
}


function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}
