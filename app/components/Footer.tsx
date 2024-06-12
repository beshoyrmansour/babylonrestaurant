import React from 'react'
import logo2 from "~/assets/logo2.svg";
import { Languages } from '~/types/menu';

type Props = {
  lang: Languages;
  onChangeLang: () => void;
}

const Footer = (props: Props) => {
  const { lang } = props;
  return (
    <footer className="text-center mb-12">
      <div className="text-center footer_top_section flex-col w-full  flex justify-between items-center gap-12">
        <img src={logo2} alt="logo" style={{ maxHeight: '300px' }} />

        <div className="flex flex-col lg:flex-row w-full justify-around ">
          <div className=''>
            <div className=" mt-16">
              <h3 className='text-yellow-100 mb-2 text-2xl font-lugrasimo'>
                {lang === "en" ? "For reservation" : "Pro rezervaci"}
              </h3>
              <a href="tel:+420773154848">
                <span className="text-3xl">
                  +420 773 154 848
                </span>

              </a>
            </div>

            <div className=" mt-16">
              <h3 className='text-yellow-100 mb-2 text-2xl font-lugrasimo'>
                {lang === "en" ? "Follow us" : "Následuj nás"}
              </h3>
              <div className=" mt-3">
                <a
                  target="_blank"
                  href="https://www.instagram.com/restaurace.babylon/"
                  className='flex flex-row text-8xl'
                >
                  <i className="fa fa-instagram text-8xl" style={{ fontSize: '120px' }} />
                  {/*<span className='text-sm'> /restaurace.babylon</span>*/}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className='text-yellow-100 mb-2 text-2xl font-lugrasimo'>
              {lang === "en" ? "Working hours" : "Otevírací doba"}
            </h3>
            <table itemProp="openingHours" className='m-auto '>
              <tbody>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Monday" : "Pondělí"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Tuesday" : "Úterý"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Wednesday" : "Středa"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Thursday" : "Čtvrtek"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Friday" : "Pátek"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Saturday" : "Sobota"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2 text-2xl pr-2 font-forum">
                    {lang === "en" ? "Sunday" : "Neděle"}
                  </th>
                  {/*<td className='pr-2'>--------------</td>*/}
                  <td className="_____">
                    <span className="text-2xl"> 11:00 - 23:00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 w-full px-8">

          <h3 className='text-yellow-100 mb-2 text-2xl font-lugrasimo'>
            {lang === "en" ? "Visit us" : "Navštiv nás"}

          </h3>
          <a href="https://maps.app.goo.gl/z9tycx4wQMfDSu1u5">

            <span className='text-xl' >Spálená 107/49, 110 00 Nové Město, Czechia</span>
            {/* <div className="map"
                title="Map showing business location."></div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.0631361224408!2d14.418644328591732!3d50.08155839821284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95db41615027%3A0x7677db6b53fc1178!2sBabylon%20Grill!5e0!3m2!1sen!2seg!4v1712578081598!5m2!1sen!2seg"
              width="100%"
              height="450"
              loading="lazy"
              className=' invert grayscale contrast-[83%] hover:filter-none mt-4 border-none rounded-lg hover:rounded-lg duration-700'

              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"></iframe>

          </a>
          {/*</div>
        <div className="flex flex-col w-full  justify-between">

        </div>*/}
        </div>
      </div>
      <div className="footer_bottom">

        <div className="copyright">
          Copyright © 2024 Babylon restaurant - All rights reserved <br />{" "}
          Designed By:{" "}
          <a target="_blank" href="http://digitalizers.co/">
            Digitalizers agency
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer