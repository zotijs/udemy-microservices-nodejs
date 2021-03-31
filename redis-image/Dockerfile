# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when it starts
# as a container
CMD ["redis-server"]

# HELP Commands:
# tag an image: docker build -t <my docker id>/my-redis-image:latest .
# run it: docker run <my docker id>/my-redis-image