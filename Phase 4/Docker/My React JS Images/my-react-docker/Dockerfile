FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install 
COPY . /app/
CMD ["npm","start"]