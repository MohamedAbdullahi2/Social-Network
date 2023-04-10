
const { connect, connection } = require('mongoose');

// mongoose.set('strictQuery', false);

// connect('mongodb://localhost:27017', {
//   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// });

connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
//   useUnifiedTopology: true,
});



module.exports = connection;