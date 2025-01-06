import illustrationCanada from '@/assets/shared/desktop/illustration-canada.svg';
import illustrationAustralia from '@/assets/shared/desktop/illustration-australia.svg';
import illustrationUnitedKingdom from '@/assets/shared/desktop/illustration-united-kingdom.svg';
import ButtonLink from '@/components/ButtonLink';

const Location = () => {
  return (
    <section className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 px-4 md:px-8 lg:px-2 lg:mx-24">
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
          <h2 className="font-semibold mt-8 mb-8 uppercase">United Kingdom</h2>
          <ButtonLink
            className=" cursor-pointer font-medium px-7 py-4 text-white rounded-lg bg-red-400  hover:bg-red-200 focus:bg-red-200 hover:text-white hover:opacity-50 transition-all ease-in-out uppercase text-sm"
            to="/locations"
          >
            See location
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Location;
