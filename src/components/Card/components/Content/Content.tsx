import { useEffect, useState } from "react";

// Components
import { Actions, Donation, Summary, TotalAmount } from "./components";

// Helpers
import { getNextMonthDate, getNumberOfMonths } from "~/helpers";

export const Content: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [untilDate, setUntilDate] = useState<Date>(getNextMonthDate());
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    setTotalAmount(amount * getNumberOfMonths(untilDate));
  }, [amount, untilDate]);

  return (
    <div className="px-6 sm:px-10 py-6 flex flex-col gap-8">
      <Donation
        setAmount={setAmount}
        setUntilDate={setUntilDate}
        untilDate={untilDate}
      />
      <div className="flex flex-col gap-6 mt-2 sm:mt-0 border rounded border-stroke sm:rounded-none sm:border-0">
        <TotalAmount totalAmount={totalAmount} />
        <Summary amount={amount} untilDate={untilDate} />
      </div>
      <Actions />
    </div>
  );
};
