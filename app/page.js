import Image from "next/image";
import Banner from "./components/Banner";
import Client from "./components/Client";

export default function Home() {
  return (
    <div className="font-bold mt-1">
      <Banner />
      <Client />
    </div>
  );
}
