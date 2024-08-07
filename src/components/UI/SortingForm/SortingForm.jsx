import { useEffect } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import RadioGroup from "../RadioGroup/RadioGroup";
import css from "./SortingForm.module.css";

const SortingForm = ({ options, handleValues, initValue = "Oldest" }) => {
  const methods = useForm({
    defaultValues: {
      sort: initValue,
    },
  });

  const { control, setValue } = methods;
  const selectedValue = useWatch({
    control,
    name: "sort",
  });

  useEffect(() => {
    handleValues(selectedValue);
  }, [selectedValue, handleValues]);

  useEffect(() => {
    setValue("sort", initValue);
  }, [initValue, setValue]);

  return (
    <FormProvider {...methods}>
      <form className={css.form}>
        <RadioGroup name="sort" options={options} />
      </form>
    </FormProvider>
  );
};

export default SortingForm;
