import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { signIn, useSession, SessionProvider } from "next-auth/react";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        {getLayout(
          <div className="bg-gray-50">
            <Component {...pageProps} />
          </div>
        )}
      </AuthWrapper>
    </SessionProvider>
  );
};

export default MyApp;

const AuthWrapper: React.FC = ({ children }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      signIn("cognito");
    },
  });

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      LOADING
    </div>
  );
};

// users
// users/id
// users/update/id

// profiles
// profiles/id
// profiles/update/id

// ukeire dantai
// list
// id
// create
// update

// kanri dantai
// list
// id
// create
// update

// tags/
// tags/id
// tags/update/id

// surveys
// surveys/id

// feedbacks
// feedbacks/id

// register
// info --> login/register? || login --> info
// login || register || login && register

// user info update --> history

// tag static || dynamic
// user dantai view history

// dantai kanri kinou | kanran kinou

// dantai update history not hissu nozomashii

// scenario specific menu manual switch (dynamic choices)

// zoom + color blind switch

// portal survey (popup), ukeire dantai survey page
