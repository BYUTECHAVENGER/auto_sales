function findCar() {
    var Make = $('#Make').val();
    var Model = $('#Model').val();
    var Color = $('#Color').val();
    
    var query = {make: Make ,model: Model,color: Color}





    $.get('/carChoice', query, function(result) {
        console.log (result);

        var newCar = "<h4>We have the following options to offer you: <h4>"

        if
        for (let i = 0; i < result.carChoice.length; i++){

            newCar += result.carChoice[i].make + "<br>" + result.carChoice[i].model
            + "<br>" +  result.carChoice[i].color + "<img src='" + result.carChoice[i].img + ".jpg'>"
           + "<hr>"
        }
        $('#newCar').html(newCar);
    })

    









}





// function searchMovie() {
//     var search = $('#search').val();
//     console.log(search);
//     var query = {apikey: 'd664010e', s: search}
//     var path = 'http://www.omdbapi.com/'
//     var tableRows = "";
//     $.get(path, query, function(result) {
//         console.log(result);
//         var movies = result.Search;
//         var insertHtml = "";
//         var movieHtml = "";
//         for (let i = 0; i < movies.length; i++) {
//             var movieTitleAndYear = movies[i].Title + " (" + movies[i].Year + ")";
//             var movieId = movies[i].imdbID;
//             movieHtml += movieTitleAndYear + "<button onclick=\"printDetails('" + movieId + "');\">View Details</button><br>";
//             if (i == 0 || i > 0 && movies[i].imdbID != movies[i - 1].imdbID) {
//                 var movie = movies[i];
//                 var movieId = movie.imdbID;
//                 tableRows += '<tr><td>' + movie.Title + " (" + movie.Year + ")</td><td><button onclick=\"printDetails('" + movieId + "');\">View Details</button></td></tr>";
//             }
//         }
//         $('#movieList').html(movieHtml);

//         $('#movieTable').html(tableRows);
//         $('#details').html('');
//         $('#poster').html('');
        
//     });
// }