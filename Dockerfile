FROM node:alpine

WORKDIR /react_todo_app

COPY  . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
