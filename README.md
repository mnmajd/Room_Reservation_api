# Chez nestor technical test



Build a based  REST api based solution for chez-nestor reservation solution .

 

# Prerequisites!


* [node.js] - Javascript runtime runtime environment
* [MongoDB] - NoSql database , i used a cloud solution which is Atlas
* [Express] - Markdown parser done right. Fast and easy to extend.
* [Maildev] - local server to test mailing trafic on localhost
* [Express] - sweet node.js framework to create  Rest API
* [npm] - node package manager
* [Mocha & Chai] - for unit test
*  [nyc] - for code coverage
*  [git] - used for version control


## Usage


Clone the project 
```sh
$ git clone https://github.com/mnmajd/majd-test-CN.git
```
Go to  project  directory 
```sh
$ cd majd-test-CN
```
Install project  dependencies
```sh
$ npm install
```
Install maildev  globaly
```sh
$ npm install -g maildev
```
Start project
```sh
$ npm run dev 
```
Start maildev server
```sh
$ maildev
```
Access maildev web UI 
```sh
$ go to http://0.0.0.0:1080
```

### Endpoints
##### 1- Apartment endpoints

 - *GET apartments*  http://localhost:4500/api/v1/apartment 
 -  *POST apartment* http://localhost:4500/api/v1/apartment
 - *GET apartment by id* http://localhost:4500/api/v1/apartment/ida
 - *PUT apartment*  http://localhost:4500/api/v1/apartment/ida
 - *DELETE apartment* http://localhost:4500/api/v1/apartment/ida
##### 2- Room endpoints

 - *GET rooms*  http://localhost:4500/api/v1/room 
 -  *POST room* http://localhost:4500/api/v1/room
 - *GET room by id* http://localhost:4500/api/v1/apartment/idr
 - *PUT room*  http://localhost:4500/api/v1/apartment/idr
 - *DELETE room* http://localhost:4500/api/v1/apartment/idr
 - *Book room by client* http://localhost:4500/api/v1/apartment/idr/idc
##### 3- Client endpoints

 - *GET clients*  http://localhost:4500/api/v1/client 
 -  *POST client = register* http://localhost:4500/api/v1/client/singup
 -  *POST client = login* http://localhost:4500/api/v1/client/login
 - *GET client by id* http://localhost:4500/api/v1/client/idc
 - *PUT client*  http://localhost:4500/api/v1/client/idc
 - *DELETE client* http://localhost:4500/api/v1/client/idc

### What i saw useful to add 
###### 1- Authentification for clients ( register / login ).
###### 2- Email confirmation after register / booking a room.
###### 3- Grant access for booking API so that only users who are logged in can access to the endpoint thats why you should add a `Token` to the header of the request. 
## Unit testing
```sh
$ npm run dev 
```
## Code coverage
```sh
$ npm run cov
```