# Cheat sheet

## Docker

- build an image with a tag: `docker build -t zotijs/posts:0.0.1 .`
- run (create and start) an image: `docker run zotijs/posts:0.0.1` or `docker run <image_id>`
- run an image with default command override: `docker run -it <image_id> <command>`
- execute the given command in a running container: `docker exec -it <image_id> <command>`
- print out container's logs: `docker logs <image_id>`
- port mapping: `docker run -p <port_number>:<containers_port_number> <image_name>`
- open a shell: `docker run -it <image_name> sh`
- list containers: `docker ps`

## K8S

- create a pod from docker image: `kubectl apply -f posts.yaml`
- see created pods: `kubectl get pods`
- delete a pod: `kubectl delete -f posts.yaml`

## Minikube troubleshooting [info](https://medium.com/swlh/how-to-run-locally-built-docker-images-in-kubernetes-b28fbc32cc1d)

`eval $(minikube docker-env)`

Note - This command will need to be repeated anytime you close and restart the terminal session.

Afterward, you can build your image:

`docker build -t USERNAME/REPO .`

Update, your pod manifest as shown above and then run:

`kubectl apply -f posts.yaml`
