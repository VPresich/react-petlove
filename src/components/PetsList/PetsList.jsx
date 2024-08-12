import { useSelector } from "react-redux";
import PetItem from "../PetItem/PetItem";
import { selectPets } from "../../redux/favorites/selectors";
import css from "./PetsList.module.css";

const PetsList = () => {
  const pets = useSelector(selectPets);
  if (pets.length === 0) return;
  console.log("Pet:", pets);
  return (
    <ul className={css.container}>
      {pets.map((pet) => (
        <li key={pet._id}>
          <PetItem pet={pet} />
        </li>
      ))}
    </ul>
  );
};

export default PetsList;
