import Link from "next/link";
import { ReactNode } from "react";

type UserPageLayoutProps = {
  children: ReactNode;
};

const UserPageLayout = ({ children }: UserPageLayoutProps): JSX.Element => {
  return (
    <div>
      <div>{children}</div>
      <Link href="/users">Back to Users</Link>
    </div>
  );
};

export default UserPageLayout;
