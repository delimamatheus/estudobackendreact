import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "./database";
import routes from "./routes";
import '../config/env.ts'

const app = express()

app.use(express.json())
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError){
        return response.status(err.statusCode).json({ status: 'error', message: err.message })
    }

    return response.status(500).json({ status: 'error', message: "Internal server error" })
})

app.listen(3000)