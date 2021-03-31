# Specify a base image -> https://hub.docker.com/
FROM node:alpine

# Create a working directory to place all the copied files
WORKDIR /usr/app

# COPY files from our working directory
# to container's working directory
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy everything else in order not to invalidate docker's caching
COPY ./ ./

# Default command
CMD ["npm", "start"]

# Help commands:
# port mapping: docker run -p <port_number> : <containers_port_number> <image_name>
# open a shell: docker run -it <image_name> sh