---
title: Deploy to Kubernetes
---

This document guides you to deploy Bytebase docker image to Kubernetes.

## Prerequisites

Before starting, make sure you are familiar with [Docker](https://www.docker.com/get-started/) and [Kubernetes](https://kubernetes.io/docs/setup/).

## Deploy to Kubernetes

Here is a sample Kubernetes YAML file `bb.yaml` describing the minimal components and configuration required to run Bytebase in Kubernetes.

```yaml
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
          image: bytebase/bytebase:%%bb_version%%
          imagePullPolicy: Always
          args:
            [
              "--data",
              "/var/opt/bytebase",
              "--external-url",
              "https://bytebase.example.com",
              "--port",
              "8080",
              "--pg",
              "postgresql://user:secret@host:port/dbname",
            ]
          ports:
            - containerPort: 8080
          volumeMounts:
            - name: data
              mountPath: /var/opt/bytebase
          livenessProbe:
            httpGet:
              path: /healthz
              port: 8080
            initialDelaySeconds: 300
            periodSeconds: 300
            timeoutSeconds: 60
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
  type: LoadBalancer
  selector:
    app: bytebase
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080
```

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
   NAME                  TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
   bytebase-entrypoint   LoadBalancer   10.100.36.246   localhost     8080:30254/TCP   72s
   kubernetes            ClusterIP      10.96.0.1       <none>        443/TCP          9d
   ```

3. Open a browser and visit [localhost:8080](http://localhost:8080), you should see Bytebase.

<hint-block type="info">

For production setup, you should [configure a proper --external-url](/docs/get-started/install/external-url).

</hint-block>

## Upgrade

When a new Bytebase release is published, you can change the image version in the yaml file

```yaml
      containers:
        - name: bytebase
          image: bytebase/bytebase:%%bb_version%%
```

Sometimes we need to update the image to the latest digest without changing the image name and version. Or you may want to trigger a restart of all the Bytebase pods without changing the yaml.

In this case, you can run this command:

```bash
kubectl rollout restart deployment/bytebase
```

Kubernetes will rolling restart the pods of the deployment. Because we set `imagePullPolicy: Always`, the new pods will always use the latest image digest.

## Persistent Volume

To keep data persistence in production, you need to use the [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes) in the cluster. Each cloud provider has its own solution.

### For Amazon Elastic Kubernetes Service(EKS)

In AWS EKS, you can use the [Amazon EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) for persistent volumes. Follow the [managing EBS CSI](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html) to add it as an Amazon EKS add-on.

### For Google Kubernetes Engine(GKE)

Please follow the [Persistent volumes and dynamic provisioning](https://cloud.google.com/kubernetes-engine/docs/concepts/persistent-volumes).
