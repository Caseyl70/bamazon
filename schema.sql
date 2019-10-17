CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
item_id INT auto_increment NOT NULL,  
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price FLOAT NOT NULL,
stock_quantity INT NOT NUll,
PRIMARY KEY(item_id)
);



