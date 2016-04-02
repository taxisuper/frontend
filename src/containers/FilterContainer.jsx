import React, {PropTypes} from 'react'

import WithState from './WithState.jsx'
import If from './If.jsx';
import IfChild from './IfChild.jsx'
import FilterForm from '../components/FilterForm.jsx';
import FilterList from '../components/FilterList.jsx'

const FilterContainer = ({state, updateState, filters, addFilterHandler, activateFilterHandler}) => {
    return(
        <div className="filter-container">
          <h3>Filters</h3>
          <If condition={state.formVisibility}>
            <IfChild>
              <FilterForm onSubmit={filter => {addFilterHandler(filter); updateState({formVisibility: false});}}/>
            </IfChild>
            <IfChild>
              <FilterList
                filters={ filters }
                onFilterActiveChange={activateFilterHandler}
              />
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
  addFilterHandler: PropTypes.func,
  activateFilterHandler: PropTypes.func
};

export default WithState({formVisibility: false})(FilterContainer);


