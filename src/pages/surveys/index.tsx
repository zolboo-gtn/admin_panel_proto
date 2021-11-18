import type { NextPageWithLayout } from "next";
import React from "react";

import { PageLayout } from "layouts/main";

const SurveysPage: NextPageWithLayout = () => {
  return <div>Surveys page</div>;
};

SurveysPage.getLayout = (page) => {
  return <PageLayout>{page} </PageLayout>;
};

export default SurveysPage;
