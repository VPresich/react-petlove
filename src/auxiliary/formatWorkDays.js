const formatWorkDays = (workDays) => {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  if (!workDays || workDays.length === 0) {
    return ["Day and night"];
  }

  const groupedDays = workDays.reduce((acc, day, index) => {
    if (day.isOpen) {
      const timeRange = `${day.from} - ${day.to}`;
      if (!acc[timeRange]) {
        acc[timeRange] = [];
      }
      acc[timeRange].push(daysOfWeek[index]);
    }
    return acc;
  }, {});

  return Object.entries(groupedDays).map(([timeRange, days]) => {
    const daysString =
      days.length > 1 ? `${days[0]}-${days[days.length - 1]}` : days[0];
    return `${daysString}: ${timeRange}`;
  });
};

export default formatWorkDays;
