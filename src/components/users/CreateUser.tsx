"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type CreateUserProps = {};

const CreateUser = (props: CreateUserProps): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const router = useRouter();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await fetch(`/api/users`, {
      method: "POST",
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

      <button type="submit">Create User</button>
    </form>
  );
};

export { CreateUser };
