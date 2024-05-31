import { twMerge } from "tailwind-merge";

type LabelProps = React.AllHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => (
  <label
    className={twMerge(
      "font-medium text-sm text-midnightGrey leading-[1.125rem]",
      className,
    )}
    {...props}
  >
    {children}
  </label>
);
