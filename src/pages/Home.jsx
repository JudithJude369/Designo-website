import phone from '@/assets/home/desktop/image-hero-phone.png';
import ButtonLink from '@/components/ButtonLink';
import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import passionate from '@/assets/home/desktop/illustration-passionate.svg';
import resourceful from '@/assets/home/desktop/illustration-resourceful.svg';
import friendly from '@/assets/home/desktop/illustration-friendly.svg';

const Home = () => {
  return (
    <main className="lg:px-24 lg:py-8 py-0.5 home_bg-img">
      <section className="bg-red-400 text-white hero_bg-img lg:px-16 text-center lg:text-left lg:pt-28  pt-12 lg:flex lg:justify-between  lg:rounded-3xl">
        <div className="lg:w-2/3">
          <h1 className="font-semibold lg:font-semibold text-3xl lg:text-4xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h2 className="mt-8 mb-10 md:mb-12">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h2>
          <ButtonLink
            className=" cursor-pointer font-medium px-7 py-3 text-black rounded-lg bg-white  hover:bg-red-300 focus:bg-red-300 hover:text-white transition-all ease-in-out"
            to="about"
          >
            Learn more
          </ButtonLink>
        </div>
        <div>
          <img src={phone} alt="phone" className="phone-img md:mx-20" />
        </div>
      </section>
      <section className="lg:px-24 lg:py-30 py-20 px-4 grid lg:grid-rows-2 lg:grid-flow-col gap-4">
        <Link to="webdesign">
          <Card
            title="Web Design"
            description="View Projects"
            className="cursor-pointer uppercase text-white cardWeb-bg px-2 py-20 rounded-xl "
          />
        </Link>
        <Link to="appdesign">
          <Card
            title=" App Design"
            description="View Projects"
            className="cursor-pointer uppercase text-white cardWeb-bg px-2 py-20 rounded-xl"
          />
        </Link>
        <Link to="graphicdesign">
          <Card
            title="Graphic Design"
            description="View Projects"
            className="cursor-pointer uppercase text-white cardWeb-bg px-2 py-20 rounded-xl"
          />
        </Link>
      </section>
      <section className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 px-4 ">
        <div className="lg:self-center">
          <img
            src={passionate}
            alt="passionate-img"
            className="lg:ml-16 md:ml-64 ml-14 bg-circle"
          />
          <div className="text-center">
            <h2 className="font-semibold mt-4 mb-4"> Passionate</h2>
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
            <h2 className="font-semibold mt-4 mb-4">Resourceful</h2>
            <p className="text-lg">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div>
          <img
            src={friendly}
            alt="friendly-img"
            className="lg:ml-16 md:ml-64 ml-14 bg-circle"
          />
          <div className="text-center">
            <h2 className="font-semibold mt-4 mb-4">Friendly</h2>
            <p className="text-lg">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
