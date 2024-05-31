import { twMerge } from "tailwind-merge";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => (
  <button
    className={twMerge(
      "py-[0.8125rem] px-6 rounded-[0.3125rem] border border-midnightPurple font-semibold transition-all",
      className,
      variant === "primary" &&
        "bg-midnightPurple text-white hover:bg-midnightPurpleLight hover:border-midnightPurpleLight active:bg-midnightPurpleDark active:border-midnightPurpleDark",
      variant === "secondary" &&
        "text-purpleGray hover:bg-purple/10 active:bg-purple/25",
    )}
    {...props}
  >
    {children}
  </button>
);
