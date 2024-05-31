import { Card, Navbar } from "./components";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 sm:flex sm:justify-center sm:items-center">
        <Card />
      </div>
    </div>
  );
}
