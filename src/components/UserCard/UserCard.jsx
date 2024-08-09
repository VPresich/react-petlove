import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Button from "../../components/UI/Button/Button";
import AuthButton from "../Authentication/AuthButton/AuthButton";
import ModalWrapper from "../../components/UI/ModalWrapper/ModalWrapper";
import EditUserForm from "../Authentication/Forms/EditUserForm/EditUserForm";
import iconsPath from "../../assets/img/icons.svg";

import css from "./UserCard.module.css";

const UserCard = () => {
  const { name, phone, email, imgURL } = useSelector(selectUser);
  const [showUserModal, setShowUserModal] = useState(false);

  const handleUserModaleClose = () => {
    setShowUserModal(false);
  };

  const handleUserModaleOpen = () => {
    setShowUserModal(true);
  };

  const handleUserEdit = (values) => {
    console.log("USEREDITData", values);
    setShowUserModal(false);
  };

  const handleClick = () => {};

  return (
    <div className={css.container}>
      <div className={css.firstLine}>
        <div className={css.titleContainer}>
          <span className={css.title}>User</span>
          <span className={css.iconUseContainer}>
            <svg className={css.iconUser} aria-label="icon man">
              <use href={`${iconsPath}#icon-user`} />
            </svg>
          </span>
        </div>

        <button
          onClick={handleUserModaleOpen}
          type="button"
          className={css.editBtn}
        >
          <svg className={css.iconEdit} aria-label="Edit icon">
            <use href={`${iconsPath}#icon-edit`} />
          </svg>
        </button>

        {/* <NoticeImage
        imgUrl={imgURL}
        auxStyles={css.auxImgContainer}
        name="Topic photo"
      /> */}
      </div>

      <p className={css.infoTitle}></p>
      <div className={css.infoWrapper}>
        <span className={css.item}>{name}</span>
        <span className={css.item}>{email}</span>
        <span className={css.item}>{phone}</span>
      </div>
      <div className={css.addBtnContainer}>
        <span className={css.addTitle}>My pets</span>
        <Button
          size="sxxsmall"
          width="103px"
          icon={
            <svg className={css.iconPlus} aria-label="Plus icon">
              <use href={`${iconsPath}#icon-plus`} />
            </svg>
          }
        >
          Add pets
        </Button>
        <></>
        <AuthButton widthBtn="114px" background="secondary" size="medium" />
      </div>
      {showUserModal && (
        <ModalWrapper onClose={handleUserModaleClose}>
          <EditUserForm handleEdit={handleUserEdit} />
        </ModalWrapper>
      )}
    </div>
  );
};
export default UserCard;
