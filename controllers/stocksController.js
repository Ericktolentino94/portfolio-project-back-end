const express = require("express");
const {getAllStocks, getOneStock, createStock, deleteStock, updateStock} = require("../queries/stocks");

const stocks = express.Router();

stocks.get("/", async (req, res) => {
    const allStocks = await getAllStocks();
    try {
        if(allStocks[0]) {
            res.status(200).json({success:true, data:{ payload: allStocks } });
        }
    } catch(err) {
        console.log(err)
        res.status(404).json({success:false, data:{error: err}});
    }
});

stocks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneStock = await getOneStock(id);
    try {
    if (oneStock) {
        res.json(oneStock);
    } 
} catch(err) {
        res.status(404).json({success:false, data:{error: err}});
    }
});

stocks.post("/", async (req, res) => {
    try {
        const createdStock = await createStock(req.body)
        res.json(createdStock)
    } catch(err) {
        res.status(404).json({success:false, data:{error: err}});
    }
});

stocks.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedStock = await deleteStock(id);
        if(deletedStock) {
            res.status(200).json({success: true, payload: {data: deletedStock}})
        }
    } catch (err) {
        res.status(404).json({success: false, data:{error: err}})
    }
});

stocks.put("/:id", async (req, res)=> {
    try {
    const { id } = req.params;
    const updatedStock = await updateStock(id, req.body);
    if(updatedStock.id) {
        res.status(200).json(updateStock);
    }
    } catch(err) {
        res.status(404).json({success:false, data:{error: err}})
    }

});

module.exports = stocks;