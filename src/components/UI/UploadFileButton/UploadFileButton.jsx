import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadImage, updateUserInfo } from "../../../redux/auth/operations";
import { errNotify } from "../../../auxiliary/notification/notification";
import css from "./UploadFileButton.module.css";

const UploadFileButton = ({
  children,
  icon = null,
  isUploadToServer = true,
  onFileSelect,
  className,
}) => {
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
          if (isUploadToServer) {
            dispatch(updateUserInfo({ avatar: result }));
          }
          onFileSelect && onFileSelect(result);
        })
        .catch(() => {
          errNotify("Error upload avatar");
        });
    }
  };

  return (
    <>
      <button type="button" onClick={handleButtonClick} className={className}>
        {children}
        {icon && icon}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={css.inputFile}
      />
    </>
  );
};

export default UploadFileButton;
