#Dockerfile for building a React app 

# Base image
FROM node:12.18.3-alpine3.9

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY wollywoggler/package*.json ./
RUN npm install

# Copy all source files in wollywoggler folder
COPY wollywoggler/ .

# Build app
RUN npm run build

# Expose port 3000
EXPOSE 3000

#run react app 



