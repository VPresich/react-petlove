import { useForm, FormProvider, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button/Button";
import Image from "../../../UI/Image/Image";
import UserIcon from "../../../UI/UserIcon/UserIcon";
import Input from "../../../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./EditUserForm.module.css";
import { selectUser } from "../../../../redux/auth/selectors";

const EditUserForm = ({ handleEdit }) => {
  const { name, email, phone, avatarURL } = useSelector(selectUser);

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: name,
      email: email,
      phone: phone,
      avatarURL: avatarURL,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    try {
      await handleEdit(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditAvatar = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <p className={css.title}>Edit information</p>
        <div className={css.content}>
          <div className={css.photoContainer}>
            {avatarURL ? (
              <Image imgUrl={avatarURL} isSmall={false} />
            ) : (
              <UserIcon />
            )}
            <div className={css.photoInput}>
              <Controller
                name="photoUrl"
                control={methods.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Photo Url" type="text" />
                )}
              />

              {/* <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          /> */}
              <button
                type="button"
                onClick={handleEditAvatar}
                className={css.editAvatarBtn}
              >
                +
              </button>
            </div>
          </div>

          <div className={css.inputsWrapper}>
            <Controller
              name="name"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Name" type="text" />
              )}
            />
            <Controller
              name="email"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" type="text" />
              )}
            />
            <Controller
              name="phone"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Phone" type="text" />
              )}
            />
          </div>
          <Button type="submit" size="large">
            Go to profile
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditUserForm;
