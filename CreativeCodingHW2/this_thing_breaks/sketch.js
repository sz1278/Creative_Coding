var frankenstein; 
var thefont; 
var documentfrequency = {}; 
var thechapter;
var currentchapter = 0; 
var termfrequency = {}; 

function preload() {
  frankenstein = loadStrings('./data/frankenstein_cooked.txt');
  thefont = loadFont('./data/font.otf');
}

function setup() {
  createCanvas(800,600);
  console.log(frankenstein);
  
  doDF(); 
  doTF(frankenstein[currentchapter]); 
  
 var foo = new p5.Speech(); 
  foo.speak(); 
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  foo.resume = foo.speak('i am from frankenstein. i am a creature of frankenstein. i am a machine. i am a monster. i am the result of uncontrolled technology. tragic.');
  
 
}


function draw() {
  background(255);
  fill(0);
  noStroke();
  
  var thresh = mouseX/width;
  
  var ind = floor(random(frankenstein.length));

  

  var margin = 20;
  var thex = margin; 
  var they = 40;
  
  text(frankenstein[ind], 20, 20, 800, 800);
  
  for(i in termfrequency)
  { 
    var tfidf = termfrequency[i].frequency/documentfrequency[i];
    if(tfidf>=thresh)
    {
      var ts = map(tfidf, 0., 1., 60, 70);
      fill(tfidf*255, 100, 0);
      textSize(ts);
      text(i, termfrequency[i].x, termfrequency[i].y);
      termfrequency[i].x+=random(-1,1);
      termfrequency[i].y+=random(-50,50);
      
    }
  }
}


function doDF()
{
  for(var i = 0;i<frankenstein.length;i++)
  {
    thechapter=frankenstein[i].split(' '); 
    for(var j = 0;j<thechapter.length;j++)
    {
      if(documentfrequency.hasOwnProperty(thechapter[j]))
      {
   
        documentfrequency[thechapter[j]]++;
      }
      else
      {
      
        documentfrequency[thechapter[j]]=1;
      }
    }
  }
  
  console.log(documentfrequency);
  
}




function doTF(tf)
{
  termfrequency = {};
  var chapter = tf.split(' ');
  for(var i = 0;i<tf.length;i++)
  {
    if(termfrequency.hasOwnProperty(chapter[i]))
    {
  
      termfrequency[chapter[i]].frequency++;
    }
    else
    {
   
      termfrequency[chapter[i]]={};
      termfrequency[chapter[i]].frequency = 1;
      termfrequency[chapter[i]].x = random(width);
      termfrequency[chapter[i]].y = random(height);
    }
  }

  console.log(termfrequency);
  
}

function keyReleased()
{
  currentchapter = (currentchapter+1)%frankenstein.length;
  doTF(frankenstein[currentchapter]);
}