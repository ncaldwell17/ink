import { postgres } from './utils/database';
import "reflect-metadata";
import express, {Express} from 'express';
const cors = require('cors');
import {Request, Response} from 'express';
import exampleController from "./api/example.controller";

export const app: Express = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
});

async function startup() {
    try {
        await postgres.initialize();
        await postgres.synchronize();

        app.use(cors({
            origin: 'http://localhost:3000'
        }));

        const routes = [exampleController];

        routes.forEach(route => {
            app.use('/', route);
        });

        app.listen(port, () => {
            console.log(`App listening on http://localhost:${port}`);
        });

    } catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1);
    }
}

void startup();
