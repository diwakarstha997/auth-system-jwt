import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    error
        ? console.log("Error:", error.message)
        : console.log(`Server started at PORT:"${PORT}/n http://localhost:${PORT}`);
})
