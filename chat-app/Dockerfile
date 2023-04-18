# Usar la imagen de Node 14
FROM node:16-alpine



# Establecer el directorio de trabajo del proyecto de Angular
WORKDIR /app

RUN npm install -g @angular/cli@15.0.4

# Copiar el package.json y package-lock.json al directorio de trabajo
COPY chat-app/package*.json ./


# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY chat-app/ .




# Exponer el puerto 4200
EXPOSE 4200

# Establecer el volumen

# Iniciar la aplicación de Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
