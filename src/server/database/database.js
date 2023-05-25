import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: 'src/database/database.db',
    driver: sqlite3.Database
  });
};

export async function createTable() {
    openDb().then(db => {
        db.exec("CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT)");
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

export async function updateUser(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run("UPDATE User SET username = ?, password = ?, email = ? WHERE id = ?", [user.username, user.password, user.email, user.id]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function deleteUser(req, res) {
    openDb().then(db => {
        db.get("DELETE FROM User WHERE id = ?", [req.body.id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    });
};
