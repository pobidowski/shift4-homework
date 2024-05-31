// Components
import { IconButton } from "~/components";

// Helpers
import { formatDate, getNextMonthDate, getPreviousMonthDate } from "~/helpers";

type DateSwitcherProps = {
  onValueChange: (value: Date) => void;
  value: Date;
};

export const DateSwitcher: React.FC<DateSwitcherProps> = ({
  onValueChange,
  value,
}) => (
  <div className="py-[0.6875rem] px-2 border border-stroke rounded flex gap-4 items-center">
    <IconButton
      onClick={() => {
        const previousDate = getPreviousMonthDate(value);
        const now = new Date();

        if (
          previousDate.getMonth() === now.getMonth() &&
          previousDate.getFullYear() === now.getFullYear()
        ) {
          return;
        }

        onValueChange(previousDate);
      }}
    >
      <img src="/chevronLeft.svg" alt="Previous" />
    </IconButton>
    <div className="flex-1 flex flex-col items-center text-purpleGray">
      <span className="font-rubik font-medium leading-5">
        {formatDate(value, "month")}
      </span>
      <span className="text-xs leading-4">{formatDate(value, "year")}</span>
    </div>
    <IconButton
      onClick={() => {
        onValueChange(getNextMonthDate(value));
      }}
    >
      <img src="/chevronRight.svg" alt="Next" />
    </IconButton>
  </div>
);
