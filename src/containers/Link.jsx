import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions';

function Link({ to, dispatch, className }) {
  return (
    <a className={ className } href={ `#${to}` } onClick={ () => dispatch(changeRoute(to)) } />
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Link);
