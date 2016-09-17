import React, {PropTypes} from 'react';
import Link from './Link.jsx';

function Calendar() {
  return (
    <div className="content">
      <div className="calendar-list">
        <ul>
          <li>
            <p><strong>Mandag</strong></p>
            <p>Kjør Lise, Birgitte og Mats til ballet kl 16:15 <br/>
                Oppstart kl 17
               <a className="button button-small">Se rute</a>
            </p>
          </li>
          <li>
            <p><strong>Lørdag</strong></p>
            <p>Kjør Mats og Lars til fotballkamp i Drammen kl 11:15 <br/>
              Oppstart kl 1230
              <a className="button button-small">Se rute</a>
            </p>
          </li>
        </ul>
        </div>
    </div>
  );
}

export default Calendar;





