# Construir imagen

`docker build -t chat-app .`


# Levantar imagen en local

`docker container run --name chat-app  -dp 4200:4200 -v "$(pwd)":/app chat-app`





