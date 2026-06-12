const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Função nativa para formatar a data no padrão ISO com timezone local
function getLocalTime() {
    const date = new Date();
    const tzo = -date.getTimezoneOffset();
    const dif = tzo >= 0 ? '+' : '-';

    const pad = (num) => {
        const norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
}

const server = http.createServer((req, res) => {
    // Monta o objeto JSON
    const data = {
        timedate: getLocalTime()
    };

    // Caminho para o arquivo data.json
    const filePath = path.join(__dirname, 'data.json');

    // Escreve o arquivo no disco
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Responde à requisição web
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        mensagem: "Arquivo data.json gerado com sucesso!",
        conteudo: data
    }));
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});