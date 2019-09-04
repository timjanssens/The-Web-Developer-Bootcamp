var movies = [
    {name: "In bruges", rating:4, seen: false}, 
    {name: "The good wife", rating:4, seen: true}, 
    {name: "Suits", rating:5, seen: true} 
];

function checkSeen(movies) {
    if (movies.seen === true){
        return "You have watched";
    }
    else {
        return "You have not seen";
    }
}



movies.forEach (function(movie){
    console.log(checkSeen(movie) + " \"" + movie.name + "\"" + " - " + movie.rating + " stars");
});