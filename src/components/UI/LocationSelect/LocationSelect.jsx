import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectFilteredCities } from "../../../redux/cities/selectors";
import AsyncSelect from "react-select/async";
import { useState, useCallback, useEffect } from "react";
import { customStyles } from "./customStyles";

const LocationSelect = ({ onLocationSelect, className, resetTrigger }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const filteredCities = useSelector((state) =>
    selectFilteredCities(state, inputValue)
  );
  const loadOptions = useCallback(
    (inputValue, callback) => {
      setInputValue(inputValue);
      callback(
        filteredCities.map((city) => ({
          label: city.cityEn,
          value: city._id,
        }))
      );
    },
    [filteredCities]
  );

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onLocationSelect(selectedOption);
  };
  useEffect(() => {
    if (resetTrigger) {
      setInputValue("");
      setSelectedOption(null);
      onLocationSelect(null);
    }
  }, [resetTrigger, onLocationSelect]);

  return (
    <div className={clsx(className)}>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        isClearable
        value={selectedOption}
        placeholder="Location"
        styles={customStyles}
      />
    </div>
  );
};

export default LocationSelect;
