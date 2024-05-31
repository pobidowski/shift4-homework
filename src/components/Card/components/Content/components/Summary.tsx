// Helpers
import { formatAmount, formatDate } from "~/helpers";

type SummaryProps = {
  amount: number;
  untilDate: Date;
};

export const Summary: React.FC<SummaryProps> = ({ amount, untilDate }) => (
  <div className="py-6 px-4 bg-background rounded-[0.3125rem] text-xs leading-[140%] text-center sm:text-left">
    You will be sending{" "}
    <span className="font-semibold">{formatAmount(amount)}</span> every month,
    until <span className="font-semibold">{formatDate(untilDate)}</span>. Thank
    you!
  </div>
);
