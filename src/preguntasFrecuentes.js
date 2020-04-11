const funcionesUtiles = require('../customFunctions.js');


function armarEncabezado() {
    let encabezado = 'Preguntas Frecuentes';
    return (encabezado + '\n\n');
}

function armarCuerpo() {
    const preguntasJSON=funcionesUtiles.leerDatos('./data/faqs.json');
    let listaPreguntas = preguntasJSON.faqs;
    let totalPreguntas = preguntasJSON.total_faqs;

    let cuerpo = 'Total de preguntas frecuentes:  ' + totalPreguntas+ '\n\nListado de Preguntas:\n\n';
    listaPreguntas.forEach((pregunta) => cuerpo += `Pregunta: ${pregunta.faq_title}\nRespuesta: ${pregunta.faq_answer}\n\n\n\n`);

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

