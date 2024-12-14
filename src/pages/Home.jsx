import Button from '@/components/Button';
import phone from '@/assets/home/desktop/image-hero-phone.png';

const Home = () => {
  return (
    <main className="lg:px-24 lg:py-8 py-0.5">
      <section className="bg-red-400 text-white lg:px-16 text-center lg:text-left bg-img lg:pt-28  pt-12 flex lg:flex-row lg:justify-between lg:rounded-3xl flex-col justify-center">
        <div className="lg:w-2/3">
          <h1 className="font-semibold lg:font-semibold text-3xl lg:text-4xl ">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h2 className="mt-8">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h2>
          <Button to="/about">Learn more</Button>
        </div>
        <div>
          <img src={phone} alt="phone" className="top md:mr-12 md:ml-12" />
        </div>
      </section>
      <section>
        <h1>gkllljjs</h1>
      </section>
    </main>
  );
};

export default Home;
