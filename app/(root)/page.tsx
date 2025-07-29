import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("What am i --  SERVER/CLIENT");
  throw new Error();
  return (
    <>
      <h1 className="text-3xl">Welcome to the Next Js Home</h1>
      <Hello />
    </>
  );
}
