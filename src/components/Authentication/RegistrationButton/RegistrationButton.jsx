import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./RegistrationButton.module.css";

const RegistrationButton = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  if (isLoggedIn) return null;

  const handleButton = () => {
    navigate("/register");
  };

  return (
    <>
      <button onClick={handleButton} className={css.btn}>
        Registration
      </button>
    </>
  );
};

export default RegistrationButton;
