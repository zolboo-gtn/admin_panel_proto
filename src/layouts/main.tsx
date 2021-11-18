import Head from "next/head";

import { Sidebar } from "./sidebar";

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{`JUMP_MSF`}</title>
      </Head>
      <div className="grid grid-cols-layout overflow-hidden h-screen">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
