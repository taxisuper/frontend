import React, {PropTypes, Component} from 'react';
import CalendarItem from './CalendarItem.jsx';

const newActivity = [
  {
    day: 'Tirsdag',
    date: '30 Oktober',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '17:00',
    location: 'Ekebergsletta'
  },
  {
    day: 'Onsdag',
    date: '10 November',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '17:00',
    location: 'Drammen',
  },
  {
    day: 'Søndag',
    date: '15 November',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '13:00',
    location: 'Hasle kunstrgress',
  },
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calenderItems: [
        {
          day: 'Mandag',
          date: '26 september',
          person: 'Andreas',
          activity: 'Fotballtrening',
          time: '17:00',
        },
        {
          day: 'Lørdag',
          date: '3 oktober',
          person: 'Maria',
          activity: 'Moderne dans',
          time: '11:00',
        }
      ],
      counter: 0
    };
  }

  render() {
    return (
      <div className="calendar">
        <div className="header">Kalender</div>
        <div className="week-header">
          <span className="img-icon img-icon-calendar"></span>Uke 43
        </div>
        <ul className="calendar-list">
          {this.state.calenderItems.map(item =>
            <CalendarItem
              day={item.day}
              person={item.person}
              date={item.date}
              time={item.time}
              activity={item.activity}
            />)}
        </ul>
        <button className="button" onClick={() => this.setState({
            calenderItems: [...this.state.calenderItems,  newActivity[this.state.counter]],
            counter: this.state.counter + 1,
          })}>
          Oppdater
        </button>
      </div>
    );
  }


}

export default Calendar;





