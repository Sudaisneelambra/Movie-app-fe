import styles from './Rating.module.css';

const Rating = ({setrating,rating}) => {

  const handleStarClick = (index) => {
    if (setrating) {
        setrating(index + 1);
      }
  };

  return (
    <div className="star-rating space-x-1">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fa fa-star ${i<rating ? styles['yellowStar']:''}` }
          onClick={() => handleStarClick(i)} 
        ></i>
      ))}
    </div>
  );
};

export default Rating;
