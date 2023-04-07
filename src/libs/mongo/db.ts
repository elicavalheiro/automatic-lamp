import { MongoClient } from "mongodb";

const uri = process.env.MONGO_HOST || "";

const client = new MongoClient(uri);

const run = async () => {
  const connection = await client.connect();
  return connection.db(process.env.MONGO_DATABASE);
};

const db = run();

export { db };
