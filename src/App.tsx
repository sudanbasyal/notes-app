import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/ui/Button";
import { PlusIcon } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <Button
        icon={<PlusIcon />}
        text="add"
        onClick={() => {}}
        css="min-w-[420px]"
      />
    </div>
  );
}

export default App;
