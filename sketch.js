var page1;
var page2;
var page3;
var page4;
var page5;
var page6;
var page7;
var page8;
var page9;
var page10;
var page11;
var page12;
var mode = 0;
var xloc;
var yloc;

function preload(){
  page1 = loadImage('assets/page1.png');
  page2 = loadImage('assets/page2.png');
  page3 = loadImage('assets/page3.png');
  page4 = loadImage('assets/page4.png');
  page5 = loadImage('assets/page5.png');
  page6 = loadImage('assets/page6.png');
  page7 = loadImage('assets/page7.png');
  page8 = loadImage('assets/page8.png');
  page9 = loadImage('assets/page9.png');
  page10 = loadImage('assets/page10.png');
  page11 = loadImage('assets/page11.png');
  page12 = loadImage('assets/page12.png');

}

function setup(){
  createCanvas(300,640);


}

function draw() {
  background(220);
if (mode == 0){
  page1.resize (300,0);
  image(page1, 0, 0);
} else if (mode == 1) {
  page2.resize(300,0);
  image(page2, 0, 0);
} else if (mode == 2) {
  page3.resize(300,0);
  image(page3, 0, 0);
} else if (mode == 3) {
  page4.resize (300,0);
  image(page4, 0, 0);
}
else if (mode == 4) {
  page5.resize (300,0);
  image(page5, 0, 0);
}
else if (mode == 5) {
  page6.resize (300,0);
  image(page6, 0, 0);
}
else if (mode == 6) {
  page7.resize (300,0);
  image(page7, 0, 0);
}
else if (mode == 7) {
  page8.resize (300,0);
  image(page8, 0, 0);
}
else if (mode == 8) {
  page9.resize (300,0);
  image(page9, 0, 0);
}
else if (mode == 9) {
  page10.resize (300,0);
  image(page10, 0, 0);
}

else if (mode == 10) {
  page11.resize (300,0);
  image(page11, 0, 0);
}
else if (mode == 11) {
  page12.resize (300,0);
  image(page12, 0, 0);
}
}

function screen1() {
  page1(50, 50, 300, 300);
}

function screen2() {
  page2(50, 50, 300, 300);
}

function screen3() {
  page3(50, 50, 300, 300);
}

function screen4() {
  page4(50, 50, 300, 300);
}

function screen5() {
  page5(50, 50, 300, 300);
}

function screen6() {
  page6(50, 50, 300, 300);
}

function screen7() {
  page7(50, 50, 300, 300);
}

function screen8() {
  page8(50, 50, 300, 300);
}

function screen9() {
  page9(50, 50, 300, 300);
}

function screen10() {
  page10(50, 50, 300, 300);
}

function screen11() {
  page11(50, 50, 300, 300);
}

function screen12() {
  page12(50, 50, 300, 300);
}

function mousePressed() {
  if (mode == 0) {
    mode = 1;
  } else if (mode == 1) {
    mode = 2;
  } else if (mode == 2) {
    mode = 3;
  } else if (mode == 3) {
    mode = 4;
  } else if (mode == 4) {
    mode = 5;
  } else if (mode == 5) {
    mode = 6;
  } else if (mode == 6) {
    mode = 7;
  } else if (mode == 7) {
    mode = 8;
  } else if (mode == 8) {
    mode = 9;
  } else if (mode == 9) {
    mode = 10;
  } else if (mode == 10) {
    mode = 11;
  } else if (mode == 11) {
    mode = 12;
  } else if (mode == 12) {
    mode = 0;
  }
}
