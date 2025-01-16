import phone from '@/assets/home/desktop/image-hero-phone.png';
import ButtonLink from '@/components/ButtonLink';
import { Link } from 'react-router-dom';
import passionate from '@/assets/home/desktop/illustration-passionate.svg';
import resourceful from '@/assets/home/desktop/illustration-resourceful.svg';
import friendly from '@/assets/home/desktop/illustration-friendly.svg';
import GetInTouch from '@/components/GetInTouch';
import arrowIcon from '@/assets/shared/desktop/icon-right-arrow.svg';
import imgWeb from '@/assets/home/desktop/image-web-design-small.jpg';
import imgWebMobile from '@/assets/home/mobile/image-web-design.jpg';
import imgWebTablet from '@/assets/home/tablet/image-web-design.jpg';
import imgApp from '@/assets/home/desktop/image-app-design.jpg';
import imgAppMobile from '@/assets/home/mobile/image-app-design.jpg';
import imgAppTablet from '@/assets/home/tablet/image-app-design.jpg';
import imgGraphic from '@/assets/home/desktop/image-graphic-design.jpg';
import imgGraphicMobile from '@/assets/home/mobile/image-graphic-design.jpg';
import imgGraphicTablet from '@/assets/home/tablet/image-graphic-design.jpg';

const Home = () => {
  return (
    <main className="lg:px-20 lg:my-8 my-0.5 home_bg-img">
      <section className="bg-red-400 text-white hero_bg-img lg:px-16 text-center lg:text-left lg:pt-24  pt-12 lg:flex lg:justify-between  lg:rounded-3xl">
        <div className="lg:w-2/3">
          <h1 className="font-semibold lg:font-semibold text-3xl lg:text-4xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="mt-8 mb-10 md:mb-12 px-6 lg:px-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className="mt-8">
            <ButtonLink
              className=" cursor-pointer font-medium px-7 py-4 text-black rounded-lg bg-white  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm "
              to="/about"
            >
              Learn more
            </ButtonLink>
          </div>
        </div>
        <div>
          <img src={phone} alt="phone" className="phone-img md:mx-20" />
        </div>
      </section>
      <section className="px-4 lg:p-0 lg:mx-32 md:px-0 grid lg:grid-rows-3 lg:grid-flow-col ">
        {/* Web design */}
        <div className="relative isolate flex flex-col justify-start overflow-hidden  max-w-sm  my-12 lg:my-0 cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto lg:row-span-3 card-width lg:mt-8">
          <Link to="/webdesign">
            <img
              src={imgWeb}
              alt=""
              className="hidden lg:block absolute inset-0 h-full w-full object-cover "
            />
            <img
              src={imgWebMobile}
              alt=""
              className="block lg:hidden md:hidden absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={imgWebTablet}
              alt=""
              className="hidden lg:hidden md:block absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 text-center mt-4">
              <h3 className="z-10 mt-3 text-2xl font-semibold text-white lg:text-4xl lg:mt-60 md:mt-12">
                Web Design
              </h3>
              <p className="z-10 mt-3 text-lg lg:text-xl text-white">
                View Projects
                <span className="inline-block">
                  {' '}
                  <img
                    src={arrowIcon}
                    alt="right-arrow"
                    className="z-10 ml-4 overflow-hidden"
                  />
                </span>
              </p>
            </div>
          </Link>
        </div>

        {/* App Design */}
        <div className="relative isolate flex flex-col justify-start overflow-hidden  max-w-sm cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto lg:col-span-2  crd-width lg:mt-20 lg:ml-20">
          <Link to="/appdesign">
            <img
              src={imgApp}
              alt=""
              className="hidden lg:block absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={imgAppMobile}
              alt=""
              className="block lg:hidden md:hidden absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={imgAppTablet}
              alt=""
              className="hidden lg:hidden md:block absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 text-center mt-4">
              <h3 className="z-10 mt-3 text-2xl font-semibold text-white lg:text-4xl md:mt-12 lg:mt-12">
                App Design
              </h3>
              <p className="z-10 mt-3 text-lg  text-white lg:text-xl">
                View Projects
                <span className="inline-block">
                  {' '}
                  <img
                    src={arrowIcon}
                    alt="right-arrow"
                    className="z-10 ml-4 overflow-hidden"
                  />
                </span>
              </p>
            </div>
          </Link>
        </div>

        {/* Graphic Design */}
        <div className="relative isolate flex flex-col justify-start overflow-hidden my-12  max-w-sm cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto  lg:col-span-2   crd-width lg:mt-18 lg:ml-20">
          <Link to="/graphicdesign">
            <img
              src={imgGraphic}
              alt=""
              className="hidden lg:block absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={imgGraphicMobile}
              alt=""
              className="block lg:hidden md:hidden absolute inset-0 h-full w-full object-cover"
            />
            <img
              src={imgGraphicTablet}
              alt=""
              className="hidden lg:hidden md:block absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 text-center mt-4">
              <h3 className="z-10 mt-3 text-2xl font-semibold text-white lg:text-4xl lg:mt-12 md:mt-12">
                Graphic Design
              </h3>
              <p className="z-10 mt-3 text-lg lg:text-xl text-white">
                View Projects
                <span className="inline-block">
                  {' '}
                  <img
                    src={arrowIcon}
                    alt="right-arrow"
                    className="z-10 ml-4 overflow-hidden"
                  />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="relative home-img ">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 px-4 md:px-8 lg:px-2">
          <div className="lg:self-center">
            <img
              src={passionate}
              alt="passionate-img"
              className="lg:ml-16 md:ml-64 ml-14 bg-circle"
            />
            <div className="text-center">
              <h2 className="font-semibold mt-4 mb-4 uppercase"> Passionate</h2>
              <p className="text-lg">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div>
            <img
              src={resourceful}
              alt="resourceful-img"
              className="lg:ml-16 md:ml-64 ml-14 bg-circle"
            />
            <div className="text-center">
              <h2 className="font-semibold mt-4 mb-4 uppercase">Resourceful</h2>
              <p className="text-lg">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div>
            <img
              src={friendly}
              alt="friendly-img"
              className=" mx-auto bg-circle"
            />
            <div className="text-center ">
              <h2 className="font-semibold mt-4 mb-4 uppercase">Friendly</h2>
              <p className="text-lg mb-20 lg:mb-0">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
        <GetInTouch />
      </section>
    </main>
  );
};

export default Home;
