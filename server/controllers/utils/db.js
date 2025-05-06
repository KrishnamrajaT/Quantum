// api/db.js or lib/db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Important for serverless
  socketTimeoutMS: 30000
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to environment variables');
}

// Development vs Production handling
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;