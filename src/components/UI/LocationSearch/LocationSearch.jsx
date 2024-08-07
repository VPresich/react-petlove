import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import InputWithButton from "../InputWithButton/InputWithButton";

const LocationSearch = ({ onSearch, initLocation = "" }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      location: initLocation,
    },
  });

  const onSubmit = (data) => {
    const topic = data.topic.trim();
    console.log(topic);
    onSearch(topic);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
