DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY, 
    title varchar(250) NOT NULL,
    name varchar(250) NOT NULL,
    post VARCHAR NOT NULL 
);
