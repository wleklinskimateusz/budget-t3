import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginPanel } from "~/components/LoginPanel";

export default function Login() {
  useRedirectIfLoggedIn();
  return (
    <div className="m-auto flex h-screen w-screen flex-col items-center justify-center bg-bg">
      <LoginPanel />
    </div>
  );
}

const useRedirectIfLoggedIn = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (sessionData) {
      void router.push("/");
    }
  }, [sessionData, router]);
};
