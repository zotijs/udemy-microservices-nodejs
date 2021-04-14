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
- delete pod alternative: `kubectl delete pod <pod_name>`
- execute the given command in a running pod: `kubectl exec -it <pod_name> <command>`
- print out pod logs: `kubectl logs <pod_name>`
- tell k8s to process the config: `kubectl aply -f <config_file_name>`
- print out info about the running pod: `kubectl describe pod <pod_name>`
- list all running Deployments: `kubectl get deployments`
- describe Deployments: `kubectl describe deployment <deployment_name>`
- create a Deployment from config file: `kubectl apply -f posts-depl.yaml`
- delete a Deployment: `kubectl delete deployment <deployment_name>`
- updating Deployment: `kubectl rollout restart deployment <deployment_name`
- create a Service from config file: `kubectl apply -f posts-srv.yaml`
- list Services: `kubectl get services`
- describe Services: `kubectl describe service <service_name>`
- multi apply (everything inside a directory): `k apply -f .`

## Minikube troubleshooting [info](https://medium.com/swlh/how-to-run-locally-built-docker-images-in-kubernetes-b28fbc32cc1d)

`eval $(minikube docker-env)`

Note - This command will need to be repeated anytime you close and restart the terminal session.

Afterward, you can build your image:

`docker build -t USERNAME/REPO .`

Update, your pod manifest as shown above and then run:

`kubectl apply -f posts.yaml`

## Minikube

- `minikube ip <NodePort>` and pass the provided ip with the NodePort to the browser, for example `http://192.168.49.2:31292/posts`

## Steps:

- run minikube: `minikube start`
- `eval $(minikube docker-env)`
- build image: `docker build -t zotijs/posts:0.0.1 .`
- update pod manifest: `kubectl apply -f posts.yaml`
- create deployment: `kubectl apply -f posts-depl.yaml`
- create service: `kubectl apply -f posts-srv.yaml`
- get the running ip: `minikube ip <NodePort>`

## Aliases

Aliases for bash added inside `~/.bash_aliases` so instead of `kubectl apply -f posts.yaml` I can do `k apply -f posts.yaml`.
Also an alias for `docker ps` was added: `dps`

## Ingress-Nginx

- setup ingress-nginx: `minikube addons enable ingress`
- verify ingress controller is running: `kubectl get pods -n kube-system`

## Skaffold

`skaffold dev`
