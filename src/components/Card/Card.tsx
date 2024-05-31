// Components
import { Content, Header } from "./components";

export const Card: React.FC = () => (
  <div className="bg-white sm:rounded-[0.3125rem] sm:my-[4.5rem] sm:overflow-hidden sm:shadow-level4 sm:w-[37.5rem]">
    <Header />
    <Content />
  </div>
);
