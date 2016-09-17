import React, {PropTypes} from 'react';
import Link from './Link.jsx';

function Calendar() {
  return (
      <div className="calendar">
        <div className="header">Kalender</div>
        <div className="week-header">
          <span className="img-icon img-icon-calendar"></span>Uke 43
        </div>
        <ul className="calendar-list">
          <li className="calendar-element">
            <p><strong>Mandag (20 september)</strong></p>
            <p> <span className="event-name"></span>Fotballtrening - Andreas<br/>
            <a className="event-"></a>
            </p>
          </li>
          <li className="calendar-element">
            <p><strong>Lørdag (26 september) </strong></p>
            <p>Kjør Mats og Lars til fotballkamp i Drammen kl 11:15 <br/>
              Oppstart kl 1230
              <a className="button button-small">Se rute</a>
            </p>
          </li>
        </ul>
        </div>
  );
}

export default Calendar;





