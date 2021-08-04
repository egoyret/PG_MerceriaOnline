const server = require('./app');
const { conn } = require('./db');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
