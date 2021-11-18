import type { NextPageWithLayout } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { FullScreenLoader } from "components";
import { PageLayout } from "layouts/main";

const SurveyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { sid } = router.query;

  return <div> {`Survey #${sid}`}</div>;
};

SurveyPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default SurveyPage;
