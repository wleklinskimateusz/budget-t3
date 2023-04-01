import { signIn } from "next-auth/react";

export const LoginPanel: React.FC = () => {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-4 rounded-md p-5 shadow-sm">
      <p className="text-2xl text-primary-content">Welcome To Budget App</p>

      <button
        className="rounded-full bg-secondary px-10 py-3 font-semibold text-secondary-content no-underline transition hover:bg-secondary-hover hover:text-secondary-hover-content"
        onClick={() => void signIn()}
      >
        Sign in
      </button>
    </div>
  );
};
