import css from "./WorkingHours.module.css";
import formatWorkDays from "../../auxiliary/formatWorkDays";

const WorkingHours = ({ workingDays }) => {
  const formattedWorkDays = formatWorkDays(workingDays);

  return (
    <div className={css.workingHours}>
      {formattedWorkDays.map((dayInfo, index) => (
        <div key={index} className={css.day}>
          <span className={css.info}>{dayInfo}</span>
        </div>
      ))}
    </div>
  );
};

export default WorkingHours;
