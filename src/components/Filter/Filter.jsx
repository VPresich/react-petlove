import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect, useCallback } from "react";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import LocationSelect from "../UI/LocationSelect/LocationSelect";
import DropDownSelector from "../../components/UI/DropDownSelector/DropDownSelector";
import SortingForm from "../../components/UI/SortingForm/SortingForm";
import Button from "../UI/Button/Button";
import { resetNoticesState } from "../../redux/notices/slice";

import {
  saveCategory,
  saveSpecies,
  saveSex,
  saveKeyword,
  saveLocation,
  saveSortParam,
  resetFilters,
} from "../../redux/filters/slice";
import {
  selectCategoriesList,
  selectSpeciesList,
  selectSexList,
} from "../../redux/notices/selectors";
import {
  selectActiveCategory,
  selectActiveSex,
  selectActiveLocation,
  selectActiveSpecies,
  selectActiveKeyword,
  selectSortLabel,
} from "../../redux/filters/selectors";
import HorSeparator from "../../components/UI/HorSeparator/HorSeparator";

import { SELL_SORTING, SORTING } from "./constants";
import { resetSorting } from "../../redux/filters/slice";

import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedSortLabel = useSelector(selectSortLabel);
  const memoizedSelectedSortLabel = useMemo(
    () => selectedSortLabel,
    [selectedSortLabel]
  );

  const categories = useSelector(selectCategoriesList);
  const species = useSelector(selectSpeciesList);
  const sex = useSelector(selectSexList);

  const memoizedCategories = useMemo(() => categories, [categories]);
  const memoizedSpecies = useMemo(() => species, [species]);
  const memoizedSex = useMemo(() => sex, [sex]);

  const selectedCategory = useSelector(selectActiveCategory) || "Show all";
  const selectedSpecies = useSelector(selectActiveSpecies) || "Show all";
  const selectedSex = useSelector(selectActiveSex) || "Show all";
  const memoizedSelectedCategory = useMemo(
    () => selectedCategory,
    [selectedCategory]
  );
  const memoizedSelectedSpecies = useMemo(
    () => selectedSpecies,
    [selectedSpecies]
  );
  const memoizedSelectedSex = useMemo(() => selectedSex, [selectedSex]);

  const keyword = useSelector(selectActiveKeyword);
  const location = useSelector(selectActiveLocation);
  const memoizedKeyword = useMemo(() => keyword, [keyword]);
  const memoizedLocation = useMemo(() => location, [location]);

  const handleSearch = useCallback(
    (topic) => {
      if (topic !== memoizedKeyword) {
        dispatch(saveKeyword(topic));
        dispatch(resetNoticesState());
      }
    },
    [dispatch, memoizedKeyword]
  );

  const handleLocationSearch = useCallback(
    (selectedLocation) => {
      if (selectedLocation && selectedLocation.value !== memoizedLocation) {
        dispatch(saveLocation(selectedLocation.value));
        dispatch(resetNoticesState());
      }
    },
    [dispatch, memoizedLocation]
  );

  const handleCategoryChange = useCallback(
    (category) => {
      if (category !== memoizedSelectedCategory) {
        dispatch(saveCategory(category));
        dispatch(resetNoticesState());
        dispatch(resetSorting());
      }
    },
    [dispatch, memoizedSelectedCategory]
  );

  const handleGenderChange = useCallback(
    (gender) => {
      if (gender !== memoizedSelectedSex) {
        dispatch(saveSex(gender));
        dispatch(resetNoticesState());
      }
    },
    [dispatch, memoizedSelectedSex]
  );

  const handleTypeChange = useCallback(
    (type) => {
      if (type !== memoizedSelectedSpecies) {
        dispatch(saveSpecies(type));
        dispatch(resetNoticesState());
      }
    },
    [dispatch, memoizedSelectedSpecies]
  );

  const handleSorting = useCallback(
    (selectedValue) => {
      if (selectedValue !== memoizedSelectedSortLabel) {
        dispatch(saveSortParam(selectedValue));
        dispatch(resetNoticesState());
      }
    },
    [dispatch, memoizedSelectedSortLabel]
  );

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(resetNoticesState());
    setResetTrigger((prev) => !prev);
  };

  return (
    <>
      <div className={css.filtersContainer}>
        <div className={css.searchLine}>
          <SearchForm
            onSearch={handleSearch}
            initTopic={memoizedKeyword}
            className={css.searchContainer}
          />

          <DropDownSelector
            btnLabel="Category"
            options={memoizedCategories}
            selectedOption={memoizedSelectedCategory}
            onChange={handleCategoryChange}
            className={css.categoryContainer}
          />

          <DropDownSelector
            btnLabel="By gender"
            options={memoizedSex}
            selectedOption={memoizedSelectedSex}
            onChange={handleGenderChange}
            className={css.genderContainer}
          />
          <DropDownSelector
            btnLabel="By Type"
            options={memoizedSpecies}
            selectedOption={memoizedSelectedSpecies}
            onChange={handleTypeChange}
            className={css.typeContainer}
          />

          <LocationSelect
            onLocationSelect={handleLocationSearch}
            className={css.locationContainer}
            resetTrigger={resetTrigger}
          />
        </div>

        <HorSeparator />

        <div className={css.sortLine}>
          <SortingForm
            options={
              selectedCategory.toLowerCase() === "sell" ||
              selectedCategory.toLowerCase() === "show all"
                ? SELL_SORTING
                : SORTING
            }
            handleValues={handleSorting}
            initValue={memoizedSelectedSortLabel}
          />
          <Button
            onClick={handleReset}
            width={viewportWidth > 767 ? "190px" : "100%"}
          >
            Reset filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filter;
