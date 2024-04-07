import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Remix@Edge | New Remix App" }];

export default function Edge() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <h1>MENU</h1>

    </div>
  );
}
