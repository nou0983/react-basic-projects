import BirthdayItem from "../birthdayItem/birthdayItem.component";
import { data } from "../../utils/data";
import "./reminderContainer.styles.css";
import { useState } from "react";

const ReminderContainer = () => {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <div className="container">
      <h1>{birthdays.length} birthday today</h1>
      <ul>
        {birthdays.map((birthday) => {
          return <BirthdayItem key={birthday.id} {...birthday} />;
        })}
      </ul>
      <button type="button" onClick={() => setBirthdays([])}>
        clear all
      </button>
    </div>
  );
};

export default ReminderContainer;
