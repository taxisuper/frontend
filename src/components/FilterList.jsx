import React, { PropTypes } from 'react';

function Filter({ name, color, isActive, onNameClick }) {
  const className = isActive ? '' : 'inactive';
  return (
    <span className={ className } onClick={ onNameClick }>
      <div className={`circle ${color} ${className}`}></div>
      { name }
    </span>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onNameClick: PropTypes.func.isRequired
};

function FilterList({ filters, onFilterActiveChange }) {
  return (
    <ul className="filterList">
      { filters.map(f =>
        <li key={ f.name }>
          <Filter
            {...f}
            onNameClick={ () => onFilterActiveChange(f, !f.isActive) }
          />
        </li>)}
    </ul>
  );
}

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  onFilterActiveChange: PropTypes.func.isRequired
};

export default FilterList;
