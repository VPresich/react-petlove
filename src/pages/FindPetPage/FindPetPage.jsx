import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import LocationSearch from "../../components/UI/LocationSearch/LocationSearch";
import DropDownSelector from "../../components/UI/DropDownSelector/DropDownSelector";
import SortingForm from "../../components/UI/SortingForm/SortingForm";
import HorSeparator from "../../components/UI/HorSeparator/HorSeparator";
import { CATEGORY, GENDER, TYPE, SORTING } from "./constants";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  const handleSearch = (topic) => {
    console.log("SearchTOPIC", topic);
  };

  const handleLocationSearch = (location) => {
    console.log("LOCATION", location);
  };

  const handleCategoryChange = (category) => {
    console.log("CATEGORY:", category);
  };
  const handleGenderChange = (gender) => {
    console.log("GENDER:", gender);
  };
  const handleTypeChange = (type) => {
    console.log("TYPE:", type);
  };

  const handleSorting = (selectedValue) => {
    console.log("Sorting", selectedValue);
  };

  return (
    <>
      <DocumentTitle>Find Pet Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle>Find your favorite pet</PageTitle>
          <div className={css.filtersContainer}>
            <div className={css.searchContainer}>
              <SearchForm onSearch={handleSearch} />
            </div>

            <div className={css.categoryContainer}>
              <DropDownSelector
                btnLabel="Category"
                options={CATEGORY}
                selectedOption="Show all"
                onChange={handleCategoryChange}
              />
            </div>

            <div className={css.genderContainer}>
              <DropDownSelector
                btnLabel="By gender"
                options={GENDER}
                selectedOption="Show all"
                onChange={handleGenderChange}
              />
            </div>

            <div className={css.typeContainer}>
              <DropDownSelector
                btnLabel="By Type"
                options={TYPE}
                selectedOption="Show all"
                onChange={handleTypeChange}
              />
            </div>

            <div className={css.locationContainer}>
              <LocationSearch onSearch={handleLocationSearch} />
            </div>

            <SortingForm options={SORTING} handleValues={handleSorting} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FindPetPage;
