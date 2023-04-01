import type { Session } from "next-auth";
import type { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { signOut } from "next-auth/react";

export const Profile: FC<Pick<NonNullable<Session>, "user">> = ({
  user: { name, image },
}) => (
  <div
    tabIndex={0}
    className="group absolute right-16 top-5 col-span-2 cursor-pointer"
  >
    <div className="relative flex flex-col items-center">
      <div className="overflow-hidden rounded-full shadow-lg">
        <Image
          src={image ?? ""}
          width={40}
          height={40}
          alt={name ?? "user photo"}
        />
      </div>
      <Settings name={name ?? ""} />
    </div>
  </div>
);

const Settings: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="absolute top-14 m-2 flex w-auto min-w-max origin-top scale-0 flex-col items-center rounded-md bg-primary p-2 text-primary-content  shadow-md  transition-all duration-100 group-focus-within:scale-100">
      <p>{name}</p>
      <Button variant="danger" size={"small"} onClick={() => void signOut()}>
        Sign Out
      </Button>
    </div>
  );
};
