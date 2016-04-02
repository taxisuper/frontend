import React, { PropTypes } from 'react';

const InputField = ({name, inputType = 'text', label, autofocus = false, onChange, value}) => {
  const valueLink = {
    value,
    requestChange: onChange
  };
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input type={inputType} id={name} name={name} valueLink={valueLink} autoFocus={autofocus}/>
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  autofocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default InputField;
