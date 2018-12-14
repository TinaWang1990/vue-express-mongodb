const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const posts = require('./server/routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

