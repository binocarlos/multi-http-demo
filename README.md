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

## Licence

MIT

