import { useEffect } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import RadioGroup from "../RadioGroup/RadioGroup";
import css from "./SortingForm.module.css";

const SortingForm = ({ options, handleValues }) => {
  const methods = useForm({
    defaultValues: {
      sort: "popular",
    },
  });

  const { control } = methods;
  const selectedValue = useWatch({
    control,
    name: "sort",
  });

  useEffect(() => {
    handleValues({ sort: selectedValue });
  }, [selectedValue, handleValues]);

  return (
    <FormProvider {...methods}>
      <form className={css.form}>
        <div className={css.container}>
          <RadioGroup name="sort" options={options} />
        </div>
      </form>
    </FormProvider>
  );
};

export default SortingForm;
