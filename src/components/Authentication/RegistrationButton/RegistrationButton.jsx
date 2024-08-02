import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import Button from "../../UI/Button/Button";

const RegistrationButton = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  if (isLoggedIn) return null;

  const handleButton = () => {
    navigate("/register");
  };

  return (
    <Button
      onClick={handleButton}
      size="medium"
      background="secondary"
      uppercase={true}
      width="149px"
    >
      Registration
    </Button>
  );
};

export default RegistrationButton;
