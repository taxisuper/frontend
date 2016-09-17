import React, {PropTypes} from 'react';

function CalendarItem({day, date, activity, person, time}) {
  return (
      <li className="calendar-element">
        <p><strong>{day} ({date})</strong></p>
        <p> <span className="event-name"></span>{activity} - {person}<br/>
        <a className="event">Kl {time} </a>
        </p>
      </li>
  );
}

export default CalendarItem;





