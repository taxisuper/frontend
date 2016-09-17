import React, {PropTypes} from 'react';
import Link from './Link.jsx';

function Activities() {
  return (
    <div>
      <div className="header">Aktiviteter</div>
      <div className="content">
        <div >
          <ul className="activity-list">
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" />
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" />
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" />
          </ul>
          </div>
      </div>
    </div>
  );
}

function AcitivityItem({name, organization}){
  return (
    <li className="acitivity-list-item">
      <p><strong>{name}</strong></p>
      <p>{organization}</p>
      <input type="checkbox" />
    </li>
  )
}

export default Activities;
