import type { NextPageWithLayout } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { FullScreenLoader } from "components";
import { PageLayout } from "layouts/main";

const FeedbackPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { fid } = router.query;

  return <div> {`Feedback #${fid}`}</div>;
};

FeedbackPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default FeedbackPage;
