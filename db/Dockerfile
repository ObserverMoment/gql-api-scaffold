FROM node:current-alpine
WORKDIR /usr/scr/app
ADD . .
RUN npm install && npm run build
CMD npm run start
