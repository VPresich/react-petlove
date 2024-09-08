import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import { addPet } from "../../redux/favorites/operations";

import DocumentTitle from "../../components/DocumentTitle";
import imgDesktop1x from "../../assets/img/add-pet/pet-desktop@1x.png";
import imgDesktop2x from "../../assets/img/add-pet/pet-desktop@2x.png";

import imgTablet1x from "../../assets/img/add-pet/pet-tablet@1x.png";
import imgTablet2x from "../../assets/img/add-pet/pet-tablet@2x.png";

import imgMobile1x from "../../assets/img/add-pet/pet-mobile@1x.png";
import imgMobile2x from "../../assets/img/add-pet/pet-mobile@2x.png";

import { errNotify } from "../../auxiliary/notification/notification";
import css from "./AddPetPage.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgTablet1x,
  imgTablet2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Pet photo",
};

const AddPetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPet = (values) => {
    dispatch(addPet(values))
      .unwrap()
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        errNotify("Error in adding");
      });
  };

  return (
    <>
      <DocumentTitle>Add pet page</DocumentTitle>
      <section className={css.container}>
        <h2 className="visually-hidden"> Add pet page</h2>
        <div className={css.imgContainer}>
          <ResponsiveImage imageData={imageData} />
        </div>
        <AddPetForm handleAddPet={handleAddPet} />
      </section>
    </>
  );
};
export default AddPetPage;
