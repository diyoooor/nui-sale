import {
  HomeIcon,
  ClockIcon,
  UserCircleIcon,
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
    label: "โปรไฟล์",
    to: "/profile",
    icon: <UserCircleIcon className="w-6 h-6" />,
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  const getNavLinkClass = (path: string) => {
    return router.pathname === path
      ? "bg-white text-black shadow-lg"
      : "text-gray-400 hover:text-white";
  };

  return (
    <nav className="fixed z-50 w-11/12 bottom-4 bg-gray-800 py-2 rounded-3xl shadow-lg mx-4">
      <ul className="flex justify-around px-2">
        {__menu__.map((page) => (
          <li key={page.label} className="w-full flex justify-center">
            <Link
              href={page.to}
              passHref
              className={`flex flex-col items-center py-1 px-4 max-w-15 w-15  rounded-2xl transition-all duration-300 ease-in-out ${getNavLinkClass(
                page.to
              )} `}
            >
              <div>{page.icon}</div>
              <p className="text-sm mt-1">
                <strong>{page.label}</strong>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
