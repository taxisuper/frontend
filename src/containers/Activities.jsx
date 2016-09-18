import React, {PropTypes, Component} from 'react';
import Link from './Link.jsx';

function Activities() {
  return (
    <div>
      <div className="header">
        <Link to="/calendar" className="img-icon img-icon-window-restore"></Link>
        Aktiviteter
      </div>
      <div className="content">
        <div >
          <ul className="activity-list">
            <AcitivityItem name="Fotballtrening G13" organization="Lommedalen FK" activated={true} />
            <AcitivityItem name="Moderne Dans" organization="Oslo Kulturskole" activated={true}/>
            <AcitivityItem name="Fotballtrening G9" organization="Fotballklubben FK" activated={false}/>
          </ul>
          </div>
      </div>
    </div>
  );
}

class AcitivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: this.props.activated
    };
    this.setActivated = this.setActivated.bind(this);
  }

  setActivated(){
    console.log("Clicked!");
    this.setState({activated: !this.state.activated});
  }

  render() {
    const {name, organization} = this.props;
    const {activated} = this.state;
    console.log(activated);
    return (
      <li className="acitivity-list-item clearfix">
        <div className="activity-item-left-content">
          <h4 className="activity-item-header">{name}</h4>
          <p className="activity-faded-text">{organization}</p>
        </div>
          <div className="activity-item-right-content">
          <button onClick={this.setActivated} className={activated ? 'activity-item-button  activated' : 'activity-item-button disabled' }>
            {activated ? 'Aktivert' : 'Deaktivert'}
          </button>
        </div>
      </li>
    );
  }
}
/*function AcitivityItem({name, organization, activated}){
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
}*/

export default Activities;
