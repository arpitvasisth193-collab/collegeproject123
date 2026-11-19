require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");


const PORT = 5500;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});