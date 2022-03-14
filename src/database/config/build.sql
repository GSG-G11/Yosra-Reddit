BEGIN;

DROP TABLE  IF EXISTS users ,posts CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY ,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password text NOT NULL
);

CREATE TABLE blogs (
    id serial PRIMARY KEY ,
    title VARCHAR(50) ,
    content  text NOT NULL,
    post_image text ,
    post_time timestamp,
    user_id INT	REFERENCES users(id) ON UPDATE CASCADE
);

COMMIT ;
