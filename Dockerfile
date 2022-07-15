FROM node:16.5.0

COPY package-lock.json package.json ./
RUN npm install

CMD ["npm", "run", "dev"]

