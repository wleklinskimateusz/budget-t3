import Link from "next/link";
import { type ReactNode, type FC } from "react";

export const Nav: FC = () => {
  return (
    <ul className="w-100 m-2 rounded-md bg-primary p-2 text-primary-content">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/categories">Categories</NavItem>
    </ul>
  );
};

const NavItem: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <li className="hover:text-secondary-text rounded-md p-2 text-center transition-all duration-100 hover:bg-secondary">
      <Link href={href}>{children}</Link>
    </li>
  );
};
