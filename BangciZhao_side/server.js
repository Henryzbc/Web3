import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const path = require('path');
const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname, '')))


app.listen(8080, () => {
    console.log('Server is running on port 8080.');
});