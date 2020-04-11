function armarEncabezado() {
    return ('Contáctanos\n\n');
}

function armarCuerpo() {
    let cuerpo = `¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. 
Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales.
Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes`;

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