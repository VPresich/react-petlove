import { useSelector } from "react-redux";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import LocationSearch from "../../components/UI/LocationSearch/LocationSearch";
import DropDownSelector from "../../components/UI/DropDownSelector/DropDownSelector";
import SortingForm from "../../components/UI/SortingForm/SortingForm";
import HorSeparator from "../../components/UI/HorSeparator/HorSeparator";
import {
  selectCategories,
  selectSex,
  selectSpecies,
} from "../../redux/notices/selectors";
import { SORTING } from "./constants";

import css from "./Filter.module.css";

const Filter = () => {
  const categories = useSelector(selectCategories);
  const species = useSelector(selectSpecies);
  const sex = useSelector(selectSex);

  const handleSearch = (topic) => {
    console.log("SearchTOPIC", topic);
  };

  const handleLocationSearch = (location) => {
    console.log("LOCATION", location);
  };

  const handleCategoryChange = (category) => {
    // console.log("CATEGORY:", category);
  };
  const handleGenderChange = (gender) => {
    // console.log("GENDER:", gender);
  };
  const handleTypeChange = (type) => {
    // console.log("TYPE:", type);
  };

  const handleSorting = (selectedValue) => {
    // console.log("Sorting", selectedValue);
  };

  return (
    <>
      <div className={css.filtersContainer}>
        <div className={css.searchContainer}>
          <SearchForm onSearch={handleSearch} />
        </div>

        <div className={css.categoryContainer}>
          <DropDownSelector
            btnLabel="Category"
            options={categories}
            selectedOption="Show all"
            onChange={handleCategoryChange}
          />
        </div>

        <div className={css.genderContainer}>
          <DropDownSelector
            btnLabel="By gender"
            options={sex}
            selectedOption="Show all"
            onChange={handleGenderChange}
          />
        </div>

        <div className={css.typeContainer}>
          <DropDownSelector
            btnLabel="By Type"
            options={species}
            selectedOption="Show all"
            onChange={handleTypeChange}
          />
        </div>

        <div className={css.locationContainer}>
          <LocationSearch onSearch={handleLocationSearch} />
        </div>

        <HorSeparator />

        <SortingForm options={SORTING} handleValues={handleSorting} />
      </div>
    </>
  );
};

export default Filter;
