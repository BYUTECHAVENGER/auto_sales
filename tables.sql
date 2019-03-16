CREATE TABLE vehicles(
id SERIAL PRIMARY KEY,
make VARCHAR(255),
model VARCHAR(255),
color VARCHAR(255),
manu_year INT,
class VARCHAR(255),
doors INT,
price INT
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
user_name VARCHAR(255),
tele VARCHAR(12),
passwd VARCHAR(255)
);


INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Dodge', 'Dart','Orange', 2019, 'Coupe', 2, 22100);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Dodge', 'Challenger','Black', 2020, 'Coupe', 2, 41000);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Dodge', 'Ram 1500','Blue', 2004, 'P/U', 2, 2100);


