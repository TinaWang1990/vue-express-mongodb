const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./server/routes/api/posts');

app.use('/api/posts', posts);

//handle production
if (process.env.NODE_ENV === 'production'){
  //static folder
  app.use(express.static(__dirname+'/public'));

  //handle single page app
  app.get(/.*/, (req, res)=>res.sendFile(__dirname+'/public/index.html'));
}


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

