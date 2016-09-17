import React, {PropTypes, Component} from 'react';
import CalendarItem from './CalendarItem.jsx';

class Calendar extends Component {

  render(
    
  )
  return (
      <div className="calendar">
        <div className="header">Kalender</div>
        <div className="week-header">
          <span className="img-icon img-icon-calendar"></span>Uke 43
        </div>
        <ul className="calendar-list">
          <CalendarItem
            day={'Mandag'}
            date={'26 september'}
            person={'Andreas'}
            activity={'Fotball'}
            time={'17:00'}
          />
          <CalendarItem
            day={'Lørdag'}
            date={'4 Oktober'}
            person={'Maria'}
            activity={'Ballett'}
            time={'11:00'}
          />
        </ul>
        <button className="button">
          Oppdater
        </button>
      </div>
  );
}

export default Calendar;





