import {
  HomeIcon,
  ClockIcon,
  UserCircleIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

const __menu__ = [
  {
    label: "หน้าหลัก",
    to: "/",
    icon: <HomeIcon className="p-2" />,
  },
  {
    label: "ประวัติ",
    to: "/history",
    icon: <ClockIcon className="p-2" />,
  },
  {
    label: "สอบถาม",
    to: "/contacts",
    icon: <DevicePhoneMobileIcon className="p-2" />,
  },
  {
    label: "โปรไฟล์",
    to: "/profile",
    icon: <UserCircleIcon className="p-2" />,
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  const getNavLinkClass = (path: string) => {
    return router.pathname === path
      ? "text-white p-1 bg-blue-800 rounded-full"
      : "p-2";
  };

  return (
    <nav className="p-1 fixed w-full bottom-0 rounded-full ">
      <div className="bg-blue-900 rounded-full min-h-16 flex flex-col align-middle">
        <ul className="flex justify-around ">
          {__menu__.map((page) => {
            return (
              <li key={page.label}>
                <Link href={page.to} className=" transition-all ">
                  <button
                    className={`${getNavLinkClass(
                      page.to
                    )} text-blue-300 flex flex-col items-center w-20 h-20 `}
                  >
                    {page.icon}
                    <p className="text-xs">{page.label}</p>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
