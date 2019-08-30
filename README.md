# RESTful-API-Express-js
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/npm/v/npm.svg)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)
<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contens
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.
- XAMPP - Download and Install [XAMPP](https://www.apachefriends.org/download.html) - Used to get the database 

## Installation
### Install packages
```
$ npm init -y
$ npm install express --save
$ npm install mysql --save
$ npm install body-parser
```

```
SERVER_PORT = YOUR_PORT

HOST = "YOUR_DB_HOST"
USER = "YOUR_DB_USER"
PASSWORD = "YOUR_DB_PASSWORD"
NAME = "YOUR_DB_NAME"

SECRET_KEY = "YOUR_SECRET_KEY"
```
### Start Development Server
```
$ npm start
```

## Documentation

### Products Routes
#### GET Request
- "/products" => get products data from database. Query params:
  - "key" -> search by products name, 
  - "sortBy" -> sorting by columns name,
  - "sort" -> sorting data based on ascending or descending,
  - "limit" -> limitation data per page,
  - "page" -> redirect to specific page.

#### POST Request
- "/products/users" => create new data
	  - note = i am using middleware to access Post, Patch, and Delete. Register needed to get token.
    
#### PUT Request
- "/products/users/:id" => Update data products

#### PATCH Request
- "/products/qty/:act/:id/:calc" => Update quantity of the products. Under the condition:
   - ":act" => choose action add / reduce quantity
   - ":id" => choose id product
   - ":calc" => number calculation add / reduce quantity of the product


#### DELETE Request
- "/products/:id" => Delete a products in database with specific id

### Categories Routes
#### GET Request
- "/category" => get category data from database.

#### POST Request
- "/category" => create new data to category database

#### PUT Request
- "/category/users/:id" => Update data category

#### DELETE Request
- "/category/users/:id" => Deleting data categories in database.




 


