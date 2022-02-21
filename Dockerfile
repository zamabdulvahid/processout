#Get node version, install & generate build
FROM node:latest as build
WORKDIR /app
COPY . /app/
RUN npm install && \
    npm run build

#Serve the app using nginx server
FROM nginx:latest
COPY --from=build /app/dist/processout /usr/share/nginx/html
EXPOSE 8080

