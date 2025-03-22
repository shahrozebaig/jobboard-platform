import { MongoClient, MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing MONGODB_URI');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    console.log('Creating new MongoDB connection...');
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect()
      .then(client => {
        console.log('MongoDB connected successfully');
        // Test the connection
        return client.db('jobboard').command({ ping: 1 })
          .then(() => {
            console.log('Database connection test successful');
            return client;
          })
          .catch(error => {
            console.error('Database connection test failed:', error);
            throw error;
          });
      })
      .catch(error => {
        console.error('MongoDB connection error:', error);
        throw error;
      });
  }
  clientPromise = globalWithMongo._mongoClientPromise!;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise; 