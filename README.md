Exercício – Aplicação Web Node.js com Docker


Comando para clonar o repositorio do github:

echo "# trabalho_de_infraestrutura_distribuido_trabalho_de_docker_para_aplicao_a_web" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/oviccenzo/trabalho_de_infraestrutura_distribuido_trabalho_de_docker_para_aplicao_a_web.git
git push -origin main

git remote add origin https://github.com/oviccenzo/trabalho_de_infraestrutura_distribuido_trabalho_de_docker_para_aplicao_a_web.git
git branch -M main
git push -u origin main



esse é o comando para mostrar o campo timedate que e o fuso do horario e mes e ano e dia certinho:

Cat data.json

PS C:\Users\10780099613\trabalho_de_infraestrutura_aplicação_a_web_com_dockefile> cat data.json
{
  "timedate": "2026-06-15:09:59-03:00"
}
Esse é o acesso do timedate para mostrar que deu certinho:
    
http://localhost:3000/


O comando para executar o arquivo do servidor.js eh:
node servidor.js

Para acessar o dockefile seria:
docker run -p 3000:3000 -d --name meu-servidor-node node-docker-app

# Aplicação Web Node.js com Docker

**Disciplina:** Infraestrutura Distribuída / Sistemas Distribuídos (7º Período - Ciência da Computação)

## 📌 Objetivo da Aplicação
Este projeto tem como objetivo demonstrar na prática a criação, empacotamento e distribuição de uma aplicação utilizando contêineres Docker. 

A aplicação em si é um servidor web simples desenvolvido em Node.js. Quando executado, o servidor escuta requisições na porta 3000 e gera automaticamente um arquivo chamado `data.json`, que registra a data e a hora local do sistema no formato JSON. O uso do Docker garante que a aplicação seja portátil e rode de forma isolada em qualquer ambiente sem problemas de dependências.

## 🗂️ Estrutura do Projeto
* `servidor.js`: Código principal da aplicação em Node.js responsável por criar o servidor e gerar o arquivo JSON.
* `Dockerfile`: Arquivo de instruções para a construção da imagem Docker da aplicação.
* `package.json`: Arquivo padrão de inicialização e metadados do projeto Node.js.
* `.dockerignore`: Lista de arquivos e pastas que o Docker deve ignorar na hora de montar a imagem.

---

## 🛠️ Como construir a imagem Docker

Para empacotar a aplicação, é necessário construir a imagem a partir do `Dockerfile`. Certifique-se de estar na raiz do projeto no terminal e execute o comando abaixo:

```bash
docker build -t node-docker-app .
