const homePage = require("./homePage");
const contacto = require("./contacto");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas");
const preguntasFrecuentes = require("./preguntasFrecuentes");
const sucursales = require("./sucursales");

let pagina=[];
// pagina.encabezado    pagina.cuerpo    pagina.pie


function armarPagina(seccion){
 
    switch (seccion) {

        case 'homePage':
            return homePage;
            break;

        case 'enCartelera':
            return enCartelera;
            break;

        case 'masVotadas':
            return masVotadas;
            break;

        case 'sucursales':
            return sucursales;
            break;

        case 'contacto':
            return contacto;
            break;

        case 'preguntasFrecuentes':
            return preguntasFrecuentes;
            break;

        default:
            console.log("error");

    }


    return pagina;
}



module.exports=armarPagina;
