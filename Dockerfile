FROM node:18
WORKDIR /app

COPY package*.json ./

RUN npm install

CPOY . .
RUN num run build

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s" , "build" , "-l" , "3000"]
