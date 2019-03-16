CREATE TABLE vehicles(
id SERIAL PRIMARY KEY,
make VARCHAR(255),
model VARCHAR(255),
color VARCHAR(255),
manu_year INT(255),
class VARCHAR(255),
doors INT(255),
price INT(255)
),

INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Dodge', 'Ram 1500','Blue', '2004', 'P/U', '2', '$2100.00');









)

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
user_name VARCHAR(255),
tele INT(255),
passwd VARCHAR(255),
),