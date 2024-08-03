import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";
import {
  successNotify,
  errNotify,
} from "../../../auxiliary/notification/notification";

import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import { logOut } from "../../../redux/auth/operations";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

export default function AuthButton({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  const handleButton = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleApprove = () => {
    dispatch(logOut())
      .unwrap()
      .then((data) => {
        console.log(data);
        successNotify("success logout");
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
        background={isHomePage ? "transparent" : "primary"}
        uppercase={true}
        width={isLoggedIn ? "136px" : "119px"}
      >
        {children}
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
