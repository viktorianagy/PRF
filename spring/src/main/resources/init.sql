DROP TABLE IF EXISTS termekek;
CREATE TABLE termekek(id serial PRIMARY KEY, nev VARCHAR(255), ar INTEGER);
DROP SEQUENCE IF EXISTS hibernate_sequence;
CREATE SEQUENCE hibernate_sequence START 1;

DROP TABLE IF EXISTS tranzakciok;
CREATE TABLE tranzakciok(id PRIMARY KEY, datum DATE, termekid INTEGER, osszeg INTEGER);
