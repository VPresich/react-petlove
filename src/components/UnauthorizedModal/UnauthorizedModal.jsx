import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Emodzi from "../UI/Emodzi/Emodzi";
import css from "./UnauthorizedModal.module.css";

const UnauthorizedModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    onClose();
  };

  const handleRegistration = () => {
    navigate("/register");
    onClose();
  };

  return (
    <React.Fragment>
      <form className={css.form}>
        <div className={css.titleWrapper}>
          <Emodzi>🐶</Emodzi>
          <p className={css.title}>Attention</p>
          <p className={css.subtitle}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
        <div className={css.buttons}>
          <Button onClick={handleLogin} type="button">
            Login
          </Button>
          <Button
            onClick={handleRegistration}
            type="button"
            background="secondary"
          >
            Registration
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UnauthorizedModal;
