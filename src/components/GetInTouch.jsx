import ButtonLink from '@/components/ButtonLink';

const GetInTouch = () => {
  return (
    <main
      className="bg-red-400 rounded-2xl py-14 lg:py-20 
    text-center lg:text-start text-white lg:flex  lg:px-14 lg:justify-between px-4  w-11/12 get_card absolute"
    >
      <div className=" lg:w-2/4">
        <h1 className="font-medium text-3xl">Let’s talk about your project</h1>
        <p className="mt-4 mb-6 lg:mb-0">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="lg:self-center ">
        <ButtonLink
          className=" cursor-pointer font-medium px-7 py-3 text-black rounded-lg bg-white  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm "
          to="contact"
        >
          Get in touch
        </ButtonLink>
      </div>
    </main>
  );
};

export default GetInTouch;
