FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

RUN ls -la  

CMD ["serve", "-s", "dist", "-p", "3000"]
