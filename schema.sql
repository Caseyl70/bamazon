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
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Football Helemet", "Sports", 180, 100), 
("Kicking Tee", "Sports", 25, 130),
("Chair", "Furiniture", 1000, 50), 
("Rainbow Six Siege", "Video Games", 60, 150), 
("MacBook Pro", "Electronics",3000.00 ,200 ),
("Gloves", "Sports", 65, 100), 
("Visor", "Sports", 50, 130),
("Table", "Furiniture", 1200, 50), 
("NHL 19", "Video Games", 60, 150), 
("MacBook Air", "Electronics",3000.00 ,200 ),
  ("Trackpad", "Electronics",30.00 ,2000 ),
  ("AirPods", "Electronics",200.00 ,2000 ),
  ("Beats By Dre", "Electronics",300.00 ,400 ),
  ("Apple TV", "Electronics",350.00 ,400 ),
  ("Drone", "Electronics",3000.00 ,200 ),
  ("Basketball", "Sports",30.00 ,150 ),
("Red Dead Redemption II", "Video Games", 60, 150), 
("Call Of Duty Modern Warfare III", "Video Games", 60, 150), 
("Assasins Creed Brother Hood", "Video Games", 60, 150), 
("Watch Dogs", "Video Games", 60, 150), 
("Crash Bandicoot", "Video Games", 60, 150), 
("Mario Cart", "Video Games", 60, 150), 
("Mario Party 8", "Video Games", 60, 150), 
("PS4 Pro", "Electronics",399.00 ,200 ),
("PS3", "Electronics",299.00 ,200 ),
("PS2", "Electronics",199.00 ,200 ),
("Playstaion", "Electronics",99.00 ,200 ),
("Game Cube", "Electronics",99.00 ,200 ),
("Atari Classic", "Electronics",99.00 ,200 );

SELECT * FROM bamazon.products;


