import Star from "../Star/Star";
import css from "./Stars.module.css";

export default function Stars({ value }) {
  const maxStars = 5;
  const filledStarsCount = Math.round(value);
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isFilled = index < filledStarsCount;
    return <Star key={index} isFilled={isFilled} />;
  });

  return <ul className={css.container}>{stars}</ul>;
}
