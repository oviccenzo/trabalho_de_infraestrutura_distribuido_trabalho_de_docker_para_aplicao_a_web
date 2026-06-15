const http = require("http");
const fs = require("fs");
const path = require("path");

const porta = 3000;

function getLocalTime(){
    const date = new Date();
    const tzo = -date.getTimezoneOffset();
    const dif = tzo >= 0 ? '+' : '-';

    const pad = (num) => {
        const norm = Math.floor(Math.abs(num))
        return (norm < 10 ? '0' : '') + norm;
    };

    return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    ':' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    dif + pad(tzo / 60) +
    ':' + pad(tzo % 60);
}

const server = http.createServer((req, res) => {
    const data = {
        timedate : getLocalTime()
    };

    const filepath = path.join(__dirname, "data.json");

    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));

    res.statusCode = 200;
    res.setHeader("Content-Type", "aplication/json");
    res.end(JSON.stringify({
        mensagem: "Arquivo data.json gerado com sucesso!",
        conteudo: data
    }));
});

server.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
});
