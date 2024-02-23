import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();
const port = process.env.PORT || 4400;

// create server
app.listen(port, () => {
    console.log(`Server is connected with port ${port}`);
    connectDB();
});


