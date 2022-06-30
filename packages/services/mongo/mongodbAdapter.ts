import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';

import { decryptedMongoDBCert, decryptedMongoDBKey } from './cert';

const { VERCEL_ENV, MONGODB_URI } = process.env;

if (MONGODB_URI === undefined) {
  throw new Error('Missing MONGODB_URI environment variable');
}

// Setup Mongo client with decrypted data
let client: MongoClient;
let clientPromise: Promise<MongoClient>;
const options: MongoClientOptions = {
  ssl: true,
  cert: decryptedMongoDBCert,
  key: decryptedMongoDBKey,
  serverApi: ServerApiVersion.v1,
};

if (VERCEL_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
}

export const mongoClient = new MongoClient(MONGODB_URI, options);

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
