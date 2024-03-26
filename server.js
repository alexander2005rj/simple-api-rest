const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('./src/routes/index')(app);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; `
        + 'press Ctrl-C to terminate.')
})