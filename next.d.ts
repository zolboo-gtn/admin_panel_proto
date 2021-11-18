import type { NextPage } from "next";
import type { Router } from "next/dist/client/router";
import type { CompletePrivateRouteInfo } from "next/dist/shared/lib/router/router";

declare module "next" {
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (component: JSX.Element) => JSX.Element | void;
  };
}

declare module "next/app" {
  export declare type AppProps = Pick<
    CompletePrivateRouteInfo,
    "Component" | "err"
  > & {
    router: Router;
  } & Record<string, any> & {
      Component: {
        getLayout?: (page: JSX.Element) => JSX.Element;
      };
    };
}
