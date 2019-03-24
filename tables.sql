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
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Volvo', '240','Beige', 1990, 'Sedan', 4, 1900);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Fiat', '500','Red', 2004, 'Coupe', 2, 3100);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Honda', 'Civic','Purple', 2010, 'Sedan', 4, 3800);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Chevy', 'S10','Black', 2001, 'P/U', 2, 1700);
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price) VALUES('Ford', 'Fiesta','Red', 1999, 'coupe', 2, 850);

