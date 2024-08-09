import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadImage, updateUserInfo } from "../../../redux/auth/operations";
import { errNotify } from "../../../auxiliary/notification/notification";
import css from "./UploadFileButton.module.css";

const UploadFileButton = ({ children, icon = null, onFileSelect, styles }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
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
            .then((data) => {
              onFileSelect(data.avatar);
            });
        })
        .catch(() => {
          errNotify("Error upload avatar");
        });
    }
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick} className={styles}>
        {children}
        {icon && icon}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={css.inputFile}
      />
    </div>
  );
};

export default UploadFileButton;
