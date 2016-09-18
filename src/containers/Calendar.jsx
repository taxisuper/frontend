import React, {PropTypes, Component} from 'react';
import CalendarItem from './CalendarItem.jsx';
import Link from './Link.jsx'
import db from './Firebase.jsx';

let ref = db.ref('a3');
let ref2 = db.ref('newActivity2');

const newActivity = [
  {
    day: 'Torsdag',
    date: '30 Oktober',
    person: 'Andreas',
    activity: 'Basketball',
    time: '17:00',
    location: 'Manglerudhallen',
    week: 40,
    meDriving: true,
  },
  {
    day: 'Lørdag',
    date: '1. November',
    person: 'Andreas',
    activity: 'FotballCup',
    time: '13:00',
    location: 'Drammen',
    week: 40,
    meDriving: false,
  },
  {
    day: 'Søndag',
    date: '15 November',
    person: 'Andreas',
    activity: 'Fotballkamp',
    time: '13:00',
    location: 'Hasle kunstgress',
    week: 40,
    meDriving: false,
  },
];

const initialCalendarItems = [
  {
    day: 'Mandag',
    date: '26 september',
    person: 'Andreas',
    activity: 'Fotballtrening',
    time: '17:00',
    location: 'Vallhall',
    week: 34,
    meDriving: true,
    driver: 'Larsen'
  },
  {
    day: 'Lørdag',
    date: '1 oktober',
    person: 'Maria',
    activity: 'Moderne dans',
    time: '11:00',
    location: 'Oslo Kulturskole',
    week: 34,
    meDriving: false,
    driver: 'Kari Vik',
  },
  {
    day: 'Mandag',
    date: '3 Oktober',
    person: 'Andreas',
    activity: 'Fotballtrening',
    time: '17:00',
    location: 'Ekebergsletta',
    week: 35,
    meDriving: false,
    driver: 'Ola Ruud',
  },
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calenderItems: initialCalendarItems,
      counter: 0
    };

    var that = this;
    ref.once('value').then(function(snapshot) {
      if(snapshot.val()){
        that.test();
      }
    });
    ref2.once('value').then(function(snapshot) {
      if(snapshot.val()){
        that.test2();
      }
    });
    ref.on('value', snapshot => {
      if(snapshot.val()){
        that.test();
      }
    });
    ref2.on('value',value =>{
        if(value.val()){
          that.test2();
        }
    });
    this.test = this.test.bind(this);
    this.test2 = this.test2.bind(this);
  }

  test() {
    this.setState({
        calenderItems: [...this.state.calenderItems,  newActivity[0]],
      //  counter: this.state.counter + 1,
    });
  }

  test2(){
    this.setState({
        calenderItems: [...this.state.calenderItems,  newActivity[1]],
      //  counter: this.state.counter + 1,
    });
  }


  render() {
    const renderCalenderItemsByWeek = (calenderItems) => {

      const unique = function(xs) {
        return xs.filter(function(x, i) {
          return xs.indexOf(x) === i
        })
      };

      const weeks = calenderItems.map(item => item.week);
      const uniqueWeeks = unique(weeks);
      return uniqueWeeks.map(w => {
        const calenderItemsWithThisWeek = calenderItems.filter(item => item.week === w);
        return(
          <div>
            <div className="week-header">
              <span className="img-icon img-icon-calendar"></span>Uke {w}
            </div>
            <ul className="calendar-list">
            {calenderItemsWithThisWeek.map(item =>
              <CalendarItem
                day={item.day}
                person={item.person}
                date={item.date}
                time={item.time}
                activity={item.activity}
                location={item.location}
                meDriving={item.meDriving}
                driver={item.driver}
                persons={item.persons}
              />)}
              </ul>
            </div>
        )
      })
    };

    return (
      <div className="calendar">
        <div className="header">
          <Link to="/activities" className="img-icon img-icon-window-restore"></Link>
          Kalender
        </div>
        {renderCalenderItemsByWeek(this.state.calenderItems)}
      </div>
    );
  }
}

export default Calendar;
