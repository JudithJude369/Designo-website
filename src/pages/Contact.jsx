import ContactForm from '@/components/ContactForm';
import Location from '@/components/Location';

const Contact = () => {
  return (
    <main className="lg:px-20 lg:py-8 py-0.5">
      <section className="bg-red-400 text-white text-center lg:text-left  lg:flex lg:gap-4  lg:rounded-3xl">
        <div className="text-white  lg:w-1/2 px-8 lg:px-12 lg:py-32 py-12">
          <h1 className="font-semibold text-3xl lg:text-4xl capitalize">
            Contact us
          </h1>
          <p className="mt-4 lg:pb-0">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactForm />
      </section>
      <section className="mt-40">
        <Location />
      </section>
    </main>
  );
};

export default Contact;
