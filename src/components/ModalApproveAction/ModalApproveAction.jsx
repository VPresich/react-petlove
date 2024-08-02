import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button/Button";
import Emodzi from "../UI/Emodzi/Emodzi";
import css from "./ModalApproveAction.module.css";

const ModalApproveAction = ({ onCancel, onApprove }) => {
  const { handleSubmit } = useForm();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onApprove)} className={css.form}>
        <div className={css.titleWrapper}>
          <Emodzi>🐈</Emodzi>
          <p className={css.title}>Already leaving?</p>
        </div>
        <div className={css.buttons}>
          <Button type="submit" size="sxsmall" width="137px">
            Yes
          </Button>
          <Button
            onClick={onCancel}
            type="button"
            size="sxsmall"
            background="cancel"
            width="134px"
          >
            Cancel
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalApproveAction;

// const size = ["large", "medium", "small", "sxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel"];
// const uppercase = true;
