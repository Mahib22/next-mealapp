FROM node:18.18-alpine
RUN mkdir -p /pages
WORKDIR /pages
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD npm run dev


# docker build -t docker_nextjs:developement .
# docker run --publish 8080:3000 docker_nextjs:developement