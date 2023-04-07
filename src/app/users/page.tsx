import { CreateUser } from "@components/users/CreateUser";
import type { ObjectId } from "mongodb";
import Link from "next/link";

const URL = process.env.NEXT_PUBLIC_BASE_URL || "";

type TUser = {
  _id: ObjectId;
  name: string;
  lastName: string;
};

const fetchUsers = async <T,>(): Promise<T> => {
  const response = await fetch(`${URL}/api/users`, {
    cache: "no-cache",
  });
  return await response.json();
};

type PageProps = {};

const Page = async (props: PageProps): Promise<JSX.Element> => {
  const users = await fetchUsers<TUser[]>();

  return (
    <div>
      <h3>User List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id.toString()}>
            <Link href={`/users/${user._id.toString()}`}>
              {user.name} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <h3>Create User:</h3>
        <CreateUser />
      </div>
    </div>
  );
};

export default Page;
