import type { Session } from "next-auth";
import type { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { signOut } from "next-auth/react";

export const Profile: FC<Pick<NonNullable<Session>, "user">> = ({
  user: { name, image },
}) => (
  <div className="flex flex-col items-center">
    {image && (
      <div className="overflow-hidden rounded-full">
        <Image src={image} width={50} height={50} alt={name ?? "user photo"} />
      </div>
    )}
    {name}
    <Button size={"small"} onClick={() => void signOut()}>
      Sign Out
    </Button>
  </div>
);
