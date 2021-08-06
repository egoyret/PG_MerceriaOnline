const server = require('./src/app');
const { conn } = require('./src/db');
require('dotenv').config();

var port = process.env.PORT || 3001 ;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); 
  });
});
