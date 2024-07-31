import Reviewers from "../Reviewers/Reviewers";
import css from "./CardDetails.module.css";

const CardDetails = ({ nanny }) => {
  const { reviews } = nanny;
  return (
    <div className={css.container}>
      <Reviewers reviews={reviews} />
    </div>
  );
};

export default CardDetails;
