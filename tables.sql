CREATE TABLE vehicles(
id SERIAL PRIMARY KEY,
make VARCHAR(255),
model VARCHAR(255),
color VARCHAR(255),
manu_year INT,
class VARCHAR(255),
doors INT,
price INT,
img VARCHAR(255)
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
user_name VARCHAR(255),
tele VARCHAR(12),
passwd VARCHAR(255)
);


INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Dodge', 'Dart','Orange', 2019, 'Coupe', 2, 22100,'2019-Dart');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Dodge', 'Challenger','Black', 2020, 'Coupe', 2, 41000, '2020_challenger');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Dodge', 'Ram 1500','Blue', 2004, 'P/U', 2, 2100, '2004_Ram1500');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Volvo', '240','Beige', 1990, 'Sedan', 4, 1900, '1990_Volvo_240');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Fiat', '500','Red', 2004, 'Coupe', 2, 3100, '2004_FIAT_500');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Honda', 'Civic','Purple', 2010, 'Sedan', 4, 3800, '2010_Honda_Civic');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Chevy', 'S10','Black', 2001, 'P/U', 2, 1700, '2001_Chevy_S10');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Cadillac', 'CTS', 'Grey', 2014, 'Coupe', 2, 13999, '2014_Cadillac_CTS');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Jeep', 'CJ7','Red', 1979, 'Coupe', 2, 850, '1979_Jeep_CJ7');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Jeep', 'CJ7','Red', 1985, 'Coupe', 2, 4850, '1985_Jeep_CJ7');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Cadillac', 'CTS', 'Grey', 2015, 'Coupe', 2, 15999, '2015_Cadillac_CTS');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Cadillac', 'Fleetwood', 'Grey', 1982, 'Sedan', 4, 7999, '1982_Cadillac_Fleetwood');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Honda', 'Pilot','Blue', 2010, 'Sedan', 4, 3800, '2010_Honda_Pilot');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Chrysler', '300','Beige', 2010, 'Sedan', 4, 3800, '2010_Chrysler_300');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Chevy', 'Camaro','Black', 2010, 'Coupe', 2, 12700, '2010_Chevy_Camaro');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Chevy', 'Silverado','White', 2015, 'P/U', 2, 8700, '2015_Chevy_Silverado');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Ford', 'Taurus','Maroon', 2011, 'Coupe', 2, 6850, '2011_Ford_Taurus');
INSERT INTO Vehicles (make, model, color, manu_year, class, doors, price, img) VALUES('Ford', 'Fiesta','Red', 1999, 'Coupe', 2, 850, '1999_Ford_Fiesta');
