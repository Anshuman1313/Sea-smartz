import Image from "next/image";
import {Navbar} from "./components/landingpage/Navbar";

export default function Home() {
  return (
   <>
   <div className="  bg-background text-muted-foreground flex flex-col px-2 md:px-0">
    <Navbar/>
   </div>

   </>
  );
}
