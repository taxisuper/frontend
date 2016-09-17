import React, {PropTypes} from 'react';
import Link from './Link.jsx'


function DashBoard() {
  return (
    <div className="content">
        <Link to="/activities" className="button">Aktiviteter</Link>
        <Link to="/calendar" className="button">Kalender</Link>
    </div>
  );
}

export default DashBoard;





