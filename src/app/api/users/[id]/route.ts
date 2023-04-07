import { getCollection } from "@libs/mongo/utils";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

type TParams = {
  params: {
    id: string;
  };
};

const GET = async (_: NextRequest, { params: { id } }: TParams) => {
  const collection = await getCollection("users");
  const user = await collection.findOne({ _id: new ObjectId(id) });
  return NextResponse.json(user, { status: 200 });
};

const PUT = async (req: NextRequest, { params: { id } }: TParams) => {
  const data = await req.json();

  const collection = await getCollection("users");
  const user = await collection.findOne({ _id: new ObjectId(id) });

  const newData = { ...user, ...data };

  await collection.replaceOne({ _id: new ObjectId(id) }, newData);

  return NextResponse.json(
    { message: `User with id ${id} updated.`, data: newData },
    { status: 200 }
  );
};

const DELETE = async (_: NextRequest, { params: { id } }: TParams) => {
  if (!id)
    return NextResponse.json({ error: "No ID provided." }, { status: 403 });

  const collection = await getCollection("users");
  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json(
    { nessage: `User with id ${id} deleted`, result },
    { status: 200 }
  );
};

export { GET, PUT, DELETE };
