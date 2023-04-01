import clsx from "clsx";
import { type FC } from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
};

export const Button: FC<ButtonProps> = ({ onClick, variant, children }) => {
  return (
    <button
      className={clsx(
        "rounded-full  px-10 py-3 font-semibold  no-underline transition ",
        {
          "bg-primary text-primary-content hover:bg-primary-hover hover:text-primary-hover-content":
            variant === "primary",
          "bg-secondary text-secondary-content hover:bg-secondary-hover hover:text-secondary-hover-content":
            variant === "secondary",
          "bg-danger text-danger-content hover:bg-danger-hover hover:text-danger-hover-content":
            variant === "danger",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
