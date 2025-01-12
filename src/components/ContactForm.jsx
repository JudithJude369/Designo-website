import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import errorIcon from '@/assets/contact/desktop/icon-error.svg';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactForm = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'UserName must be atleast 3 characters long'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Enter a valid phone number')
      .required(),
    yourMessage: yup.string().required("Can't be empty"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),

    defaultValues: {
      name: '',
      email: '',
      phone: '',
      yourMessage: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
  };
  return (
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
        <p className="gap-2 flex text-sm text-white italic font-medium">
          {errors.name.message}
          <img src={errorIcon} alt="error-img" className="mt-1" />
        </p>
      )}
      <input
        {...register('email')}
        type="text"
        placeholder=" email address"
        className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1 focus:outline-none border-b-2 border-white block text-xl width mt-4 lg:mt-12 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
      />
      {errors.email && (
        <p className="gap-2 flex text-sm text-white italic font-medium">
          {errors.email.message}
          <img src={errorIcon} alt="error-img" className="mt-1" />
        </p>
      )}
      <input
        {...register('phone')}
        type="tel"
        placeholder=" phone"
        className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1  focus:outline-none border-b-2 border-white block text-xl width mt-4 lg:mt-12 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
      />
      {errors.phone && (
        <p className="gap-2 flex text-sm text-white italic font-medium">
          {errors.phone.message}
          <img src={errorIcon} alt="error-img" className="mt-1" />
        </p>
      )}
      <input
        {...register('yourMessage')}
        type="text"
        placeholder="your message"
        className="bg-red-400  text-white leading-tight appearance-none  py-2 px-1 focus:outline-none border-b-2 border-white block  text-xl width mt-12 lg:mt-20 placeholder-white placeholder-opacity-50 placeholder:font-medium placeholder:text-sm placeholder:capitalize"
      />
      {errors.yourMessage && (
        <p className="gap-2 flex text-sm text-white italic font-medium">
          {errors.yourMessage.message}
          <img src={errorIcon} alt="error-img" className="mt-1" />
        </p>
      )}
      <button
        type="submit"
        className=" cursor-pointer font-medium px-10 py-4 text-black rounded-lg bg-white  hover:bg-red-200 focus:bg-red-200 hover:text-white  transition-all ease-in-out uppercase text-sm my-12 "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
