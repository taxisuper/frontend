import React, { PropTypes } from 'react';

const SelectField = ({name, label, onChange, value, options}) => {
  const handleChange = (event) => {onChange(event.target.value)};
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={handleChange}>
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
