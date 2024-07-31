import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DropDownInput from "../UI/DropDownInput/DropDownInput.jsx";
import Button from "../UI/Button/Button.jsx";
import Input from "../UI/Input/Input.jsx";
import Textarea from "../UI/Textarea/Textarea.jsx";
import { feedbackSchema } from "./feedbackSchema.js";
import { DROPDOWNOPTIONS } from "./constants.js";
import css from "./MakeAppoitmentFormContent.module.css";

export default function MakeAppoitmentFormContent({ nanny, handleValues }) {
  const { avatar_url, name } = nanny;
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      address: "",
      phone: "",
      childage: "",
      time: "",
      email: "",
      parentname: "",
      comment: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    handleValues(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h3 className={css.title}>Make an appointment with a babysitter</h3>
            <p className={css.text}>
              Arranging a meeting with a caregiver for your child is the first
              step to creating a safe and comfortable environment. Fill out the
              form below so we can match you with the perfect care partner.
            </p>
            <div className={css.nannyWrapper}>
              <div className={css.avatarWrapper}>
                <img className={css.img} src={avatar_url} alt={name} />
              </div>
              <div className={css.nameWrapper}>
                <span className={css.nannyLabel}>Your nanny</span>
                <span className={css.nannyName}>{name}</span>
              </div>
            </div>
          </div>

          <div className={css.inputsWrapper}>
            <div className={css.wrapperShortInputs}>
              <Controller
                name="address"
                control={methods.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Address" type="text" />
                )}
              />

              <Controller
                name="childage"
                control={methods.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Child's age" type="text" />
                )}
              />
            </div>
            <div className={css.wrapperShortInputs}>
              <Controller
                name="phone"
                control={methods.control}
                render={({ field }) => (
                  <Input {...field} placeholder="+380" type="text" />
                )}
              />
              <Controller
                name="time"
                control={methods.control}
                render={({ field }) => (
                  <DropDownInput
                    {...field}
                    options={DROPDOWNOPTIONS}
                    placeholder="00:00"
                  />
                )}
              />
            </div>

            <Controller
              name="email"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" type="text" />
              )}
            />

            <Controller
              name="parentname"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Father's or mother's name"
                  type="text"
                />
              )}
            />
            <Controller
              name="comment"
              control={methods.control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Comment" />
              )}
            />
          </div>
          <Button type="submit" btnAuxStyles={css.btnAuxStyles}>
            Send
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
