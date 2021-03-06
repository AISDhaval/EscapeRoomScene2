
var numberOrder = 1;
var numberValue1 = 10;
var numberValue2 = 10;
var numberValue3 = 10;
var numberValue4 = 10;
var accessGranted = 0;
var TimeUp = 0;
var startTime = 0;
var x = 10;
var lock = 0;

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

   //Change password with last 4 digit of userInterface(100,300,125,250,A,B,C,D);
   userInterface(100,300,125,250,5,2,6,9);
   numberDisplay(165,60);



   if (numberValue1 == 10)
   {
     numberOrder = 1;
   }
   else if (numberValue1 < 10 && numberValue2 == 10)
   {
     numberOrder = 2;
   }
   else if (numberValue2 < 10 && numberValue3 == 10)
   {
     numberOrder = 3;
   }
   else if (numberValue3 < 10 && numberValue4 == 10)
   {
     numberOrder = 4;
   }
   else if (numberValue4 < 10)
   {
     numberOrder = 0;
   }

   if (startTime == 1)
   {
     x = x - 0.015;
   }

   if (x > 0 && accessGranted == 0)
   {
     text(""+round(x)+"",25,200);
   }
   else if (accessGranted == 1)
   {
     text("Door\nUnlocked",5,200);
   }
   else
   {
     text("Door\nLocked",5,200);
   }

   if (x <= 0 || accessGranted == 1)
   {
     x = " ";
   }
}

function numberDisplay(q,w)
{
  if (numberValue1 < 10)
  {
    text(""+numberValue1+"",q-4,w);
  }
  if (numberValue2 < 10)
  {
    text(""+numberValue2+"",q+50,w);
  }
  if (numberValue3 < 10)
  {
    text(""+numberValue3+"",q+105,w);
  }
  if (numberValue4 < 10)
  {
    text(""+numberValue4+"",q+160,w);
  }
}

function userInterface(a,b,c,d,pw1,pw2,pw3,pw4)
{
  if (numberValue1 == pw1 && numberValue2 == pw2 && numberValue3 == pw3 && numberValue4 == pw4 && x > 0)
  {
    accessGranted = 1;
  }
  else if (numberOrder < 5)
  {
    if (accessGranted == 0 && numberOrder == 0)
    {
      numberValue1 = 10;
      numberValue2 = 10;
      numberValue3 = 10;
      numberValue4 = 10;
    }

    if (accessGranted == 1)
    {
      fill(0,255,0);
      ellipse(30,30,50,50);
    }
    if (accessGranted == 0)
    {
      fill(255,0,0);
      ellipse(30,30,50,50);
    }

    fill(100,150,255);
    rect(1,100,90,50);
    fill(255,255,255);
    text("reset",25,130);

    fill(100,150,255);
    rect(1,300,90,50);
    fill(255,255,255);
    text("start",25,330);
  }

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
  text("1",c+(c/3.5),c+(c/2.5));

  //2
  fill(230,230,230);
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c,d/3,d/3);
  text("2",c+(2.9*c/3),c+(c/2.5));

  //3
  fill(230,230,230);
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c,d/3,d/3);
  text("3",c+(5*c/3),c+(c/2.5));
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


function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }

  if (numberOrder == 1)
 {
   if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 1;
   }
   //2
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 2;
   }
   //3
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 3;
   }
   //4
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 4;
   }
   //5
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 5;
   }
   //6
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue1 = 6;
   }
   //7
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue1 = 7;
   }
   //8
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue1 = 8;
   }
   //9
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue1 = 9;
   }
 }


 else if (numberOrder == 2)
 {
   if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 1;
   }
   //2
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 2;
   }
   //3
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 3;
   }
   //4
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 4;
   }
   //5
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 5;
   }
   //6
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue2 = 6;
   }
   //7
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue2 = 7;
   }
   //8
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue2 = 8;
   }
   //9
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue2 = 9;
   }
 }


 else if (numberOrder == 3)
 {
   if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 1;
   }
   //2
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 2;
   }
   //3
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 3;
   }
   //4
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 4;
   }
   //5
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 5;
   }
   //6
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue3 = 6;
   }
   //7
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue3 = 7;
   }
   //8
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue3 = 8;
   }
   //9
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue3 = 9;
   }
 }


 else if (numberOrder == 4)
 {
   if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 1;
   }
   //2
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 2;
   }
   //3
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 3;
   }
   //4
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 4;
   }
   //5
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 5;
   }
   //6
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
   {
     lock = 0;
     numberValue4 = 6;
   }
   //7
   else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue4 = 7;
   }
   //8
   else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue4 = 8;
   }
   //9
   else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
   {
     lock = 0;
     numberValue4 = 9;
   }
 }

 else if (numberOrder == 0)
 {
   lock = 0;
 }

 if (mouseX >= 1 && mouseX <= 91 && mouseY >= 100 && mouseY <= 150 && lock == 1)
 {
   lock = 0;
   numberValue1 = 10;
   numberValue2 = 10;
   numberValue3 = 10;
   numberValue4 = 10;
 }
}
