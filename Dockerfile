# Usa imagem oficial do Node
FROM node:18-alpine

# Define diretório da app
WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm install

# Copia restante da aplicação
COPY . .

# Compila a aplicação
RUN npm run build

# Expõe a porta padrão
EXPOSE 3000

# Comando para rodar
CMD ["node", "dist/main"]
