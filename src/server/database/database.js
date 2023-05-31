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
        db.exec("CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT)");
        // TODO create some generic users + admin for when the User table is created
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
        db.get("SELECT * FROM User WHERE username = ?", [req.body.username]).then(user => res.json(user));
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
