import { useState } from "react";
import WorkingHours from "../WorkingHours/WorkingHours";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
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
            <EllipsisText
              text={address ? address : "Only online"}
              maxLines={3}
              className={css.text}
            />
          </div>

          <div className={css.addressItem}>
            <span className={css.label}>Phone: </span>
            <a href={`tel:${phone}`} className={css.link}>
              {phone}
            </a>
          </div>
        </div>
      </div>
      <div className={css.workDaysContainer}>
        <WorkingHours workingDays={workDays} />
      </div>
      {showMap && <ModalWrapper onClose={handleClose}></ModalWrapper>}
    </div>
  );
};

export default FriendsItem;
