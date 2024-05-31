import BaseCurrencyInput from "react-currency-input-field";

type CurrencyInputProps = {
  allowDecimals?: boolean;
  allowNegative?: boolean;
  currencyIcon: React.ReactNode;
  decimalLimit?: number;
  disabled?: boolean;
  onValueChange?: (
    value?: string,
    name?: string,
    values?: { float: number | null; formatted: string; value: string },
  ) => void;
  placeholder?: string;
  id: string;
};

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  allowDecimals = true,
  allowNegative = false,
  currencyIcon,
  decimalLimit = 2,
  disabled = false,
  id,
  onValueChange,
  placeholder = "0.00",
}) => (
  <div className="relative">
    <div className="absolute top-1/2 -translate-y-1/2 left-4">
      {currencyIcon}
    </div>
    <BaseCurrencyInput
      allowDecimals={allowDecimals}
      allowNegativeValue={allowNegative}
      className="w-full font-rubik text-2xl leading-7 font-medium text-purpleGray outline-none focus:outline-none transition-all focus:border-midnightPurple py-[0.9375rem] pr-2 pl-12 border border-stroke rounded"
      decimalsLimit={decimalLimit}
      decimalSeparator="."
      groupSeparator=","
      disabled={disabled}
      id={id}
      onValueChange={onValueChange}
      placeholder={placeholder}
    />
  </div>
);
