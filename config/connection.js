const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

// returns queried documents after update is applied
// not needed because I manually set { new: true } in controllers
// mongoose.set('returnOriginal', false);

mongoose.set('debug', true);

module.exports = mongoose.connection;