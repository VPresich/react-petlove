import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button/Button";
import css from "./ModalApproveAction.module.css";

const ModalApproveAction = ({ onCancel, onApprove }) => {
  const { handleSubmit } = useForm();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onApprove)} className={css.form}>
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h3 className={css.title}>Approved Action</h3>
            <p className={css.text}>
              Are you sure you want to log out of your account?
            </p>
          </div>
          <div className={css.buttons}>
            <Button type="submit">Yes</Button>
            <Button
              onClick={onCancel}
              btnAuxStyles={css.cancelBtn}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ModalApproveAction;
