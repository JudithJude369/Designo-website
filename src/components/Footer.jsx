import { NavLink } from 'react-router-dom';
import logo from '@/assets/shared/desktop/logo-light.png';
import facebook from '@/assets/shared/desktop/icon-facebook.svg';
import youtube from '@/assets/shared/desktop/icon-youtube.svg';
import twitter from '@/assets/shared/desktop/icon-twitter.svg';
import pinterest from '@/assets/shared/desktop/icon-pinterest.svg';
import instagram from '@/assets/shared/desktop/icon-instagram.svg';
const Footer = () => {
  return (
    <footer className="mt-60 py-36 bg-black ">
      <nav className=" text-xl text-white lg:text-2xl flex lg:flex-row flex-col font-medium justify-between  lg:px-12 ">
        <NavLink to="/">
          <img
            src={logo}
            alt="Designo-Company-Logo"
            className="w-56 md:mx-auto mx-auto lg:m-0"
          />
        </NavLink>
        <ul className=" flex lg:flex-row flex-col lg:justify-center gap-6 mt-12 lg:mt-0 text-center lg-text-start uppercase lg:self-center">
          <li className="lg:hover:underline transition-all ease-in-out ">
            <NavLink to="/about">Our Company</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <section className="text-gray-400 text-center lg:text-start flex lg:flex-row flex-col  gap-6 lg:mx-12 mt-12">
        <div>
          <p>Designo Central Office</p>
          <p> 3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="lg:ml-20 mt-8 lg:mt-0">
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <ul className="flex gap-4 justify-center lg:justify-start lg:ml-auto lg:self-center mt-8 lg:mt-0">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="youtube-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinterest} alt="pinterest-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram-icon" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
