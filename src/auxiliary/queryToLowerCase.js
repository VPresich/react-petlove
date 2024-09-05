export const queryToLowerCase = (query) => {
  if (!query || typeof query !== "object") return {};

  return Object.entries(query).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      const lowerValue = value.toLowerCase().trim();
      if (lowerValue && lowerValue !== "show all") {
        acc[key] = lowerValue;
      }
    } else if (value !== null && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
