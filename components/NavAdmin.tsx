"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { path: "/admin", name: "Dashboard" },
  { path: "/admin/projects", name: "my projects" },
  { path: "/admin/contact", name: "contact" },
  { path: "/", name: "back to home" },
];
const NavAdmin = ({ containerStyles, linkStyles, underlineStyles }: any) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={`${index}-${link.path}`}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavAdmin;
