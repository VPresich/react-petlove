import { useDispatch } from "react-redux";
import { removePetById } from "../../redux/favorites/operations";

import KindList from "../KindList/KindList";
import ImageElem from "../UI/ImageElem/ImageElem";
import iconsPath from "../../assets/img/icons.svg";

import css from "./PetItem.module.css";

const kinds = ["name", "birthday", "sex", "species"];

const PetItem = ({ pet }) => {
  const { title, imgURL } = pet;
  const dispatch = useDispatch();

  const handleDeletePet = () => {};

  return (
    <div className={css.container}>
      <ImageElem
        imgUrl={imgURL}
        altText="pet"
        containerClass={css.imgContainer}
      />
      <div className={css.infoWrapper}>
        <span className={css.title}>{title}</span>

        <KindList
          kinds={kinds}
          notice={pet}
          containerClass={css.kindsWrapper}
        />
      </div>
      <button className={css.deleteBtn}>
        <svg className={css.icon} aria-label="Delete icon">
          <use href={`${iconsPath}#icon-trash`} />
        </svg>
      </button>
    </div>
  );
};

export default PetItem;
