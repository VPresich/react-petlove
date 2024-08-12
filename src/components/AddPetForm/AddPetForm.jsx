import { useForm, FormProvider, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../UI/Button/Button";
import ImageElem from "../UI/ImageElem/ImageElem";
import IconElem from "../UI/IconElem/IconElem";
import DropDownSelector from "../UI/DropDownSelector/DropDownSelector";
import Input from "../UI/Input/Input";
import { selectPetTypes } from "../../redux/notices/selectors";
import UploadFileButton from "../UI/UploadFileButton/UploadFileButton";
import DatePickerInput from "../UI/DatePickerField/DatePickerField";
import GenderGroup from "../UI/GenderGroup/GenderGroup";
import { feedbackSchema } from "./feedbackSchema";
import { capitalizeFirstLetter } from "../../auxiliary/formats";

import iconsPath from "../../assets/img/icons.svg";
import css from "./AddPetForm.module.css";

const options = ["female", "male", "multiple"];

const AddPetForm = ({ handleAddPet }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const types = useSelector(selectPetTypes);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: "",
      title: "",
      imgURL: "",
      species: "",
      birthday: "",
      sex: "unknown",
    },
  });

  const { handleSubmit, setValue, watch } = methods;
  const imgURL = watch("imgURL");

  const onSubmit = (values) => {
    console.log("Submite :", values);
    handleAddPet && handleAddPet(values);
  };

  const handleImgUrl = (url) => {
    setValue("imgURL", url);
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.titleContainer}>
          <span className={css.title}>Add my pet /</span>
          <span className={css.subTitle}>Personal details</span>
        </div>
        <GenderGroup
          name="sex"
          options={options}
          className={css.genderGroupe}
        />
        <div className={css.photoContainer}>
          {imgURL ? (
            <ImageElem imgUrl={imgURL} containerClass={css.imgContainer} />
          ) : (
            <IconElem iconId="icon-pet" containerClass={css.imgContainer} />
          )}
        </div>
        <div className={css.content}>
          <div className={css.photoInput}>
            <Controller
              name="imgURL"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter image Url"
                  type="text"
                  className={css.inputAvatarUrl}
                />
              )}
            />
            <UploadFileButton
              icon={
                <svg className={css.btnIconContainer} aria-label="Upload icon">
                  <use className={css.icon} href={`${iconsPath}#icon-upload`} />
                </svg>
              }
              className={css.uploadBtn}
              onFileSelect={handleImgUrl}
              isUploadToServer={false}
            >
              Upload photo
            </UploadFileButton>
          </div>

          <Controller
            name="title"
            control={methods.control}
            render={({ field }) => (
              <Input {...field} placeholder="Title" type="text" />
            )}
          />
          <Controller
            name="name"
            control={methods.control}
            render={({ field }) => (
              <Input {...field} placeholder="Pet's Name" type="text" />
            )}
          />
          <div className={css.inputsWrapper}>
            <Controller
              name="birthday"
              control={methods.control}
              render={({ field }) => (
                <DatePickerInput
                  {...field}
                  // name="birthday"
                  setValue={setValue}
                  value={field.value}
                />
              )}
            />
            <div className={css.dropdownWrapper}>
              <Controller
                name="species"
                control={methods.control}
                render={({ field }) => (
                  <DropDownSelector
                    {...field}
                    btnLabel={
                      capitalizeFirstLetter(field.value) || "Type of pet"
                    }
                    options={types}
                    selectedOption={field.value}
                    formControl={field}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={css.buttons}>
          <Button
            onClick={handleCancel}
            type="button"
            width={viewportWidth > 767 ? "170px" : "100px"}
            background="cancel"
          >
            Back
          </Button>
          <Button type="submit" width={viewportWidth > 767 ? "170px" : "100px"}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddPetForm;
