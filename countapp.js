/*var app = {};

app.countdown = function(settings){
  var interval,
    counter = 0,
  
    //start and end points
    startAt = 0,
    endAt = 0;
  
  if(settings === undefined){
    console.log('Please provide settings.');
  } else {
    if(settings.startAt === undefined || settings.endAt === undefined) {
      console.log('start and end number are required');
    } else {
      startAt = parseInt(settings.startAt, 10);
      endAt = parseInt(settings.endAt,10);
      
      if(!isNaN(startAt) && !isNaN(endAt)){
        counter = startAt;
        
        interval = setInterval(function() {
          if(counter < endAt) {
            
            counter = 0;
            startAt = 0;
            endAt = 0;
            
            console.log('Finished');
            clearInterval(interval);
          } else {
            console.log(counter);
          }
          
          
          counter = counter -1;
          
        },1000);
      }
    }
  }
};*/

const names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go home!"];

//let strokes = 2;
//console.log(names);

function golfScore(par,strokes) {
  //Only change code below this line
  if (strokes === par-3) {
    return names[strokes-1];
  } else if (strokes <= par-2){
    return names[strokes-1];
  } else if (strokes <= par-1){
    return names[strokes-1];
  } else if (strokes === par){
    return names[strokes-1];
  } else if (strokes <= par+1) {
    return names[strokes-1];
  } else if (strokes <= par+2) {
    return names[strokes-1];
  } else if (strokes >= par+3) {
    return names[strokes-1];
  }
  else if (strokes > 6 && par > 5) {
    return "Go home";
  }
  else {
    return "Change Me";
  }
}

console.log(golfScore(5,9));

/* golfScore(4,1) = "Hole-in-one"❌
golfScore(4,2) = "Eagle"❌
golfScore(5,2) = "Eagle"❌
golfScore(4,3) = "Birdie"❌
golfScore(4,4) = "Par"✔️
golfScore(1,1) = "Hole-in-one"❌
golfScore(5,5) = "Par"
golfScore(4,5) = "Bogey"
golfScore(4,6) = "Double Bogey"
golfScore(4,7) = "Go Home"
golfScore(5,9) = "Go Home"
*/