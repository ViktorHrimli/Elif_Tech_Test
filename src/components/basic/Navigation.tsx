import React from "react";

// NEXT
import Link from "next/link";
import { usePathname } from "next/navigation";

// STYLE

import { NavigationComponent } from "./Header.styled";

type NavLink = {
  label: string;
  href: string;
};

type NavLinks = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavLinks) => {
  const pathName = usePathname();

  return (
    <NavigationComponent>
      {navLinks.map((item, id) => (
        <Link
          key={id}
          href={item.href}
          style={{ color: pathName === item.href ? "white" : "black" }}
        >
          {item.label}
        </Link>
      ))}
    </NavigationComponent>
  );
};

export { Navigation };
