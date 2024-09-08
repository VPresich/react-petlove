import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { updateUserInfo } from "../../redux/auth/operations";
import Button from "../../components/UI/Button/Button";
import UploadFileButton from "../UI/UploadFileButton/UploadFileButton";
import ImageElem from "../UI/ImageElem/ImageElem";
import IconElem from "../UI/IconElem/IconElem";
import PetsList from "../PetsList/PetsList";
import AuthButton from "../Authentication/AuthButton/AuthButton";
import ModalWrapper from "../../components/UI/ModalWrapper/ModalWrapper";
import EditUserForm from "../Authentication/Forms/EditUserForm/EditUserForm";
import { errNotify } from "../../auxiliary/notification/notification";
import iconsPath from "../../assets/img/icons.svg";

import css from "./UserCard.module.css";

const UserCard = () => {
  const { name, phone, email, avatarURL } = useSelector(selectUser);
  const [showUserModal, setShowUserModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserModaleClose = () => {
    setShowUserModal(false);
  };

  const handleUserModaleOpen = () => {
    setShowUserModal(true);
  };

  const handleUserEdit = (data) => {
    dispatch(updateUserInfo(data))
      .unwrap()
      .then(() => {
        setShowUserModal(false);
      })
      .catch(() => {
        errNotify("error user info update");
      });
  };

  const handleUploadPhoto = (/*fileUrl*/) => {
    // console.log("fileURL: ", fileUrl);
  };

  const handleAddPet = () => {
    navigate("/add-pet");
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
      <div className={css.photoContainer}>
        {avatarURL ? (
          <ImageElem
            imgUrl={avatarURL}
            altText={name}
            containerClass={css.imgContainer}
          />
        ) : (
          <div className={css.uploadWrapper}>
            <IconElem
              containerClass={css.imgContainer}
              iconClass={css.iconAvatar}
            />
            <UploadFileButton
              className={css.uploadBtn}
              onFileSelect={handleUploadPhoto}
            >
              Upload photo
            </UploadFileButton>
          </div>
        )}
      </div>

      <p className={css.infoTitle}>My information</p>
      <div className={css.infoWrapper}>
        <span className={css.item}>{name}</span>
        <span className={css.item}>{email}</span>
        <span className={css.item}>{phone}</span>
      </div>
      <div className={css.petSection}>
        <div className={css.addWrapper}>
          <span className={css.addTitle}>My pets</span>
          <Button
            onClick={handleAddPet}
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
        </div>
        <PetsList />
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
