// Helpers
import { formatAmount } from "~/helpers";

type TotalAmountProps = {
  totalAmount: number;
};

export const TotalAmount: React.FC<TotalAmountProps> = ({ totalAmount }) => (
  <div className="px-4 pt-6 sm:pt-0 flex items-center justify-between">
    <span className="font-medium sm:text-xl">Total amount</span>
    <span className="font-bold font-inter text-purpleGray text-2xl sm:text-[2rem] leading-[120%]">
      {formatAmount(totalAmount)}
    </span>
  </div>
);
