# DESAFIO 1.b — "Hello Docker!"
✅ Objetivo

Criar e rodar uma aplicação web simples (Node.js ou Python) dentro de um container Docker usando um Dockerfile básico

# Esta aplicação esta rodando em Python

# Build da imagem
docker build -t hello-docker-b .

# Executar o container
docker run -d -p 5000:5000 --name hello-docker-app hello-docker-b


# Acesse via browser

localhost:5000
ou 
curl -I locahost:5000
