import arrowIcon from '@/assets/shared/desktop/icon-right-arrow.svg';

const Card = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p>{description}</p>
      <img src={arrowIcon} alt="right-arrow" />
    </div>
  );
};

export default Card;
