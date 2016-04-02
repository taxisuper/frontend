import React, { PropTypes } from 'react';

const SelectField = ({name, label, onChange, value, options}) => {
  const valueLink = {
    value,
    requestChange: onChange,
  };
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <select name={name} valueLink={valueLink}>
        {options.map(o => (<option key={o.value} value={o.value}>{o.label}</option>))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectField;
