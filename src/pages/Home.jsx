import phone from '@/assets/home/desktop/image-hero-phone.png';
import ButtonLink from '@/components/ButtonLink';
import Card from '@/components/Card';
import { Link } from 'react-router-dom';

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
      <section className="lg:px-24 lg:py-30 py-20 ">
        <Link to="webdesign">
          <Card
            title="Web Design"
            description="View Projects"
            className="cursor-pointer uppercase text-white cardWeb-bg p-24 rounded-lg"
          />
        </Link>
        {/* <Card
          to="appdesign"
          title="App Design"
          description="View Projects"
          className="cursor-pointer uppercase text-white cardapp-bg "
        />
        <Card
          to="graphicdesign"
          title="Graphic Design"
          description="View Projects"
          className="cursor-pointer uppercase text-blue cardgraphic-bg"
        /> */}
      </section>
    </main>
  );
};

export default Home;
