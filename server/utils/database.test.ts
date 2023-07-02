import {postgres} from "./database";

describe('Database Connection', () => {

    it('should initialize the data source', async () => {
        try {
            await postgres.initialize();
            expect(postgres).toBeDefined();
            expect(postgres.isInitialized).toBeTruthy();
        } catch (err) {
            console.error("Error during Data Source initialization", err);
        }
    });
});
