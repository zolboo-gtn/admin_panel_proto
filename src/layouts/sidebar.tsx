import {
  ChatAltIcon,
  ChatAlt2Icon,
  HomeIcon,
  OfficeBuildingIcon,
  PresentationChartBarIcon,
  UserIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

export const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between bg-gray-700">
      <div>
        {items.map(({ href, icon, label }, index) => {
          const isCurrentPath =
            href === "/"
              ? router.pathname === href
              : router.pathname.startsWith(href);
          return (
            <SidebarItem
              key={`sidebar-item-${index}`}
              href={href}
              icon={icon}
              isCurrentPath={isCurrentPath}
              label={label}
            />
          );
        })}
      </div>
      <SidebarItem
        key={`sidebar-item-profile`}
        href="/profile"
        icon={<UserCircleIcon className="w-5 h-5" />}
        label="ゾルボー"
      />
      <div
        onClick={() =>
          signOut({ callbackUrl: "http://localhost:3000/api/logout" })
        }
      >
        logout
      </div>
    </div>
  );
};

const items: ISidebarItem[] = [
  {
    href: "/",
    icon: <HomeIcon className="h-5 w-5" />,
    label: "ホーム",
  },
  {
    href: "/users",
    icon: <UserGroupIcon className="h-5 w-5" />,
    label: "ユーザー",
  },
  {
    href: "/surveys",
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
    label: "定点調査",
  },
  {
    href: "/feedbacks",
    icon: <ChatAltIcon className="h-5 w-5" />,
    label: "フィードバック",
  },
  {
    href: "/test",
    icon: <ChatAlt2Icon className="h-5 w-5" />,
    label: "相談履歴",
  },
  {
    href: "/test",
    icon: <OfficeBuildingIcon className="h-5 w-5" />,
    label: "団体企業",
  },
  {
    href: "/test",
    icon: <UserIcon className="h-5 w-5" />,
    label: "アカウント",
  },
];

interface ISidebarItem {
  href: string;
  icon: JSX.Element;
  isCurrentPath?: boolean;
  label: string;
}
const SidebarItem: React.FC<ISidebarItem> = ({
  href,
  icon,
  isCurrentPath,
  label,
}) => {
  return (
    <div
      className={`aspect-w-1 aspect-h-1 bg-white ${
        isCurrentPath ? "bg-opacity-5" : "bg-opacity-0"
      } hover:bg-opacity-10 active:bg-opacity-20`}
    >
      <Link href={href}>
        <a className="flex flex-col space-y-2 justify-center items-center">
          <div className="flex justify-center items-center w-9 h-9 bg-white bg-opacity-20 rounded-full text-white">
            {icon}
          </div>
          <span className="text-white text-2xs leading-none">{label}</span>
        </a>
      </Link>
    </div>
  );
};
