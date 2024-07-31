import { useForm, FormProvider, Controller } from "react-hook-form";

import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./RegisterForm.module.css";

export default function RegisterForm({ handleRegistration }) {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmation: "",
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = async (values) => {
    handleRegistration(values);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
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
              name="password"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Password" type="password" />
              )}
            />
            <Controller
              name="confirmation"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Confirm password"
                  type="password"
                />
              )}
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </FormProvider>
  );
}
