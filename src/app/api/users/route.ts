import { getCollection } from "@libs/mongo/utils";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const GET = async () => {
  const collection = await getCollection("users");
  const users = await collection.find({}).toArray();

  return NextResponse.json(users, { status: 200 });
};

const POST = async (req: NextRequest) => {
  const newUser = await req.json();

  const collection = await getCollection("users");
  const result = await collection.insertOne(newUser);

  return NextResponse.json(result, { status: 200 });
};

export { GET, POST };
