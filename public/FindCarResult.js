function findCar() {
    var make = $('#Make'=).val();
    var model = $('#Model'=).val();
    var color = $('#Color'=).val();
    var query = {make: make ,model: model,color: color}





    $.get('/carChoice', query, function(result) {
        console.log (result);
    }
// var newCar 
// <h1>We offer the following auto options for you:</h1>



// <% for (let i = 0; i < carChoice.length; i++) { %>
	
//         <%=carChoice[i].make %>
//         <br>
//         <%=carChoice[i].model %>
//         <br>
//         <%=carChoice[i].color %>
//         <br>
//         <%=carChoice[i].img %>
// <% } %></br>








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