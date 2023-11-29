const db = require("../db/dbConfig.js");

const getAllStocks = async () => {
    try {
            const allStocks = await db.any("SELECT * FROM stocks");
            return allStocks
    } catch(err) {
        return err
    }
};

const getOneStock = async (id) => {
    try {
        const oneStock = await db.one("SELECT * FROM stocks WHERE id=$1", id)
        return oneStock
    } catch (err) {
        return err
    }
};

const createStock = async (stock) => {
    try {
        const createdStock = await db.one("INSERT INTO stocks (name,price,quantity,purchaseDate, optionType, expiryDate, image) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [stock.name, stock.price, stock.quantity, stock.purchaseDate, stock.optionType, stock.expiryDate, stock.image])
        return createdStock
    } catch (err) {
        return err
    }
};

const deleteStock = async (id) => {
    try {
        const deletedStock = await db.one(
            "DELETE from stocks WHERE id=$1 RETURNING *",
            id
        )
        return deletedStock
    } catch(err) {
        return err
    }
};

const updateStock = async (id, stock) => {
    try {
        const { name, price, quantity, purchaseDate, optionType, expiryDate, image } = stock;
        const updatedStock = await db.one(
            "UPDATE stocks SET name=$1, price=$2, quantity=$3, purchaseDate=$4, optionType=$5, expiryDate=$6, image=$7 WHERE id=$8 RETURNING *",
            [name, price, quantity, purchaseDate, optionType, expiryDate, image, id]
        );
        return updatedStock;
    } catch (err) {
        return err;
    }
};


module.exports = {
    getAllStocks,
    getOneStock,
    createStock,
    deleteStock,
    updateStock
}