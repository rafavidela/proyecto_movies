const armarPagina=require('./src/index.js');


function router(url){


     switch (url) {

        case '/':
            return armarPagina("homePage");
            break;

        case '/en-cartelera':
            return armarPagina("enCartelera");
            break;

        case '/mas-votadas':
            return armarPagina("masVotadas");
            break;

        case '/sucursales':
             return armarPagina("sucursales");
            break;

        case '/contacto':
            return armarPagina("contacto");
            break;

        case '/preguntas-frecuentes':
            return armarPagina("preguntasFrecuentes");
        break;

        default:
            
        console.log("Error");
        return (null);
     }
}

module.exports=router;