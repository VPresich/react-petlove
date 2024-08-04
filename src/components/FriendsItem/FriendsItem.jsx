import { useState } from "react";
import WorkingHours from "../WorkingHours/WorkingHours";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import LogoFriend from "../LogoFriend/LogoFriend";
import css from "./FriendsItem.module.css";

const FriendsItem = ({ item }) => {
  const { imageUrl, title, address, email, phone, workDays } = item;
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setShowMap(true);
  };
  const handleClose = () => {
    setShowMap(false);
  };

  return (
    <div className={css.container}>
      <LogoFriend logoUrl={imageUrl} altText={`Logo of ${title}`} />
      <div className={css.infoWrapper}>
        <WorkingHours workingDays={workDays} />

        <span className={css.title}>{title} </span>
        <div className={css.addressContainer}>
          <div className={css.addressItem}>
            <span className={css.label}>Email: </span>
            <a href={`mailto:${email}`} className={css.link}>
              {email}
            </a>
          </div>

          <div onClick={handleClick} className={css.addressItem}>
            <span className={css.label}>Address: </span>
            <span className={css.text}>{address}</span>
          </div>

          <div className={css.addressItem}>
            <span className={css.label}>Phone: </span>
            <span className={css.text}>{phone} </span>
          </div>
        </div>
      </div>

      {showMap && <ModalWrapper onClose={handleClose}></ModalWrapper>}
    </div>
  );
};

export default FriendsItem;
