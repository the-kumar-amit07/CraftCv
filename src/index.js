import {app} from "./app.js";
import connectDB from "./DB/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
});

connectDB()
    .then(() => { 
        app.on("error", (error) => { console.log(`Connection to Server Failed:`,error);
        })
        app.listen(process.env.PORT || 5000,()=>{console.log(`Server is running at PORT::${process.env.PORT}`)})
        })
    .catch(error => console.error(`MONGODB-CONNECTION-ERROR::`,error))