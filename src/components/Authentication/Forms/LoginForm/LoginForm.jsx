import { useForm, FormProvider, Controller } from "react-hook-form";
import Button from "../../../UI/Button/Button";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./LoginForm.module.css";
import Input from "../../../UI/Input/Input";

export default function LoginForm({ handleLogin }) {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (values) => {
    try {
      await handleLogin(values);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <div className={css.inputsWrapper}>
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
          </div>
          <Button type="submit">Log in</Button>
        </div>
      </form>
    </FormProvider>
  );
}
