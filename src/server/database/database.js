import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: 'src/server/database/database.db',
    driver: sqlite3.Database
  });
};

export async function createTable() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY,
                                                    username TEXT NOT NULL,
                                                    password TEXT NOT NULL,
                                                    email TEXT NOT NULL,
                                                    input_id INTEGER,
                                                    recommended_id INTEGER)`);
    });
};

export async function populateUser() {
    const query = "INSERT INTO User (username, password, email) VALUES (?, ?, ?)";
    openDb().then(db => {
        db.run(query, ["admin", "admin123", "admin@gmail.com"]);
        db.run(query, ["random", "random169", "randomemail@gmail.com"]);
        db.run(query, ["general", "general666", "general1969@gmail.com"]);
    });
};

export async function createUser(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("INSERT INTO User (username, password, email) VALUES (?, ?, ?)", [user.username, user.password, user.email]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function readUser(req, res) {
    openDb().then(db => {
        db.get("SELECT * FROM User WHERE id = ?", [req.body.id]).then(user => res.json(user));
    });
};

export async function validateLogin(req, res) {
    openDb().then(db => {
        db.get("SELECT * FROM User WHERE username = ? AND password = ?", [req.body.username, req.body.password])
        .then(user => {
            // User was found and exists with this username and matching password
            if (user) {
                res.json({"authenticated": true, "id": user.id});
            } else {
                res.json({"authenticated": false});
            }
        });
    });
};

export async function updateUsername(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("UPDATE User SET username = ? WHERE username = ?", [user.newusername, user.oldusername]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function updatePassword(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("UPDATE User SET password = ? WHERE username = ?", [user.password, user.username]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function updateEmail(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("UPDATE User SET email = ? WHERE username = ?", [user.email, user.username]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function deleteUser(req, res) {
    openDb().then(db => {
        db.get("DELETE FROM User WHERE username = ?", [req.body.username]).then(res => res);
    });
    res.json({
        "statusCode": 200
    });
};
