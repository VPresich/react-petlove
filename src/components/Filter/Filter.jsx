import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect, useCallback } from "react";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import LocationSearch from "../../components/UI/LocationSearch/LocationSearch";
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
      dispatch(saveKeyword(topic));
      dispatch(resetNoticesState());
    },
    [dispatch]
  );

  const handleLocationSearch = useCallback(
    (location) => {
      dispatch(saveLocation(location));
      dispatch(resetNoticesState());
    },
    [dispatch]
  );

  const handleCategoryChange = useCallback(
    (category) => {
      dispatch(saveCategory(category));
      dispatch(resetNoticesState());
      dispatch(resetSorting());
    },
    [dispatch]
  );

  const handleGenderChange = useCallback(
    (gender) => {
      dispatch(saveSex(gender));
      dispatch(resetNoticesState());
    },
    [dispatch]
  );

  const handleTypeChange = useCallback(
    (type) => {
      dispatch(saveSpecies(type));
      dispatch(resetNoticesState());
    },
    [dispatch]
  );

  const handleSorting = useCallback(
    (selectedValue) => {
      dispatch(saveSortParam(selectedValue));
      dispatch(resetNoticesState());
    },
    [dispatch]
  );

  const handleReset = () => {
    dispatch(resetFilters());
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

          <LocationSearch
            onSearch={handleLocationSearch}
            initlocation={memoizedLocation}
            className={css.locationContainer}
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
