# Use the official Node.js image as base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Bun with npm
RUN npm install -g bun@latest

# Install dependencies using bun install
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the port that the Express app will run on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "index.ts"]