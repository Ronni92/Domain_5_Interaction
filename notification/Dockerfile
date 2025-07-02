# Base
FROM node:20-alpine

# Crear directorio
WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3001

# Ejecutar
CMD [ "npm", "start" ]
