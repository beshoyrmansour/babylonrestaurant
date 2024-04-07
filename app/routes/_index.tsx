import type { MetaFunction } from "@vercel/remix";
import logo from "~/assets/logo1.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Babylon Restaurant" },
    { name: "description", content: "Welcome to Babylon Restaurant! - بابليون مطعم عراقي" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">

      <img src={logo} alt="logo" style={{ maxHeight: '300px' }} />

      <h1 className="text-4xl animate-pulse	mt-16 text-center leading-relaxed">
        Již brzy
        <br />
        Coming soon
        <br />
        قــريـبـاً
      </h1>
    </div>
  );
}
