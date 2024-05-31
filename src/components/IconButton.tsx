import { twMerge } from "tailwind-merge";

type IconButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: "base" | "lg";
  variant?: "primary" | "secondary";
};

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  size = "base",
  variant = "primary",
  ...props
}) => (
  <button
    className={twMerge(
      "transition-all",
      size === "base" && "rounded-[0.3125rem]",
      size === "lg" && "rounded-[0.625rem] p-2",
      variant === "primary" && "hover:bg-grey-50 active:bg-grey-100",
      variant === "secondary" && "hover:bg-salmonDark",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
