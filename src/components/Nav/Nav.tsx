import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ReactNode, type FC } from "react";

export const Nav: FC = () => {
  const router = useRouter();
  const { pathname } = router;
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
  const { pathname } = useRouter();
  const isActive = href === pathname;
  return (
    <Link href={href}>
      <li
        className={clsx(
          "hover:text-secondary-text rounded-md  p-2 text-center text-sm transition-all duration-100 hover:bg-secondary",
          { "font-bold": isActive }
        )}
      >
        {children}
      </li>
    </Link>
  );
};
