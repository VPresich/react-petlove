import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { saveFilter } from "../../redux/filters/slice";
import { selectTheme } from "../../redux/auth/selectors";
import { selectFilter } from "../../redux/filters/selectors";
import { resetNanniesState } from "../../redux/nannies/slice";

import DropDownSelector from "../UI/DropDownSelector/DropDownSelector";
import css from "./Filters.module.css";

const filters = [
  "A to Z",
  "Z to A",
  "Less than 10$",
  "Greater than 10$",
  "Popular",
  "Not Popular",
  "Show all",
];

const Filters = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);

  const handleFilterChange = (filter) => {
    dispatch(saveFilter(filter));
    dispatch(resetNanniesState());
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={clsx(css.label, css[theme])}>Filters:</p>
        <DropDownSelector
          btnLabel={selectedFilter}
          options={filters}
          selectedOption={selectedFilter}
          onChange={handleFilterChange}
          btnCSSClass={css.btnFilter}
          dropdownCSSClass={css.dropdownFilters}
        />
      </div>
    </div>
  );
};

export default Filters;
