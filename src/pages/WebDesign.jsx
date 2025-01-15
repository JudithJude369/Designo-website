import imgExpress from '@/assets/web-design/desktop/image-express.jpg';
import imgTransfer from '@/assets/web-design/desktop/image-transfer.jpg';
import imgPhonton from '@/assets/web-design/desktop/image-photon.jpg';
import imgBuilder from '@/assets/web-design/desktop/image-builder.jpg';
import imgBlogr from '@/assets/web-design/desktop/image-blogr.jpg';
import imgCamp from '@/assets/web-design/desktop/image-camp.jpg';
import arrowIcon from '@/assets/shared/desktop/icon-right-arrow.svg';
import imgApp from '@/assets/home/desktop/image-app-design.jpg';
import imgAppMobile from '@/assets/home/mobile/image-app-design.jpg';
import imgAppTablet from '@/assets/home/tablet/image-app-design.jpg';
import imgGraphic from '@/assets/home/desktop/image-graphic-design.jpg';
import imgGraphicMobile from '@/assets/home/mobile/image-graphic-design.jpg';
import imgGraphicTablet from '@/assets/home/tablet/image-graphic-design.jpg';
import { Link } from 'react-router-dom';
import GetInTouch from '@/components/GetInTouch';

const WebDesign = () => {
  return (
    <main className="lg:px-20 lg:py-8 py-0.5">
      <section className="appBg bg-red-400 text-white text-center   lg:rounded-3xl">
        <div className=" py-20">
          <h1 className="font-semibold text-3xl lg:text-4xl capitalize">
            Web design
          </h1>
          <p className="mt-4 lg:w-1/2 md:w-3/4 mx-auto px-4 lg:px-0">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3  mt-16 ">
        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgExpress} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Express
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgTransfer} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Transfer
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgPhonton} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Photon
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgBuilder} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Builder
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Connects users with local contractors based on their location
            </p>
          </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgBlogr} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Blogr
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>
        <div className=" rounded-3xl  overflow-hidden max-w-lg w-full px-4 lg:px-0 md:mx-auto">
          <img src={imgCamp} alt="" className="w-full object-cover" />
          <div className="p-6 hover:bg-red-400 cursor-pointer  bg-red-100 text-center ">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 mt-4 capitalize">
              Camp
            </h3>
            <p className="text-black  mb-4 leading-tight ">
              Get expert training in coding, data, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      <section className="flex gap-4  lg:gap-0 flex-col lg:flex-row px-4 lg:p-0  md:px-0 mt-16 relative ">
        {/* App Design */}
        <div className="relative  flex flex-col justify-start overflow-hidden  max-w-sm cursor-pointer uppercase text-white  px-2 py-20 rounded-2xl lg:text-center md:mx-auto crd-width lg:ml-32">
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

export default WebDesign;
