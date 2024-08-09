import { useForm, FormProvider, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button/Button";
import Image from "../../../UI/Image/Image";
import UserIcon from "../../../UI/UserIcon/UserIcon";
import Input from "../../../UI/Input/Input";
import UploadFileButton from "../../../UI/UploadFileButton/UploadFileButton";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectUser } from "../../../../redux/auth/selectors";
import iconsPath from "../../../../assets/img/icons.svg";
import css from "./EditUserForm.module.css";

const EditUserForm = ({ handleEdit }) => {
  const { name, email, phone, avatarURL } = useSelector(selectUser);

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: name,
      email: email,
      phone: phone,
      avatar: avatarURL,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    handleEdit && handleEdit(values);
  };

  const handleEditAvatar = (url) => {
    console.log("URL", url);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <p className={css.title}>Edit information</p>

        <div className={css.photoContainer}>
          {avatarURL ? (
            <Image imgUrl={avatarURL} size="small" />
          ) : (
            <UserIcon size="medium" />
          )}
        </div>
        <div className={css.content}>
          <div className={css.photoInput}>
            <Controller
              name="avatar"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Photo Url"
                  type="text"
                  className={css.inputAvatarUrl}
                />
              )}
            />
            <UploadFileButton
              icon={
                <svg className={css.btnIconContainer} aria-label="heart icon">
                  <use className={css.icon} href={`${iconsPath}#icon-upload`} />
                </svg>
              }
              className={css.uploadBtn}
              onFileSelect={handleEditAvatar}
            >
              Upload photo
            </UploadFileButton>
          </div>

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
              <Input {...field} placeholder="+380" type="text" />
            )}
          />
        </div>
        <Button type="submit" size="large">
          Go to profile
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditUserForm;
