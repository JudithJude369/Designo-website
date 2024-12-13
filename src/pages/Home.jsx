import Button from '@/components/Button';
import phone from '@/assets/home/desktop/image-hero-phone.png';
const Home = () => {
  return (
    <main className="lg:px-24 py-2">
      <section className="bg-red-400 text-white lg:px-12 text-center lg:text-left bg-img lg:py-16 px-4 py-12 lg:flex">
        <div>
          <h1 className="font-semibold">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h2 className="mt-8">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h2>
          <Button>Learn more</Button>
        </div>
        <img src={phone} alt="phone" className="pt-0" />
      </section>
    </main>
  );
};

export default Home;
