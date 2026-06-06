# DESAFIO 1 — "Hello Docker!" - Usando Node.js
✅ Objetivo

Criar e rodar uma aplicação web simples Node.js dentro de um container Docker usando um Dockerfile básico

# Esta aplicação roda em Node.js

# Build da imagem
docker build -t hello-docker .

# Executar o container
docker run -d -p 3000:3000 --name hello-docker-app hello-docker

# Acesse via browser

localhost:3000
ou 
curl -I locahost:3000
