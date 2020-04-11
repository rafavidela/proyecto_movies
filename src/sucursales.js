const funcionesUtiles= require('../customFunctions');

const preguntasJSON=funcionesUtiles.leerDatos('./data/faqs.json');


function armarEncabezado() {
    let encabezado = 'Nuestras Salas';
    return (encabezado + '\n\n');
}

function armarCuerpo() {
    let cinesJson=funcionesUtiles.leerDatos('./data/theaters.json');
    let listaCines = cinesJson.theaters;
    let totalCines=cinesJson.total_theaters;
    let cines = listaCines.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0);
    let cuerpo = 'Total de Cines:  ' + totalCines + '\n\nListado de Cines:\n\n';
    cines.forEach((cine) => cuerpo += `Nombre: ${cine.name}\nDirección: ${cine.address}\nDescripción: ${cine.description}\nCantidad de salas: ${cine.total_rooms}\n\n\n\n`);
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





