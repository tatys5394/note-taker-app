const router = require('express').Router();
const store = require('../db/store');

class Store {
    read() {
        return readFileAsync("db/db.jason", "utf8");
    }

    write() {
        return writeFileAsync("db/db.jason", JSON.stringy(notes));
    }

    getNotes() {
        return this.read().then((notes) =>
        
        )
    }
}