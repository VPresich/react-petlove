import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { errNotify } from "../../../auxiliary/notification/notification";

import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import { logOut } from "../../../redux/auth/operations";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

export default function AuthButton({ widthBtn, background, handleClick }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleButton = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
    handleClick && handleClick();
  };
  const handleApprove = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        handleClick && handleClick();
      })
      .catch(() => {
        errNotify("error logout");
      });
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        onClick={handleButton}
        size="medium"
        background={background}
        uppercase={true}
        width={widthBtn}
      >
        {isLoggedIn ? "Logout" : "Log In"}
      </Button>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <ModalApproveAction
            onCancel={handleClose}
            onApprove={handleApprove}
          />
        </ModalWrapper>
      )}
    </>
  );
}
