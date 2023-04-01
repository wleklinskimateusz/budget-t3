import { forwardRef } from "react";

type InputProps = {
  placeholder?: string;
  onEnter?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, onEnter },
  ref
) {
  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) =>
    key === "Enter" && onEnter?.();

  return (
    <input
      ref={ref}
      className="m-2 w-full rounded-md bg-primary px-2 py-1 text-primary-content"
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
    />
  );
});
