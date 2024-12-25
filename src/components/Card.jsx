import arrowIcon from '@/assets/shared/desktop/icon-right-arrow.svg';

const Card = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h3 className="text-2xl font-semibold mx-12 lg:mx-24 md:mx-52 z-20">
        {title}
      </h3>
      <p className="mx-12 mt-3 text-lg lg:mx-28 md:mx-52 z-20 lg:text-sm">
        {description}{' '}
        <span className="inline-block">
          {' '}
          <img src={arrowIcon} alt="right-arrow" className="ml-4 z-20" />
        </span>
      </p>
    </div>
  );
};

export default Card;
