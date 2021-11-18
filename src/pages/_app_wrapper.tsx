import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface IAppWrapper {
  session?: Session;
}
export const AppWrapper: React.FC<IAppWrapper> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
