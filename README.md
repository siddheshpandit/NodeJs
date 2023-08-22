# NodeJs

<!-- LocalHost -->

<!-- What are HTTP Status Code -->

Status code are codes issued by server in response to the client requests made to the server.
1. It helps in identification of what happened behind the scenes with the request sent to the server.
For eg(If the request is successful or is there any error at the backend).
2. It helps in SEO (Search Engine Optimization) 
Where can we check status code
browser-> devtools -> network tab

All Http status codes are seperated into 5 classes or categories.
The first digit defines the class of response.
1xx: Informational Response - The request was received and continuining processing 
2xx: Success Response - The request was received, understood and processed.
3xx: Redirection - Resource Moved Temporerily or permanent - Further action needs to be taken in order to complete the request
4xx: Client Side Errors - the request contains bad syntax or cannot be fulfilled
5xx: Server Error - the server failed to fulfil an apparently valid request(Crash or Down)

## Informational Response (Rarely Used):
100 Continue: This interim response indicates that the client should continue the request or ignore the response if the request is already finished. 

102 Processing : This code indicates that the server has received and is processing the request, but no response is available yet

## Successfull Response:
200 Ok: The Request Succeded.

201 Created: The request succeeded, and a new resource was created as a result. 
Typically used in POST request when a new resource is created.

## Redirection Messages:
301 Moved Permanently:
The URL of the requested resource has been changed permanently. The new URL is given in the response.

302 Found
This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

## Client Error Responses:
400 Bad Request:
The server cannot or will not process the request due to something that is perceived to be a client error 

401 Unauthorized:
Although the HTTP standard specifies "unauthorized"

404 Not Found:
The server cannot find the requested resource

## Server Error:
500 Internal Server Error:
The server has encountered a situation it does not know how to handle.

502 Bad Gateway
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.


We can create our own status codes but it is not recommended.

