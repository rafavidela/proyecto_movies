const funcionesUtiles = require('../customFunctions.js');

function armarEncabezado() {
    let encabezado = 'Más Votadas';
    return (encabezado + '\n\n');
}

function armarCuerpo() {
    let moviesJson = funcionesUtiles.leerDatos('./data/movies.json');
    let listOfMovies = moviesJson.movies;
    let totalMovies = moviesJson.total_movies;
   let masVotadas = listOfMovies.filter(movie=>movie.vote_average>=7).sort((a,b)=>a.vote_average<b.vote_average?1:b.vote_average<a.vote_average?-1:0);
    let rankingPromedio=listOfMovies.map(movie => movie.vote_average).reduce((a,b)=>a+b)/totalMovies;
    let cuerpo =  `Rating promedio:  ${rankingPromedio.toFixed(2)} \n`;
    cuerpo=cuerpo + 'Total de películas más votadas:  ' + masVotadas.length + '\n\nListado de Películas más votadas:\n\n';
    masVotadas.forEach((movie) => cuerpo += `Título: ${movie.title}\nRating: ${movie.vote_average}\nReseña: ${movie.overview}\n\n\n\n`);

    return (cuerpo + '\n\n');
}

function armarPie() {
    let pie = '\nRecordá que podés visitar las secciones:\n\tEn Cartelera\n\tMás Votadas\n\tSucursales\n\tContacto\n\tPreguntas Frecuentes ';
    return (pie + "\n\n'");
}

const pagina = {
    encabezado: armarEncabezado(),
    cuerpo: armarCuerpo(),
    pie: armarPie(),
}

module.exports = pagina;

