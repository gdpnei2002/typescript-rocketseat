import express, { response } from "express";

const application = express();

application.get("/", (request, response) =>{
    return response.json({message: "hello wolrd"})
})

application.listen(3000);

