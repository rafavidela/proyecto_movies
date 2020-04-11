const funcionesUtiles = require('../customFunctions.js');

function armarEncabezado() {
    let encabezado = 'En Cartelera';
    return (encabezado + '\n\n');
}

function armarCuerpo() {
    let moviesJson = funcionesUtiles.leerDatos('./data/movies.json');
    let listOfMovies = moviesJson.movies;
    let totalMovies = moviesJson.total_movies;
    let cuerpo = 'Total de películas en cartelera:  ' + totalMovies + '\n\nListado de Películas:\n\n';
    let titulosOrdenados = listOfMovies.sort((a,b)=>a.title>b.title?1:b.title>a.title?-1:0);
    titulosOrdenados.forEach((titulo) => cuerpo += `${titulo.title}\n\n\t${titulo.overview}\n\n\n\n`);
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