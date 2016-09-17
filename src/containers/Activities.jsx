import React, {PropTypes} from 'react';
import Link from './Link.jsx';

function Activities() {
  return (
    <div>
      <div className="header">Aktiviteter</div>
      <div className="content">
        <div >
          <ul className="activity-list">
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" activated={true} />
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" activated={false}/>
            <AcitivityItem name="Fotballtrening G13" organization="Fotballklubben FK" activated={false}/>
          </ul>
          </div>
      </div>
    </div>
  );
}

function AcitivityItem({name, organization, activated}){
  console.log(activated);
  return (
    <li className="acitivity-list-item clearfix">
      <div className="activity-item-left-content">
        <h4 className="activity-item-header">{name}</h4>
        <p className="activity-faded-text">{organization}</p>
      </div>
        <div className="activity-item-right-content">
        <button onClick='{() => {activated = !activated}}' className="{activated ? 'activated' : 'disabled' }">
          {activated ? 'activated' : 'disabled'}
        </button>
      </div>
    </li>
  )
}

export default Activities;
