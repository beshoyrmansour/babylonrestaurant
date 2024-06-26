import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import jsonData from "~/assets/data.json";
import MenuCategory from "~/components/MenuCategory";
import { Category, Languages } from "~/types/menu";
import logo from "~/assets/logo1.svg";
import Footer from "~/components/Footer";
import { useState } from "react";

export const config = { runtime: "Menu" };

export const meta: MetaFunction = () => [{
  title: "Babylon Restaurant! - بابليون مطعم عراقي | MENU"
}];
export const loader = async (args: LoaderFunctionArgs) => {

  return json({ data: jsonData })
};
export default function Index() {
  const { data } = useLoaderData<typeof loader>()
  const [currentLanguage, setCurrentLanguage] = useState<Languages>(Languages.cz)

  const handleChangeLang = () => {
    setCurrentLanguage((prevLanguage: Languages) => prevLanguage === Languages.en ? Languages.cz : Languages.en)
  }
  if (data && typeof data === 'object' && data.menu && Array.isArray(data.menu) && data.menu.length > 0)
    return (<>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      {/*<button onClick={handleChangeLang} className="fixed bottom-3 right-3 h-12 w-12 bg-amber-900 rounded-full ">EN</button>*/}

      <div className="custom-background"></div>
      <div className="container m-auto w-full h-full flex flex-col px-5 py-24  lg:grid grid-rows-[400px_minmax(900px,_1fr)_100px] grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
        <img src={logo} alt="logo" className="w-full lg:w-full max-h-[400px] mb-8 lg:mb-0" />


        <div className=" divide-y divide-yellow-600 row-span-2">
          <h1 className="text-center"><p className="text-5xl pt-2 w-full font-lugrasimo">Menu</p>
            <button onClick={handleChangeLang} className="text-xl"><span className={currentLanguage === Languages.en ? 'text-yellow-100' : 'text-yellow-700'}>EN</span> / <span className={currentLanguage === Languages.cz ? 'text-yellow-100' : 'text-yellow-700'}>CZ</span></button>
          </h1>
          <div className="sticky  top-0 bg-[#14100D] w-full">
            <div className="flex gap-3 rounded-xl py-3 overflow-auto felx-nowrap">
              {data.menu.map((menuCategory: Category) => (<a
                href={`#${menuCategory.id}`}
                key={'id_' + menuCategory.id}
                className="border-rounded px-3 py-2 text-nowrap text-xl"
              >
                {menuCategory.category_name[currentLanguage]}
              </a>))}
            </div>
          </div>
          {
            data.menu.map((menuCategory: Category) =>
              <MenuCategory lang={currentLanguage} key={menuCategory.id} category={menuCategory} onChangeLang={handleChangeLang} />)
          }
        </div>
        <Footer lang={currentLanguage} onChangeLang={handleChangeLang} />
      </div>
    </>
    );
  return (<>
    <div className="flex justify-center items-center w-full h-full flex-col">
      Menu isn't available yet.
    </div>
  </>)
}
