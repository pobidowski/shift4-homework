import { IconButton } from "~/components";

export const Header: React.FC = () => (
  <div className="relative bg-salmon py-6 px-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center rounded-b-sm sm:rounded-none">
    <IconButton
      className="absolute top-2 right-2 sm:hidden"
      size="lg"
      variant="secondary"
    >
      <img src="/close.svg" alt="Close" />
    </IconButton>
    <img
      src="/givingBlock.svg"
      alt="Giving"
      className="h-[4.5rem] w-[4.5rem]"
    />
    <div>
      <h1 className="text-midnightPurple text-2xl sm:text-[2rem] font-semibold leading-[120%] text-center sm:text-left">
        The giving block
      </h1>
      <p className="font-inter text-purpleGray text-center sm:text-left">
        Set up your donation goal!
      </p>
    </div>
  </div>
);
