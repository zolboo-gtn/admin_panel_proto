import type { NextPageWithLayout } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { FullScreenLoader } from "components";
import { PageLayout } from "layouts/main";

import { useGetUser } from "./hooks";

const UserPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { uid } = router.query;

  const { user, error } = useGetUser(uid as string);

  if (!user && !error) {
    return <FullScreenLoader />;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }

  return (
    <div>
      <Link href="/">
        <a>{user!.id}</a>
      </Link>
    </div>
  );
};

UserPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default UserPage;
