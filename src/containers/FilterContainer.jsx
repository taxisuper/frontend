import React, {PropTypes} from 'react'

import WithState from './../util/withState.js'
import If from './If.jsx';
import IfChild from './IfChild.jsx'
import FilterForm from '../components/FilterForm.jsx';
import FilterList from '../components/FilterList.jsx'

const FilterContainer = ({state, updateState, filters, onAddFilter, onFilterButtonPressed}) => {
    return(
        <div className="filter-container">
          <h2>Filters & Stats</h2>
          <FilterList
            filters={ filters }
            onFilterActiveChange={onFilterButtonPressed}
          />
          <If condition={state.formVisibility}>
            <IfChild>
              <FilterForm onSubmit={filter => {onAddFilter(filter); updateState({formVisibility: false});}}/>
            </IfChild>
            <IfChild>
              <button onClick={() => updateState({formVisibility: true})}>New filter</button>
            </IfChild>
          </If>
        </div>
    )
};

FilterContainer.propTypes = {
  state: PropTypes.shape({
    formVisibility: PropTypes.bool.isRequired
  }),
  updateState: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  onAddFilter: PropTypes.func,
  onFilterButtonPressed: PropTypes.func
};

export default WithState({formVisibility: false})(FilterContainer);


