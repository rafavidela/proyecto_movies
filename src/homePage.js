const funcionesUtiles = require('../customFunctions.js');

function armarEncabezado() {
    let encabezado = 'Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.';
    return (encabezado + '\n\n');
}

function armarCuerpo() {
    let moviesJson = funcionesUtiles.leerDatos('./data/movies.json');
    listOfMovies = moviesJson.movies;
    totalMovies = moviesJson.total_movies;
    let cuerpo = 'Total de películas en cartelera:  ' + totalMovies + '\n\nListado de Películas:\n';
    let titulosOrdenados = listOfMovies.map(movie => movie.title).sort();
    titulosOrdenados.forEach((titulo) => cuerpo += `\t${titulo}\n`);
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