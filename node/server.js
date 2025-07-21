const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Node in Docker!'));

app.listen(80, () => console.log('Server running on port 8000'));

