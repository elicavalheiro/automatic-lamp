import { RemoveUser } from "@components/users/RemoveUser";
import { UpdateUser } from "@components/users/UpdateUser";
import type { ObjectId } from "mongodb";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchUser = async <T,>({ id }: { id: string }): Promise<T> => {
  const response = await fetch(`${URL}/api/users/${id}`, { cache: "no-cache" });
  return await response.json();
};

type PageProps = {
  params: {
    id: string;
  };
};

type TUser = {
  _id: ObjectId;
  name: string;
  lastName: string;
};

const Page = async ({ params }: PageProps): Promise<JSX.Element> => {
  const user = await fetchUser<TUser>({ id: params.id });

  return (
    <div>
      <h4>User:</h4>
      <div>
        <p>
          {user.name} {user.lastName}
        </p>
        <div style={{ marginBottom: "30px" }}>
          <UpdateUser id={params.id} />
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <RemoveUser id={params.id} />
      </div>
    </div>
  );
};

export default Page;
