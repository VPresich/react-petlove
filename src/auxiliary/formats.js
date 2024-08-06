export default function formatNumber(value) {
  return `${value.toFixed(1)}`;
}

export const capitalizeFirstLetter = (string) => {
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
