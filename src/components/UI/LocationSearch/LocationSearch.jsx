import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import clsx from "clsx";
import InputWithButton from "../InputWithButton/InputWithButton";

const LocationSearch = ({ onSearch, initLocation = "", className = null }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      location: initLocation,
    },
  });

  const onSubmit = (data) => {
    const topic = data.topic.trim();
    onSearch(topic);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={clsx(className && className)}
      >
        <InputWithButton
          name="location"
          placeholder="Location"
          type="text"
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
};
export default LocationSearch;
