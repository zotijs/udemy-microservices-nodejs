# Generating a tsconfig

`npx tsc --init`

# Bypass chrome "Privacy error"

- click somewhere on the page and type `thisisunsafe`

# Creating a Secret availble to all pods via Env Variables (hide it somewhere secret)

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

# Debug a pod

`kubectl describe pod <pod_name>`
