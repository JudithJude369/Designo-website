import heroImgDesktop from '@/assets/about/desktop/image-about-hero.jpg';
import heroImgMobile from '@/assets/about/mobile/image-about-hero.jpg';
import heroImgTablet from '@/assets/about/tablet/image-about-hero.jpg';
import worldClassImgDesktop from '@/assets/about/desktop/image-world-class-talent.jpg';
import worldClassImgmobile from '@/assets/about/mobile/image-world-class-talent.jpg';
import worldClassImgtablet from '@/assets/about/tablet/image-world-class-talent.jpg';
import illustrationCanada from '@/assets/shared/desktop/illustration-canada.svg';
import illustrationAustralia from '@/assets/shared/desktop/illustration-australia.svg';
import illustrationUnitedKingdom from '@/assets/shared/desktop/illustration-united-kingdom.svg';
import ButtonLink from '@/components/ButtonLink';
import realDealImgDesktop from '@/assets/about/desktop/image-real-deal.jpg';
import realDealImgmobile from '@/assets/about/mobile/image-real-deal.jpg';
import realDealImgtablet from '@/assets/about/tablet/image-real-deal.jpg';
import GetInTouch from '@/components/GetInTouch';

const About = () => {
  return (
    <main className="lg:px-20 lg:py-8 py-0.5 home_bg-img">
      <section className="bg-red-400 text-white text-center lg:text-left  lg:flex lg:justify-between  lg:rounded-3xl hero_bg-img">
        <div>
          <img
            src={heroImgMobile}
            alt="teamwork"
            className="block lg:hidden md:hidden"
          />
        </div>
        <div>
          <img
            src={heroImgTablet}
            alt="teamwork"
            className="hidden lg:hidden md:block md:w-screen"
          />
        </div>
        <div className=" lg:w-1/2 px-6 lg:px-0 lg:pt-32 pt-12">
          <h1 className="font-semibold text-3xl lg:text-4xl capitalize">
            About us
          </h1>
          <p className="mt-4 pb-8 lg:pb-0">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div>
          <img
            src={heroImgDesktop}
            alt="teamwork"
            className="hidden lg:block"
          />
        </div>
      </section>

      <section className="lg:my-24 my-16 bg-red-100 text-black text-center lg:text-left  lg:flex lg:justify-between  lg:rounded-3xl">
        <div>
          <img
            src={worldClassImgDesktop}
            alt="teamwork"
            className="hidden lg:block"
          />
        </div>
        <div>
          <img
            src={worldClassImgmobile}
            alt="teamwork"
            className="block lg:hidden md:hidden"
          />
        </div>
        <div>
          <img
            src={worldClassImgtablet}
            alt="teamwork"
            className="hidden lg:hidden md:block md:w-screen"
          />
        </div>
        <div className=" lg:w-1/2 px-8 lg:px-12 lg:pt-32 pt-12">
          <h1 className="font-semibold lg:font-semibold text-3xl lg:text-4xl capitalize text-red-400 ">
            World-class talent
          </h1>
          <p className="mt-2 mb-4">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="mt-8 pb-8 ">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 px-4 md:px-8 lg:px-2 lg:mx-24 lg:mb-24 mb-16">
        <div className="lg:self-center">
          <img
            src={illustrationCanada}
            alt="illustration-canada"
            className="lg:ml-16 md:ml-64 ml-14 bg-circle"
          />
          <div className="text-center lg:ml-14">
            <h2 className="font-semibold mt-8 mb-8 uppercase">Canada</h2>
            <ButtonLink
              className=" cursor-pointer font-medium px-7 py-4 text-white rounded-lg bg-red-400  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm"
              to="/locations"
            >
              See location
            </ButtonLink>
          </div>
        </div>
        <div>
          <img
            src={illustrationAustralia}
            alt="illustration-australia"
            className="lg:ml-16 md:ml-64 ml-14 bg-circle mt-6 lg:mt-0"
          />
          <div className="text-center lg:ml-14">
            <h2 className="font-semibold mt-8 mb-8 uppercase">Australia</h2>
            <ButtonLink
              className=" cursor-pointer font-medium px-7 py-4 text-white rounded-lg bg-red-400  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm"
              to="/locations"
            >
              See location
            </ButtonLink>
          </div>
        </div>
        <div>
          <img
            src={illustrationUnitedKingdom}
            alt="illustration-united-kingdom"
            className="lg:ml-16 md:ml-64 ml-14 bg-circle mt-6 lg:mt-0"
          />
          <div className="text-center lg:ml-14">
            <h2 className="font-semibold mt-8 mb-8 uppercase">
              United Kingdom
            </h2>
            <ButtonLink
              className=" cursor-pointer font-medium px-7 py-4 text-white rounded-lg bg-red-400  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm"
              to="/locations"
            >
              See location
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className=" bg-red-100 text-black text-center lg:text-left  lg:flex lg:justify-between  lg:rounded-3xl">
          <div>
            <img
              src={realDealImgmobile}
              alt="staff-training"
              className="block lg:hidden md:hidden"
            />
          </div>
          <div>
            <img
              src={realDealImgtablet}
              alt="staff-training"
              className="hidden lg:hidden md:block md:w-screen"
            />
          </div>
          <div className=" lg:w-1/2 px-8 lg:px-12 lg:pt-32 pt-12">
            <h1 className="font-semibold lg:font-semibold text-3xl lg:text-4xl capitalize text-red-400">
              The real deal
            </h1>
            <p className="mt-2 mb-4">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p
              className="mt-8 pb-12
           "
            >
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
          <div>
            <img
              src={realDealImgDesktop}
              alt="staff-training"
              className="hidden lg:block"
            />
          </div>
        </div>
        <GetInTouch />
      </section>
    </main>
  );
};

export default About;
