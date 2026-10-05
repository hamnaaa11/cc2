CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    age INTEGER
);

INSERT INTO users (name, email, age)
VALUES ('Ali', 'ali@gmail.com', 20);

INSERT INTO users (name, email, age)
VALUES ('Ahmed', 'ahmed@gmail.com', 22);

INSERT INTO users (name, email, age)
VALUES ('Sara', 'sara@gmail.com', 21);
