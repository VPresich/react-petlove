import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import InputWithButton from "../InputWithButton/InputWithButton";

const SearchForm = ({ onSearch, initTopic = "" }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      topic: initTopic,
    },
  });

  const onSubmit = (data) => {
    const topic = data.topic.trim();
    console.log(topic);
    onSearch(topic);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputWithButton
          name="topic"
          placeholder="Search"
          type="text"
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
};
export default SearchForm;
