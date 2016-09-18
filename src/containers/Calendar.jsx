import React, {PropTypes, Component} from 'react';
import CalendarItem from './CalendarItem.jsx';
import Link from './Link.jsx'
import db from './Firebase.jsx';

let ref = db.ref('newActivity');
let ref2 = db.ref('newActivity2');

const newActivity = [
  {
    day: 'Tirsdag',
    date: '30 Oktober',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '17:00',
    location: 'Ekebergsletta',
    week: 35,
  },
  {
    day: 'Onsdag',
    date: '10 November',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '17:00',
    location: 'Drammen',
    week: 35,
  },
  {
    day: 'Søndag',
    date: '15 November',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '13:00',
    location: 'Hasle kunstrgress',
    week: 36,
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
          week: 34
        },
        {
          day: 'Lørdag',
          date: '1 oktober',
          person: 'Maria',
          activity: 'Moderne dans',
          time: '11:00',
          week: 35
        }
      ],
      counter: 0
    };

    var that = this;
    ref.on('value', snapshot => {
      if(snapshot.val().enabled){
        that.test();
      }
    });
    ref2.on('value',value =>{
        if(value.val()){
          that.test();
        }
    });
    this.test = this.test.bind(this);
  }

  test() {
    this.setState({
        calenderItems: [...this.state.calenderItems,  newActivity[this.state.counter]],
        counter: this.state.counter + 1,
    });
  }

  render() {
    const compareItems = (a, b) => {
      return a.week > b.week
    }
    console.log('Yo');
    return (
      <div className="calendar">
        <div className="header">
          <Link to="/activities" className="button"></Link>
          Kalender
        </div>
        <div className="week-header">
          <span className="img-icon img-icon-calendar"></span>Uke 43
        </div>
        <ul className="calendar-list">
          {this.state.calenderItems.sort(compareItems).map(item =>
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
