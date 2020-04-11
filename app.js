/*const calculadora = require('./calculadora.js');
const logsJSON=fs.readFileSync('./historial.json','utf-8');
const logs=JSON.parse(logsJSON);
*/

let router =require('./router.js');
const http = require('http');


// Servidor
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    console.log("req.url");
    console.log(req.url); 

    // Route System
     let pagina=router(req.url);
    if (pagina!==null){
        res.write(pagina.encabezado + pagina.cuerpo + pagina.pie);
        res.end();
    } else {
        res.end('404 not found');
    }
    


}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));