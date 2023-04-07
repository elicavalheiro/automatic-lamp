import { db } from "./db";

const getCollection = async (collection: string) => {
  return (await db).collection(collection);
};

export { getCollection };
