const app = require("./app.js");

require("dotenv").config();
const PORT = process.env.PORT || 8686
app.listen(PORT, () => {
    console.log(`Stocks live on port:${PORT}`)
})