type FormControlProps = {
  children: React.ReactNode;
};

export const FormControl: React.FC<FormControlProps> = ({ children }) => (
  <div className="flex flex-col gap-1.5">{children}</div>
);
