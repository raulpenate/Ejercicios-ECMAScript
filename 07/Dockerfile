FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install 

CMD ["tail", "-f", "/dev/null"]