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

export async function createUser(user) {
    openDb().then(db => {
        db.run("INSERT INTO User (username, password, email) VALUES (?, ?, ?)", [user.username, user.password, user.email]);
    });
};

export async function updateUser(user) {
    openDb().then(db => {
        db.run("UPDATE User SET username = ?, password = ?, email = ? WHERE id = ?", [user.username, user.password, user.email, user.id]);
    });
};
