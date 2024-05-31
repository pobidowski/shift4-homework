import { CurrencyInput, FormControl, Label } from "~/components/Form";
import { DateSwitcher } from "~/components/Form/DateSwitcher.tsx";

type DonationProps = {
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setUntilDate: React.Dispatch<React.SetStateAction<Date>>;
  untilDate: Date;
};

export const Donation: React.FC<DonationProps> = ({
  setAmount,
  setUntilDate,
  untilDate,
}) => (
  <div className="grid sm:grid-cols-2 items-center gap-4 sm:gap-6">
    <FormControl>
      <Label htmlFor="amount">I can donate</Label>
      <CurrencyInput
        currencyIcon={<img src="/dollar.svg" alt="Dollar" />}
        id="amount"
        onValueChange={(_1, _2, values) => setAmount(values?.float ?? 0)}
      />
    </FormControl>
    <FormControl>
      <Label>Every month until</Label>
      <DateSwitcher onValueChange={setUntilDate} value={untilDate} />
    </FormControl>
  </div>
);
