# multi-http-demo

A small pair of node.js servers to demonstrate a multi-process stack deployment.

## usage

There are Dockerfiles in each folder to build each service.

There is an `api` and a `server` - they are arranged as follows:

```
       HTTP Client

           |

         server

           |

          api
```

The api writes a file to disk and increments an integer saved to the file on each request.

The server connects to the API to fetch the number.

## why?

Because I wanted 2 services communicating over a network to fulfill a front-end HTTP request.

The simpler the services the better because the point is to show how to deploy the services and setup SDN networking between them.

## Docker

The 2 services are automated builds on the Docker Hub as the following:

 * binocarlos/multi-http-demo-server
 * binocarlos/multi-http-demo-api

An example of running the 2 using docker - we assume the IP of the host is 192.168.8.120

#### server

```bash
$ docker run -d 
    -p 8080:80 \
    -e API_IP=192.168.8.120 \
    -e API_PORT=8081 \
    binocarlos/multi-http-demo-server
```

#### api

```bash
$ docker run -d 
    -p 8081:80 \
    -e DATA_FILE=/tmp/db.txt \
    -v /tmp/db.txt:/tmp/db.txt \
    binocarlos/multi-http-demo-api
```

## Licence

MIT

