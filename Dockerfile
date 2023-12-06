# Use an official Node.js runtime as a base image
FROM node:20

LABEL authors="ToniPortal"

# Update dependencies and install curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install npm-check-updates globally and update dependencies
RUN npm install -g npm-check-updates && ncu -u

# Install dependencies
RUN npm install

# Install discord.js
RUN npm install discord.js

# Bundle app source
COPY . .

# Specify the command to run on container start
CMD ["node", "index.js"]
