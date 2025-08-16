const app = require('./index');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  mongoose.connect(uri).then(() => console.log('MongoDB connected.'));
});