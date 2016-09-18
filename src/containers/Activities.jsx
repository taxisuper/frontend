import React, {PropTypes, Component} from 'react';
import Link from './Link.jsx';
import db from './Firebase';



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
            <AcitivityItem name="Fotballtrening G13" organization="Lommedalen FK" id="1" activated={true} />
            <AcitivityItem name="Moderne Dans" organization="Oslo Kulturskole" id="2" activated={true}/>
            <AcitivityItem name="Basketball G13" organization="MTB" id="3"  activated={false}/>
          </ul>
          </div>
      </div>
    </div>
  );
}

class AcitivityItem extends Component {
  constructor(props) {
    let fid = `a${props.id}`;
    let ref = db.ref(fid);
    super(props);
    var that = this;
    this.state = {
      activated: props.activated
    };
    ref.once('value').then(function(snapshot) {
        that.test(snapshot.val());
    });
    this.setActivated = this.setActivated.bind(this);
    this.test = this.test.bind(this);
  }

  setActivated(){
    console.log("Clicked!");
    let ref = db.ref(`a${this.props.id}`);
    ref.set(!this.state.activated);
    this.setState({activated: !this.state.activated});
  }

  test(val){
    this.setState({activated: val});
  }

  render() {
    const {name, organization} = this.props;
    const {activated} = this.state;
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


export default Activities;
