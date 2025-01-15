import imgAirfilter from '@/assets/app-design/desktop/image-airfilter.jpg';
import imgEyecam from '@/assets/app-design/desktop/image-eyecam.jpg';
import imgFaceit from '@/assets/app-design/desktop/image-faceit.jpg';
import imgTodo from '@/assets/app-design/desktop/image-todo.jpg';
import imgLoopstudios from '@/assets/app-design/desktop/image-loopstudios.jpg';
import arrowIcon from '@/assets/shared/desktop/icon-right-arrow.svg';
import imgWeb from '@/assets/home/desktop/image-web-design-small.jpg';
import imgWebMobile from '@/assets/home/mobile/image-web-design.jpg';
import imgWebTablet from '@/assets/home/tablet/image-web-design.jpg';
import imgGraphic from '@/assets/home/desktop/image-graphic-design.jpg';
import imgGraphicMobile from '@/assets/home/mobile/image-graphic-design.jpg';
import imgGraphicTablet from '@/assets/home/tablet/image-graphic-design.jpg';
import { Link } from 'react-router-dom';
import GetInTouch from '@/components/GetInTouch';
const AppDesign = () => {
  return (
    <main className="lg:px-20 lg:py-8 py-0.5">
      <section className="appBg bg-red-400 text-white text-center   lg:rounded-3xl">
        <div className=" py-20">
          <h1 className="font-semibold text-3xl lg:text-4xl capitalize">
            App design
          </h1>
          <p className="mt-4 lg:w-1/2 md:w-3/4 mx-auto px-4 lg:px-0">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3  mt-16 ">
        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgAirfilter} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Airfilter
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgEyecam} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Eyecam
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgFaceit} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Faceit
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgTodo} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Todo
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgLoopstudios} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Loopstudios
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </section>

      <section className="flex gap-4  lg:gap-0 flex-col lg:flex-row px-4 lg:p-0  md:px-0 mt-16 relative ">
        {/* Web Design */}
        <div className="relative  flex flex-col justify-start overflow-hidden  max-w-sm cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto crd-width lg:ml-32">
          <Link to="/webdesign">
            <img
              src={imgWeb}
              alt=""
              className="hidden lg:block absolute inset-0 h-full w-full object-cover"
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
              <h3 className="z-10 mt-3 text-2xl font-semibold text-white lg:text-4xl md:mt-12 lg:mt-12">
                Web Design
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
        <div className="relative isolate flex flex-col justify-start overflow-hidden   max-w-sm cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto lg:mr-60  crd-width mb-20 lg:mb-40">
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
        <GetInTouch />
      </section>
    </main>
  );
};

export default AppDesign;
