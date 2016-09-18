import React, {PropTypes} from 'react';

function CalendarItem({day, date, activity, person, time, location, meDriving, driver='Bent Jensen'}) {
  return (
      <li className="calendar-element">
        <p><span className={meDriving ? 'event-name-active' : 'event-name'}>{day} ({date})</span></p>
         <p>{activity} - {person}</p>
        <p className="activity-metadata">
        <a className="activity-location">Kl {time} {meDriving ? 'Meg' : <span>{driver}</span>} </a>
        </p>
      </li>
  );
}

export default CalendarItem;





