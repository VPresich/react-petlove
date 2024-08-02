export default function formatNumber(value) {
  return `${value.toFixed(1)}`;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
