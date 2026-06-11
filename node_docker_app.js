const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Configura o cabeçalho para responder como JSON
    res.setHeader('Content-Type', 'application/json');

    // Cria a data local no formato ISO (ajustada para o fuso horário)
    const dataLocal = new Date();
    const fusoHorarioOffset = dataLocal.getTimezoneOffset() * 60000;
    const dataLocalAjustada = new Date(dataLocal.getTime() - fusoHorarioOffset);

    // Monta o objeto JSON
    const conteudoJson = {
        timedate: dataLocalAjustada.toISOString().replace('Z', '-03:00') // Exemplo de formato pedido
    };

    // Salva o arquivo data.json no disco do contêiner
    fs.writeFileSync('data.json', JSON.stringify(conteudoJson, null, 2));

    // Responde para o navegador
    res.statusCode = 200;
    res.end(JSON.stringify(conteudoJson, null, 2));
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});