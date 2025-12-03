import dotenv from 'dotenv';
import { createServer } from 'http-server';

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8080;

const server = createServer({
    root: './pages/static',
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});