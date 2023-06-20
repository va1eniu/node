//1, importar el modulo global http

const http = require('http');

/* function requestListener(req , res){
es mejor pasra como funcion anonima
} */ 

//crrea el servidor web

const server = http.createServer((req, rest) => {
    const url = req.url;
    /* console.log(req.url , req.method, req.headers); */
   /*  process.exit(); */

   
   if (url === '/') {
    
  
    //enviando respuestas
    rest.setHeader('Content-Type', 'text/html');
    rest.write('<html> ');
    rest.write('<head> ');
    rest.write('<title>my first response page </title> ');
     rest.write('<body><form action="/message" method= "POST"><input type="text" name="message"><button type="submit">send</button></form> <body>')
    rest.write('</head> ');
    rest.write('</html> ');
    return rest.end();
 }
   //enviando respuestas
   rest.setHeader('Content-Type', 'text/html');
   rest.write('<html> ');
   rest.write('<head> ');
   rest.write('<title>my first response page </title> ');
    rest.write('<body><h1>hello from node js </h1> <body>')
   rest.write('</head> ');

   rest.write('</html> ');
   rest.end();
});

server.listen(5002);
