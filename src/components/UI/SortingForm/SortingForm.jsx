import { useEffect } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import RadioGroup from "../RadioGroup/RadioGroup";

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
      <RadioGroup name="sort" options={options} />
    </FormProvider>
  );
};

export default SortingForm;
