# Week 13: E-Commerce Back End

## Description



## Installation

Once you have cloned the repo to your machine, run **npm i** to instal all the necessary dependencies.

Then to initialize the database, open **./db** in an integrated terminal and login to mysql using **mysql -u root -p** or an appropriate equivalent. Then **source schema.sql;** to create the ecommerce_db database. **Any preexisting database named ecommerce_db will be dropped.**

To seed the database, run **node seeds/index.js** in the root folder.

## Usage

- In order to utilize and test the various routes using Insomnia, it is advised you create a number of routes seen below.

- All routes will be found at **http<nolink>://localhost:3001/api/** 

![requests](./project/images/requests.PNG)

- All GET requests will follow a similar structure and produce JSON objects appropriate to their route. Category requests will show the products in that category, product requests will show all tags associated with that product, and tag reuqests will show all associated products.

- Requests made at a URL with no params will return all objects in that route. For example, **./api/categories/** will return all categories.

![get all](./project/images/get_all.PNG)

- While **./api/categories/:id** will return just one category, and all products associated with it.

![get one](./project/images/get_one.PNG)

- To create a new category, product, or tag, submit a post requqest formatted like the examples below.

- New category:

![new category](./project/images/new_category.PNG)

- New product:

![new product](./project/images/new_product.PNG)

- New tag:

![new tag](./project/images/new_tag.PNG)

- To update a category, product, or tag: format the URL like a GET ONE request and format the request itself like a POST request.

![updates](./project/images/update.PNG)

## License

Standard MIT license, coursework.

Starter code provided by the UofM Full Stack Coding Bootcamp.

This project makes use of [mysql](https://www.mysql.com/) and [Sequelize](https://sequelize.org/)