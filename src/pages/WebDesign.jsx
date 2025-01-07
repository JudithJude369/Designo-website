import imgExpress from '@/assets/web-design/desktop/image-express.jpg';
import imgTransfer from '@/assets/web-design/desktop/image-transfer.jpg';
import imgPhonton from '@/assets/web-design/desktop/image-photon.jpg';
import imgBuilder from '@/assets/web-design/desktop/image-builder.jpg';
import imgBlogr from '@/assets/web-design/desktop/image-blogr.jpg';
import imgCamp from '@/assets/web-design/desktop/image-camp.jpg';

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

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <img src={imgExpress} alt="" />
          <h3>Express</h3>
          <p>A multi-carrier shipping website for ecommerce businesses</p>
        </div>
        <div>
          <img src={imgTransfer} alt="" />
          <h3>Transfer</h3>
          <p>
            Site for low-cost money transfers and sending money within seconds
          </p>
        </div>
        <div>
          <img src={imgPhonton} alt="" />
          <h3>Photon</h3>
          <p>
            A state-of-the-art music player with high-resolution audio and DSP
            effects
          </p>
        </div>
        <div>
          <img src={imgBuilder} alt="" />
          <h3>Builder</h3>
          <p>Connects users with local contractors based on their location</p>
        </div>
        <div>
          <img src={imgBlogr} alt="" />
          <h3>Blogr</h3>
          <p>Blogr is a platform for creating an online blog or publication</p>
        </div>
        <div>
          <img src={imgCamp} alt="" />
          <h3>Camp</h3>
          <p>
            Get expert training in coding, data, design, and digital marketing
          </p>
        </div>
      </section>
    </main>
  );
};

export default WebDesign;
