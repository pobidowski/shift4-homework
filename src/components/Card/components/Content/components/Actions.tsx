// Components
import { Button } from "~/components";

export const Actions: React.FC = () => (
  <div className="flex gap-[0.6875rem] items-center">
    <div className="p-2 w-full hidden sm:block">
      <Button className="w-full" variant="secondary">
        Cancel
      </Button>
    </div>
    <div className="p-2 w-full">
      <Button className="w-full">Continue</Button>
    </div>
  </div>
);
