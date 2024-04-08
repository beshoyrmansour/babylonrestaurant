import React from 'react'
import logo2 from "~/assets/logo2.svg";
import { Languages } from '~/types/menu';

type Props = { lang: Languages }

const Footer = (props: Props) => {
  const { lang } = props;
  return (
    <footer className="text-center ">
      <div className="text-center flex flex-col-reverse lg:flex-row">
        <div className=" footer_top_section flex-col w-full lg:w-[50%] flex justify-between items-center">
          <h3>
            {lang === "en" ? "Find" : "Kde nás"}{" "}
            <span>{lang === "en" ? "us" : "najdete"}</span>
          </h3>
          <div className="social">
            <a
              target="_blank"
              href="https://m.facebook.com/profile.php?id=100080996603475"
              className="fa fa-facebook"
            ></a>
            <a
              target="_blank"
              href="https://www.instagram.com/palestinian_restaurant_prague/"
              className="fa fa-instagram"
            ></a>
          </div>
          <a href="https://maps.app.goo.gl/z9tycx4wQMfDSu1u5">

            <span>Spálená 107/49, 110 00 Nové Město, Czechia</span>
            {/* <div className="map"
                title="Map showing business location."></div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.0631361224408!2d14.418644328591732!3d50.08155839821284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95db41615027%3A0x7677db6b53fc1178!2sBabylon%20Grill!5e0!3m2!1sen!2seg!4v1712578081598!5m2!1sen!2seg"
              width="100%"
              height="450"
              loading="lazy"
              className=' invert grayscale contrast-[83%] hover:filter-none duration-700 mt-4 border-none rounded'

              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"></iframe>

          </a>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] justify-between">
          <img src={logo2} alt="logo" style={{ maxHeight: '300px' }} />

          <div className="">
            <h3 className='text-yellow-100'>
              {lang === "en" ? "Call" : "Zavolejte"}{" "}
              <span>{lang === "en" ? "us" : "nám"}</span>
            </h3>
            <a href="tel:+420602342820">+420 602 342 820</a>
          </div>
          <div className="text-center mt-3">
            <h3 className='text-yellow-100'>
              {lang === "en" ? "Working" : "Otevírací"}{" "}
              <span>{lang === "en" ? "hours" : "doba"}</span>
            </h3>
            <table itemProp="openingHours" className='m-auto '>
              <tbody>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Monday" : "Pondělí"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Tuesday" : "Úterý"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Wednesday" : "Středa"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Thursday" : "Čtvrtek"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Friday" : "Pátek"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Saturday" : "Sobota"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-start px-2">
                    {lang === "en" ? "Sunday" : "Neděle"}
                  </th>
                  <td className="o0m3Qb">
                    <span className="WF8WNe">11:00 - 23:00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer_bottom">

        <div className="copyright">
          Copyright © 2023 Palestinian restaurant - All rights reserved <br />{" "}
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