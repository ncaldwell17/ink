import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const postgres = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    entities: ['api/**/*.model.ts'],
    synchronize: true,
});
