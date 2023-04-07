"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type UpdateUserProps = {
  id: string;
};

const URL = process.env.NEXT_PUBLIC_BASE_URL;

const UpdateUser = ({ id }: UpdateUserProps): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const router = useRouter();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await fetch(URL + `/api/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, lastName }),
    });

    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="lastName"
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <button type="submit">Update User</button>
    </form>
  );
};

export { UpdateUser };
