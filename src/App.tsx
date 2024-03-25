import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui";
// import CounterDemo from "@/shared/counter-demo";
import { AlertDialogDemo } from "@/shared";

function App() {
  const [open, setOpen] = useState(false);

  const openChange = () => {
    setOpen((open) => !open);
    // console.log("father", open);
  };

  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };

  // const decrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <Button onClick={openChange} variant={"destructive"}>
        测试
      </Button>
      <AlertDialogDemo open={open} openChange={openChange}></AlertDialogDemo>
      {/* <CounterDemo count={count} increase={increase} decrease={decrease} /> */}
    </>
  );
}

export default App;
