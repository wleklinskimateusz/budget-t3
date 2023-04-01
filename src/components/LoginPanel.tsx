import clsx from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";
import { LoggedUser } from "./LoggedUser";

export const LoginPanel: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div
      className={clsx(
        "flex w-fit flex-col items-center justify-center gap-4 rounded-md bg-gray-500 p-5 shadow-lg",
        {
          "absolute right-5 top-5 ml-auto": sessionData,
        }
      )}
    >
      {!sessionData && <p className="text-gray-300">Welcome To Budget App</p>}
      <p className="text-md text-center text-white">
        {sessionData && <LoggedUser user={sessionData.user} />}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-gray-100 no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
