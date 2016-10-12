

var frankensteinlines; 

function preload() {
 
  alicelines = loadStrings('./data/Frankenstein.txt');
  
}

function setup() {


  console.log("there are " + frankensteinlines.length + " lines!"); 

  var bigstring = ""; 
    
  for (var i = 0; i<frankensteinlines.length; i++)
        {
                   
          bigstring+=frankensteinlines[i]+" ";
  }

 
  bigstring = bigstring.replace(/[^a-zA-Z0-9' ]/g, " ");

 
  bigstring = bigstring.replace(/ '/g, " "); 
  bigstring = bigstring.replace(/' /g, " "); 


  bigstring = bigstring.toLowerCase();

 
  bigstring = bigstring.replace(/ +/g, " ");
  bigstring = bigstring.trim();

 
  console.log(bigstring);

 
  var chapters = bigstring.split(/chapter [a-z]+/);

  console.log("there are " + chapters.length + " chapters!");

  for(var i = 0;i<chapters.length;i++)
  {
    chapters[i] = chapters[i].trim();
  }
  

  saveStrings(chapters, 'frankensteinlines_cooked.txt');

}


function draw() {
}
