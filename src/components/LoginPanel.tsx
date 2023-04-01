import { signIn } from "next-auth/react";
import { Button } from "./Button";

export const LoginPanel: React.FC = () => {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-4 rounded-md p-5 ">
      <p className="text-2xl text-bg-content">Welcome To Budget App</p>

      <Button variant="primary" onClick={() => void signIn()}>
        Sign in
      </Button>
    </div>
  );
};
