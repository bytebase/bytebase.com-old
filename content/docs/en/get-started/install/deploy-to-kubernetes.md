---
title: Deploy to Kubernetes
---

This document guides you to deploy Bytebase docker image to Kubernetes.

## Prerequisites

Before starting, make sure you are familiar with [Docker](https://www.docker.com/get-started/) and [Kubernetes](https://kubernetes.io/docs/setup/).

## Run on localhost

Here is a sample Kubernetes YAML file describing the minimal components and configuration required to run Bytebase locally.

<pre lang="yaml">
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bytebase
  namespace: default
spec:
  selector:
    matchLabels:
      app: bytebase
  template:
    metadata:
      labels:
        app: bytebase
    spec:
      containers:
      - name: bytebase
        image: bytebase/bytebase:1.2.2
        args: ["--data", "/var/opt/bytebase", "--host", "http://localhost", "--port", "8080"]
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: data
          mountPath: /var/opt/bytebase
      volumes:
      - name: data
        emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: bytebase-entrypoint
  namespace: default
spec:
  type: NodePort
  selector:
    app: bytebase
  ports:
  - port: 8080
    targetPort: 8080
    nodePort: 30001
</pre>

1. Start Bytebase with the following command:

   ```bash
   kubectl apply -f bb.yaml
   ```

   then you should see output that looks like the following:

   ```plain
   deployment.apps/bytebase created
   service/bytebase-entrypoint created
   ```

2. Make sure everything worked by listing your deployments:

   ```bash
   kubectl get deployments
   ```

   if all is well, your deployment should be listed as follows:

   ```plain
   NAME       READY   UP-TO-DATE   AVAILABLE   AGE
   bytebase   1/1     1            1           10s
   ```

   Do the same check for your services:

   ```bash
   kubectl get services
   ```

   if all is well too, you should see output that looks like the following:

   ```plain
   NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
   bytebase-entrypoint   NodePort    10.106.30.235   <none>        8080:30001/TCP   107s
   kubernetes            ClusterIP   10.96.0.1       <none>        443/TCP          9d
   ```

3. Open a browser and visit [localhost:30001](http://localhost:30001), you should see Bytebase.

<hint-block type="info">

For production setup, you need to re-write the container args [--host](/docs/reference/command-line#--host-string) match exactly to the address where Bytebase supposed to be visited.

</hint-block>

## More configuration in production

Kubernetes has many components and plugins that can make your services more efficient.

### Persistent Volume

For keeping data persistence in production, you need to use the [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes). For example, in AWS EKS, you can use its CSI driver like below:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: efs-pv
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  storageClassName: efs-sc
  csi:
    driver: efs.csi.aws.com
    volumeHandle: fs-582a03f3
```

Then create its claim and change the `volumes` field in `bb.yaml`

```yaml
volumes:
  - name: data
    persistentVolumeClaim:
      claimName: data-pv-claim
```
