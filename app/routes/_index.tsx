import { type MetaFunction } from "@vercel/remix";

import { Languages } from "~/types/menu";
import logo from "~/assets/logo1.svg";
import Footer from "~/components/Footer";
import { useState } from "react";

export const config = { runtime: "Menu" };

export const meta: MetaFunction = () => [{
  title: "Babylon Restaurant! - بابليون مطعم عراقي | MENU"
}];
// export const loader = async (args: LoaderFunctionArgs) => {

//   return json({ data: jsonData })
// };
export default function Index() {
  // const { data } = useLoaderData<typeof loader>()
  const [currentLanguage, setCurrentLanguage] = useState<Languages>(Languages.cz)

  const handleChangeLang = () => {
    setCurrentLanguage((prevLanguage: Languages) => prevLanguage === Languages.en ? Languages.cz : Languages.en)
  }
    return (<>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <button onClick={handleChangeLang} className="fixed bottom-3 right-3 h-12 w-12 bg-amber-900 rounded-full uppercase">{currentLanguage=== Languages.en ? Languages.cz : Languages.en
        }</button>

      <div className="custom-background"></div>
      <div className="container m-auto w-full h-full flex flex-col px-5 py-24  lg:grid grid-rows-[400px_minmax(900px,_1fr)_100px] grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
        <img src={logo} alt="logo" className="w-full lg:w-full max-h-[400px] mb-8 lg:mb-0" />


        <div className=" divide-y divide-yellow-600 row-span-2">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md w-full mb-8"
            onClick={() => {
              window.open('pdfs/babylon_menu.pdf', '_blank');
            }}>
              {
                currentLanguage=== Languages.en ? 

                'View Menu':'Zobrazit nabídku'
              }
              
              </button>


        </div>
        <Footer lang={currentLanguage} onChangeLang={handleChangeLang} />
      </div>
    </>
    );
  // return (<>
  //   <div className="flex justify-center items-center w-full h-full flex-col">
  //     Menu isn't available yet.
  //   </div>
  // </>)
}
