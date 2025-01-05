import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import errorIcon from '@/assets/contact/desktop/icon-error.svg';

const Contact = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Can't be empty"),
    email: yup.string().email().required("Can't be empty"),
    phone: yup
      .string()
      .matches(
        /^1?[ -.]?\(?([2-9][0-9]{2})\)?[ -.]?([2-9][0-9]{2})[ -.]?([0-9]{4})$/
      )
      .required("Can't be empty"),
    yourMessage: yup.string().required("Can't be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mr-16 px-4 lg:px-0 mt-4 lg:mt-12"
        >
          <input
            {...register('name')}
            type="text"
            placeholder="full Name"
            className="bg-red-400 text-white leading-tight appearance-none py-2 px-1 focus:outline-none border-b-2 border-white block text-xl width placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
          />
          {errors.name && (
            <p>
              {errors.name.message}
              <span className="inline-block">
                <img src={errorIcon} alt="error-img" />
              </span>
            </p>
          )}
          <input
            {...register('email')}
            type="text"
            placeholder=" email address"
            className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1 focus:outline-none border-b-2 border-white block text-xl width mt-4 lg:mt-12 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
          />
          {errors.email && (
            <p>
              {errors.email.message}
              <span className="inline-block">
                <img src={errorIcon} alt="error-img" />
              </span>
            </p>
          )}
          <input
            {...register('phone')}
            type="tel"
            placeholder=" phone"
            className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1  focus:outline-none border-b-2 border-white block text-xl width mt-4 lg:mt-12 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
          />
          {errors.phone && (
            <p>
              {errors.phone.message}
              <span className="inline-block">
                <img src={errorIcon} alt="error-img" />
              </span>
            </p>
          )}
          <input
            {...register('yourMessage')}
            type="text"
            placeholder="your message"
            className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1 focus:outline-none border-b-2 border-white block  text-xl width mt-12 lg:mt-20 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
          />
          {errors.yourMessage && (
            <p>
              {errors.yourMessage.message}
              <span className="inline-block">
                <img src={errorIcon} alt="error-img" />
              </span>
            </p>
          )}
          <button
            type="submit"
            className=" cursor-pointer font-medium px-10 py-4 text-black rounded-lg bg-white  hover:bg-red-200 focus:bg-red-200 hover:text-white  transition-all ease-in-out uppercase text-sm my-12 "
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
