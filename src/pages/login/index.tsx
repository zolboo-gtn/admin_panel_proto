import type { NextPageWithLayout } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { CustomInput } from "components";

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center px-10 py-16 bg-white border space-y-8">
        <LoginForm />
        <Link href="/">
          <a className="text-xs leading-none underline">
            パスワードをお忘れの方
          </a>
        </Link>
      </div>
    </div>
  );
};

LoginPage.getLayout = (page) => {
  return page;
};

export default LoginPage;

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col">
      <CustomInput label="ユーザー名" tag="userName" />
      <CustomInput
        className="mt-3"
        label="パスワード"
        tag="password"
        type="password"
      />
      <button className="w-72 mt-6 py-4 bg-red-700 text-white leading-none">
        ログイン
      </button>
    </div>
  );
};
