import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Button from "../../components/UI/Button/Button";
import Image from "../UI/Image/Image";
import UserIcon from "../UI/UserIcon/UserIcon";
import AuthButton from "../Authentication/AuthButton/AuthButton";
import ModalWrapper from "../../components/UI/ModalWrapper/ModalWrapper";
import EditUserForm from "../Authentication/Forms/EditUserForm/EditUserForm";
import { uploadImage, updateUserInfo } from "../../redux/auth/operations";
import iconsPath from "../../assets/img/icons.svg";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";

import css from "./UserCard.module.css";

const UserCard = () => {
  const { name, phone, email, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [showUserModal, setShowUserModal] = useState(false);

  const fileInputRef = useRef(null);

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

  const handleUploadPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(uploadImage(file))
        .unwrap()
        .then((result) => {
          dispatch(updateUserInfo({ avatar: result }))
            .unwrap()
            .catch(() => {
              errNotify("Error update avatar");
            });
        })
        .catch(() => {
          errNotify("Error upload avatar");
        });
    }
  };

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
        <div>
          <button
            onClick={handleUserModaleOpen}
            type="button"
            className={css.editBtn}
          >
            <svg className={css.iconEdit} aria-label="Edit icon">
              <use href={`${iconsPath}#icon-edit`} />
            </svg>
          </button>
        </div>
      </div>
      <div className={css.photoContainer}>
        {avatarURL ? (
          <Image imgUrl={avatarURL} size="medium" />
        ) : (
          <div className={css.uploadWrapper}>
            <UserIcon />
            <button
              className={css.uploadBtn}
              type="button"
              onClick={handleUploadPhoto}
            >
              Upload photo
            </button>
            <input
              className={css.inputFile}
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        )}
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
      </div>
      <AuthButton widthBtn="114px" background="secondary" size="medium" />
      {showUserModal && (
        <ModalWrapper onClose={handleUserModaleClose}>
          <EditUserForm handleEdit={handleUserEdit} />
        </ModalWrapper>
      )}
    </div>
  );
};
export default UserCard;
