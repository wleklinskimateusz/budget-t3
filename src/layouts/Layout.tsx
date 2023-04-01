import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type FC, type PropsWithChildren } from "react";
import { Nav } from "~/components/Nav";
import { Profile } from "~/components/Profile";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();
  if (!user) return <>{children}</>;
  if (router.pathname === "/login") {
    return <>{children}</>;
  }
  return (
    <div className="grid h-screen w-screen grid-cols-12 bg-bg text-bg-content">
      <div className="col-span-2">
        <Nav />
      </div>
      <main className="col-span-10">
        <Profile user={user} />
        {children}
      </main>
    </div>
  );
};
