import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import jsonData from "~/assets/data.json";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Remix@Edge | New Remix App" }];
export const loader = async (args: LoaderFunctionArgs) => {

  return json({ data: jsonData })
};
export default function Edge() {
  const { data } = useLoaderData<typeof loader>()
  console.log({ data, });
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <h1>MENU</h1>

    </div>
  );
}
