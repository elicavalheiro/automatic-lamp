"use client";

import { useRouter } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

type RemoveUserProps = {
  id: string;
};

const RemoveUser = ({ id }: RemoveUserProps): JSX.Element => {
  const router = useRouter();

  const onRemoveUser = async () => {
    await fetch(`${URL}/api/users/${id}`, {
      method: "DELETE",
    });

    router.push("/users");
    router.refresh();
  };

  return (
    <div>
      <h4>Remove user</h4>
      <button type="button" onClick={onRemoveUser}>
        Remove
      </button>
    </div>
  );
};

export { RemoveUser };
