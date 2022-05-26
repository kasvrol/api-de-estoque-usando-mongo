const http = require('http');
const PORT = 5000;
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Curso de Node')
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})