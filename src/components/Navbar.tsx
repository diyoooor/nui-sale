import {
  HomeIcon,
  ClockIcon,
  UserCircleIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

const __menu__ = [
  {
    label: "หน้าหลัก",
    to: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "ตะกร้า",
    to: "/my-cart",
    icon: <ShoppingCartIcon className="w-6 h-6" />,
  },
  {
    label: "ประวัติ",
    to: "/history",
    icon: <ClockIcon className="w-6 h-6" />,
  },
  {
    label: "สอบถาม",
    to: "/contacts",
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
  },
  {
    label: "โปรไฟล์",
    to: "/profile",
    icon: <UserCircleIcon className="w-6 h-6" />,
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  const getNavLinkClass = (path: string) => {
    return router.pathname === path
      ? "text-white bg-green-900 "
      : "text-green-300 hover:text-white ";
  };

  return (
    <nav
      className="fixed z-50 bottom-2 bg-green-700 rounded-full shadow-lg w-11/12 mx-4
    "
    >
      <div className="flex justify-around  items-center">
        <ul className="flex justify-around w-full ">
          {__menu__.map((page) => {
            return (
              <li key={page.label} className=" flex justify-center items-cente">
                <Link href={page.to} passHref>
                  <button
                    className={`flex flex-col items-center w-16 h-16 rounded-full p-2 transition-all duration-500 ease-linear ${getNavLinkClass(
                      page.to
                    )}`}
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
