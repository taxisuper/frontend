import React, {PropTypes} from 'react';

function CalendarItem({day, date, activity, person, time, location}) {
  return (
      <li className="calendar-element">
        <p><strong>{day} ({date})</strong></p>
        <p> <span className="event-name"></span>{activity} - {person}<br/>
        <a className="event">{location} - Kl {time} </a>
        </p>
      </li>
  );
}

export default CalendarItem;





