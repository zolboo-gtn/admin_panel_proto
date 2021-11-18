import type { NextPageWithLayout } from "next";
import React from "react";

import { PageLayout } from "layouts/main";

const FeedbacksPage: NextPageWithLayout = () => {
  return <div>Feedbacks page</div>;
};

FeedbacksPage.getLayout = (page) => {
  return <PageLayout>{page} </PageLayout>;
};

export default FeedbacksPage;
