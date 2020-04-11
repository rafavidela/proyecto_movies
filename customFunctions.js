let fs=require('fs');


function leerDatos(archivo) {
    let datos = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    return datos;
}

function ordenar(array,key){   ///AVERIGUAR CÓMO PASAR EL KEY
    array.sort((a,b)=>a.key>b.key?1:b.key>a.key?-1:0);
}


module.exports.leerDatos=leerDatos;
