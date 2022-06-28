
# Установка и запуск

Для развертывания kubernetes-кластера использовался docker-desktop.

Перед запуском нужно установить Nginx ingress controller, если он не был установлен ранее, при помощи команды:


```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```

Далее, необходимо развернуть кластер, вызвав следующий скрипт в корневой директории:

```bash
sh deploy.sh
```

По умолчанию используется образ для ARM 64. Запускается одна реплика, но их количество можно изменить в манифесте `deployment/deployment.yaml`.

После успешного запуска, API доступно по адресу `app.localdev.me`. Проверить можно перейдя на health-check:

```
app.localdev.me/health
```

## Известные проблемы

При тестировании на MacBook Pro (M1), столкнулся с проблемой, что после сброса и повторного создания кластера, запросы не доходят до Nginx ingress controller. Проблема оказалась в LoadBalancer'е docker-desktop, на GitHub есть [открытый Issue](https://github.com/docker/for-mac/issues/4903) с этой проблемой. Решить ее можно перезагрузкой системы после очистки кластера.
