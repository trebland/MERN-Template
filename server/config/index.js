// Replace information with your username and password for the mongodb
// as well as the name for the database you wish to write into
const dbuser = 'XXXXXXXXXX';
const dbpassword = 'XXXXXXXXXX';
const dbname = 'XXXXXXXXXX';

// Sample URL for MongoDB Atlas
const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-sm33f.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;