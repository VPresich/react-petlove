export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    borderRadius: "30px",
    border: state.isFocused
      ? "1px solid var(--orange)"
      : "1px solid rgba(38, 38, 38, 0.15)",
    padding: "0 12px",
    height: "42px",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.29,
    letterSpacing: "-0.03em",
    color: "rgba(38, 38, 38, 0.8)",
    backgroundColor: "var(--white)",
    outline: "none",
    cursor: state.isFocused ? "text" : "pointer",
    transition: "border-color 0.5s ease-in-out",
    "&:hover": {
      borderColor: "var(--orange)",
      cursor: "pointer",
    },
    "&:focus": {
      borderColor: "var(--orange)",
      outline: "none",
      boxShadow: "none",
    },
    "@media screen and (min-width: 768px)": {
      padding: "0 16px",
      height: "48px",
      fontSize: "16px",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(38, 38, 38, 0.5)",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--orange)" : "transparent",
    color: state.isFocused ? "white" : "rgba(38, 38, 38, 0.8)",
    "&:hover": {
      backgroundColor: "var(--orange)",
      color: "white",
    },
  }),
};
