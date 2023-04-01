import clsx from "clsx";
import { type FC } from "react";

export const variants = ["primary", "secondary", "danger"] as const;
export const sizes = ["small", "medium", "large"] as const;

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: (typeof variants)[number];
  size?: (typeof sizes)[number];
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  size = "medium",
}) => {
  return (
    <button
      className={clsx("rounded-full  font-semibold  no-underline transition ", {
        "bg-primary text-primary-content hover:bg-primary-hover hover:text-primary-hover-content":
          variant === "primary",
        "bg-secondary text-secondary-content hover:bg-secondary-hover hover:text-secondary-hover-content":
          variant === "secondary",
        "bg-danger text-danger-content hover:bg-danger-hover hover:text-danger-hover-content":
          variant === "danger",
        "px-4 py-1 text-sm": size === "small",
        "text-md px-8 py-2": size === "medium",
        "px-10 py-3 text-lg": size === "large",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
