import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import jsonData from "~/assets/data.json";
import MenuCategory from "~/components/MenuCategory";
import { Category, Languages } from "~/types/menu";
import logo from "~/assets/logo1.svg";
import Footer from "~/components/Footer";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Remix@Edge | New Remix App" }];
export const loader = async (args: LoaderFunctionArgs) => {

  return json({ data: jsonData })
};
export default function Edge() {
  const { data } = useLoaderData<typeof loader>()
  console.log({ data, });
  if (data && typeof data === 'object' && data.menu && Array.isArray(data.menu) && data.menu.length > 0)
    return (
      <div className="container m-auto w-full h-full flex-col px-5 py-24">
        <div className="flex flex-row lg:flex-col justify-center items-center gap-4 mb-8 lg:mb-16">
          <img src={logo} alt="logo" className="w-[20%] lg:w-full max-h-[300px]" />
          <h1 className="text-2xl lg:text-6xl text-center ">BABYLON RESTAURANT</h1>
        </div>


        <div className=" divide-y divide-yellow-600">
          {
            data.menu.map((menuCategory: Category) =>
              <MenuCategory key={menuCategory.id} category={menuCategory} />)
          }
        </div>
        <Footer lang={Languages.en} />
      </div>
    );
  return (<>
    <div className="flex justify-center items-center w-full h-full flex-col">
      Menu isn't available yet.
    </div>
  </>)
}
