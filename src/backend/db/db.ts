import {open} from "sqlite";
import sqlite3 from "sqlite3";

export const openConnection = async () => {
    return open({
        filename: `${process.cwd()}/database.db`,
        driver: sqlite3.Database
    })
}