
FROM node:16-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


ENV PORT=8000
ENV MONGO_URL=mongodb+srv://itpm322:harith1234@resturant.9ssqwme.mongodb.net/?retryWrites=true&w=majority&appName=Resturant


EXPOSE 8000


CMD ["npm", "start"]
