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
  const { control } = methods;
  const selectedValue = useWatch({
    control,
    name: "sort",
  });

  useEffect(() => {
    handleValues(selectedValue);
  }, [selectedValue, handleValues]);

  return (
    <FormProvider {...methods}>
      <form className={css.form}>
        <RadioGroup name="sort" options={options} />
      </form>
    </FormProvider>
  );
};

export default SortingForm;
