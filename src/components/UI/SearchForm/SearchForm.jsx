import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import InputWithButton from "../InputWithButton/InputWithButton";

const SearchForm = ({ onSearch }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      topic: "",
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
          name="topic"
          placeholder="Search articles..."
          type="text"
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
};
export default SearchForm;
