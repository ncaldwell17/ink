import { postgres } from './utils/database';
import "reflect-metadata";
import express, {Express} from 'express';
import {Request, Response} from 'express';

export const app: Express = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
});

async function startup() {
    try {
        await postgres.initialize();
        await postgres.synchronize();

        app.listen(port, () => {
            console.log(`App listening on http://localhost:${port}`);
        });

    } catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1);
    }
}

void startup();
