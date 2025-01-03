import imgCanada from '@/assets/locations/desktop/image-map-canada.png';
import imgCanadaTablet from '@/assets/locations/tablet/image-map-canada.png';
import imgAustralia from '@/assets/locations/desktop/image-map-australia.png';
import imgAustraliaTablet from '@/assets/locations/tablet/image-map-australia.png';
import imgUK from '@/assets/locations/desktop/image-map-united-kingdom.png';
import imgUKTablet from '@/assets/locations/tablet/image-map-uk.png';
import GetInTouch from '@/components/GetInTouch';

const Locations = () => {
  return (
    <main className="lg:px-20 lg:py-8 py-0.5 home_bg-img ">
      {/* Canada */}
      <section>
        <img
          src={imgCanadaTablet}
          alt="locationCanada"
          className="lg:hidden block locationTablet-img"
        />
        <section className="lg:flex lg:gap-8">
          <div className="bg-red-100 lg:rounded-3xl lg:w-full  py-32 lg:py-0 ">
            <h1 className="text-red-400 font-bold uppercase mb-6 text-3xl lg:text-4xl text-center lg:text-left lg:ml-24 lg:mt-20 lg:mb-8">
              Canada
            </h1>
            <div className="text-center lg:ml-24 lg:flex lg:gap-12 lg:text-left">
              <div className="">
                <p className="font-bold ">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="mt-8 lg:mt-0 ">
                <p className="font-bold">Contact</p>
                <p>P : +1 253-863-8967</p>
                <p> M : contact@designo.co</p>
              </div>
            </div>
          </div>
          <img
            src={imgCanada}
            alt="locationCanada"
            className="hidden lg:block lg:rounded-3xl "
          />
        </section>
      </section>

      <section className="mt-12">
        {/* Australia */}
        <img
          src={imgAustraliaTablet}
          alt="locationCanada"
          className="lg:hidden block locationTablet-img"
        />
        <section className="lg:flex lg:gap-8">
          <img
            src={imgAustralia}
            alt="locationCanada"
            className="hidden lg:block lg:rounded-3xl "
          />
          <div className="bg-red-100 lg:rounded-3xl lg:w-full  py-32 lg:py-0 ">
            <h1 className="text-red-400 font-bold uppercase mb-6 text-3xl lg:text-4xl text-center lg:text-left lg:ml-24 lg:mt-20 lg:mb-8">
              Australia
            </h1>
            <div className="text-center lg:ml-24 lg:flex lg:gap-12 lg:text-left">
              <div className="">
                <p className="font-bold "> Designo AU Office</p>
                <p>19 Balonne Street</p>
                <p> New South Wales 2443</p>
              </div>
              <div className="mt-8 lg:mt-0 ">
                <p className="font-bold">Contact</p>
                <p> P : (02) 6720 9092</p>
                <p> M : contact@designo.au</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-12 relative mb:24">
        {/* United Kingdom */}
        <img
          src={imgUKTablet}
          alt="locationCanada"
          className="lg:hidden block locationTablet-img"
        />
        <section className="lg:flex lg:gap-8">
          <div className="bg-red-100 lg:rounded-3xl lg:w-full  py-32 lg:py-0 ">
            <h1 className="text-red-400 font-bold uppercase mb-6 text-3xl lg:text-4xl text-center lg:text-left lg:ml-24 lg:mt-20 lg:mb-8">
              United Kingdom
            </h1>
            <div className="text-center lg:ml-24 lg:flex lg:gap-12 lg:text-left">
              <div className="">
                <p className="font-bold ">Designo UK Office</p>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className="mt-8 lg:mt-0 ">
                <p className="font-bold">Contact</p>
                <p>P : 078 3115 1400</p>
                <p> M : contact@designo.uk</p>
              </div>
            </div>
          </div>
          <img
            src={imgUK}
            alt="locationCanada"
            className="hidden lg:block lg:rounded-3xl "
          />
        </section>
        <GetInTouch />
      </section>
    </main>
  );
};

export default Locations;
