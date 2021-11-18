import type { NextPageWithLayout } from "next";
import React from "react";

import { PageLayout } from "layouts/main";

const Home: NextPageWithLayout = () => {
  return <div className="">Home</div>;
};

Home.getLayout = (page) => {
  return <PageLayout>{page} </PageLayout>;
};

export default Home;
