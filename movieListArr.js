const movieList = [{
title: "Batman",
year: 1989,
director: "Tim Burton",
imdbRating: 7.6
}, {
title: "Batman Returns",
year: 1992,
director: "Tim Burton",
imdbRating: 7.0
}, {
title: "Batman Forever",
year: 1995,
director: "Joel Schumacher",
imdbRating: 5.4
}, {
title: "Batman & Robin",
year: 1997,
director: "Joel Schumacher",
imdbRating: 3.7
}, {
title: "Batman Begins",
year: 2005,
director: "Christopher Nolan",
imdbRating: 8.3
}, {
title: "The Dark Knight",
year: 2008,
director: "Christopher Nolan",
imdbRating: 9.0
}, {
title: "The Dark Knight Rises",
year: 2012,
director: "Christopher Nolan",
imdbRating: 8.5
}];
// TODO: Make an array of the titles of movies released before 2000

const moviesBefore2000 = []; //imperative programming
  for (movie of movieList) {
    if (movie.year <= 2000) {
      moviesBefore2000.push(movie.title);
    }
  }

console.log ( moviesBefore2000 );


//functional programming
function moviessBefore2000() {
  const moviessBefore2000 = [];
  
  for (move of movieList) {
    if (move.year <= 2000) {
      moviessBefore2000.push(move.title);
    }
  }
  return moviessBefore2000;
}

console.log(moviessBefore2000());


//using map and filter in functional programming
function moviessBefore2000() {
  //filter movieList by year, then create a movie title array 
  return movieList.filter(move => move.year <= 2000).map(move => move.title);
}
console.log('This is it');
console.log(moviessBefore2000());
