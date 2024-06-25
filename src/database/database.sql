CREATE TABLE users (
  ID SERIAL PRIMARY KEY, 
  username VARCHAR(32),
  link VARCHAR(32),
  count INT,
  perClick INT,
  perSecond INT
);
