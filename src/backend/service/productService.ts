import {openConnection} from "@/backend/db/db";
import {Lang, Product} from "@/common/types";
import {getDictionary} from "@/common/dictionaries";

const fetchProducts = async (lang: Lang) => {
    const db = await openConnection();
    const products = await db.all<Product[]>("SELECT rowid, * FROM products");
    const dict = await getDictionary(lang);
    return products.map(product => ({...product, title: dict[`product.${product.title}` as keyof typeof dict]}))
}

const addProduct = async (title: string, price: number) => {
    const db = await openConnection();
    return db.run('INSERT INTO products (title, price) VALUES (?, ?)',
        title, price);
}

const createProductTable = async () => {
    const db = await openConnection();
    await db.exec('CREATE TABLE products (title TEXT, price FLOAT)')
}

export {
    fetchProducts,
}