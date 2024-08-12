export default function formatNumber(value) {
  return `${value.toFixed(1)}`;
}

export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDate = (inputDate) => {
  const [year, month, day] = inputDate.split("-");
  return `${day}.${month}.${year}`;
};

export function getDateWithFormat(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function toLowerCase(obj) {
  const newObj = {};
  for (let key in obj) {
    const lowerValue =
      typeof obj[key] === "string" ? obj[key].toLowerCase() : obj[key];

    newObj[key] = lowerValue;
  }
  return newObj;
}
