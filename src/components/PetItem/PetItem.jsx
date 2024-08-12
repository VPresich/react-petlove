import { useDispatch } from "react-redux";
import { removePetById } from "../../redux/favorites/operations";

import KindList from "../KindList/KindList";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ImageElem from "../UI/ImageElem/ImageElem";
import iconsPath from "../../assets/img/icons.svg";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";

import css from "./PetItem.module.css";

const kinds = ["name", "birthday", "sex", "species"];

const PetItem = ({ pet }) => {
  const { _id, title, imgURL } = pet;
  const dispatch = useDispatch();

  const handleDeletePet = () => {
    dispatch(removePetById(_id))
      .unwrap()
      .then((data) => {
        console.log("Deleted data: ", data);
        successNotify("Success pet delete");
      })
      .catch(() => {
        errNotify("Error pet delete");
      });
  };

  return (
    <div className={css.container}>
      <ImageElem
        imgUrl={imgURL}
        altText="pet"
        containerClass={css.imgContainer}
      />
      <div className={css.infoWrapper}>
        <EllipsisText text={title} maxLines={1} className={css.title} />
        <KindList
          kinds={kinds}
          notice={pet}
          containerClass={css.kindsWrapper}
        />
      </div>
      <button onClick={handleDeletePet} className={css.deleteBtn}>
        <svg className={css.icon} aria-label="Delete icon">
          <use href={`${iconsPath}#icon-trash`} />
        </svg>
      </button>
    </div>
  );
};

export default PetItem;
