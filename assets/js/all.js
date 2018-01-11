// funcionalidades pagina ver todos 

$(document).ready(() => {
	console.log("cargado")
}); 

//Funcion que imprime las series en la pagina all.html 
function printMovie(){
	console.log("se imprime pelicula")
		$("#movie-box").show(); 
		$("#serie-box").hide()
		for ( var i in peliculas){
			var titleMovie= peliculas[i].title; 
			var trailerMovie= peliculas[i].trailer;
			axios.get('http://www.omdbapi.com?t='+ titleMovie + '&apikey=a7a10611')
			.then((response) => {
				let titleForId= peliculas[i].title;
				let movieTitle= response.data.Title; 
				let movieActors= response.data.Actors;
				let movieAward= response.data.Awards; 
				let movieCountry= response.data.Country; 
				let movieLanguage= response.data.Language; 
				let movieDescription= response.data.Plot; 
				let movieProduction= response.data.Production; 
				let movieYear= response.data.Year;
				let movieImdbRating = response.data.imdbRating; 
				let movieWriter= response.data.Writer; 
				let movieRuntime= response.data.Runtime; 
				let moviePoster= response.data.Poster; 
				let movieDirector= response.data.Director;
				let movieRating= response.data.Ratings[0].Value; 
				let movieReleased= response.data.Released

				$("#movie-box").append('<div class="row box">'+
													      '<div class="col s12 m5">'+
													        '<a href=""><img class="photo z-depth-5" src="' + moviePoster +'" alt=""></a>'+
													      '</div>'+
													      '<div class="col s12 m5 description">'+
													        '<h4 class="title">'+movieTitle+'</h4>'+
													        '<p>' + movieYear +'‧'+ movieRating +'‧ Cine dramático/Película de misterio</p>'+
													        '<p class="summary">' + movieDescription +'</p>'+
													        '<p class="director"><span>Director:</span>'+ movieDirector + '</p>'+
													        '<p class="actor"><span>Protagonistas:</span>' + movieActors +'</p>'+
													        '<p class="year">'+movieReleased +'</p>'+
													        '<i class="material-icons center-align">star star star_half star_border </i>'+
													        '<br>'+
													        '<br>'+
													        '<div>'+
													          '<a class="waves-effect waves-light btn red darken-4 trailer"><i class="fa fa-caret-right" aria-hidden="true"></i></i>  Trailer</a>'+
													          '<a class="waves-effect waves-light btn blue darken-4"><i class="fa fa-commenting" aria-hidden="true"></i>  Teorías</a>'+
													        '</div>'+
													      '</div>'+
													    '</div><!--boxpelis-->'+
													    '<hr>'); 


				})
			.catch((error) => {
				console.log("error"); 
		
			});
			} 
	}

	function printSeries(){
		console.log("se imprime serie")
		$("#movie-box").hide();
		$("#serie-box").show(); 
		for (var i in series){
			var titleMovie= series[i].title; 
			axios.get('http://www.omdbapi.com?t='+ titleMovie + '&apikey=a7a10611')
			.then((response) => {
				let seriesTitle= response.data.Title; 
				let seriesActors= response.data.Actors;
				let seriesAward= response.data.Awards; 
				let seriesCountry= response.data.Country; 
				let seriesLanguage= response.data.Language; 
				let seriesDescription= response.data.Plot; 
				let seriesProduction= response.data.Production; 
				let seriesYear= response.data.Year;
				let seriesImdbRating = response.data.imdbRating; 
				let seriesWriter= response.data.Writer; 
				let seriesRuntime= response.data.Runtime; 
				let seriesPoster= response.data.Poster; 
				let seriesDirector= response.data.Director;
				let seriesRating= response.data.Ratings[0].Value; 
				let seriesReleased= response.data.Released

				$("#serie-box").append('<div class="row box">'+
													      '<div class="col s12 m5">'+
													        '<a href=""><img class="photo z-depth-5" src="' + seriesPoster +'" alt=""></a>'+
													      '</div>'+
													      '<div class="col s12 m5 description">'+
													        '<h4 class="title">'+seriesTitle+'</h4>'+
													        '<p>' + seriesYear +'‧'+ seriesRating +'‧ Cine dramático/Película de misterio</p>'+
													        '<p class="summary">' + seriesDescription +'</p>'+
													        '<p class="director"><span>Director:</span>'+ seriesDirector + '</p>'+
													        '<p class="actor"><span>Protagonistas:</span>' + seriesActors +'</p>'+
													        '<p class="year">'+seriesReleased +'</p>'+
													        '<i class="material-icons center-align">star star star_half star_border </i>'+
													        '<br>'+
													        '<br>'+
													        '<div>'+
													          '<a class="waves-effect waves-light btn red darken-4 trailer"><i class="fa fa-caret-right" aria-hidden="true"></i></i>  Trailer</a>'+
													          '<a class="waves-effect waves-light btn blue darken-4"><i class="fa fa-commenting" aria-hidden="true"></i>  Teorías</a>'+
													        '</div>'+
													      '</div>'+
													    '</div><!--boxpelis-->'+
													    '<hr>'); 


				})
			.catch((error) => {
				console.log("error"); 
		
			});
			} 

	}