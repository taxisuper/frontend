import React, {PropTypes} from 'react'
import WithState from '../util/withState.js';
import InputField from './InputField.jsx'
import SelectField from './SelectField.jsx'

const formatHashTags = (hashtagString) => {
  return hashtagString.split(' ').filter(word =>word.indexOf('#') === 0)
    .map(hashtag => hashtag.substr(1));
};

const FilterForm = ({updateState, state, onSubmit}) => {
  const colors = [
    {value: "blue", label:"Blue"},
    {value: "pink", label:"Pink"},
    {value: "yellow", label:"Yellow"},
    {value: "orange", label:"Orange"},
    {value: "purple", label:"Purple"},
    {value: "red", label:"Red"},
    {value: "lightblue", label:"Light blue"},
    {value: "green", label:"Green"}
  ];
  const formatState = state => {
    const formattedHashtags = formatHashTags(state.hashtags);
    return Object.assign({}, state, {hashtags: formattedHashtags})
  };
  return (
    <form className="filter-form">
      <InputField name="name" autofocus={true} label="Name"
                  value={state.name} onChange={name => updateState({name})}/>
      <InputField name="hashtag" label="#"
                  value={state.hashtags} onChange={hashtags => updateState({hashtags})}/>
      <InputField name="text" label="Text"
                  value={state.text} onChange={text => updateState({text})}/>
      <SelectField name="color" label="Marker color" options={colors}
                   value={state.color} onChange={color => updateState({color})} />
      <button onClick={e => {e.preventDefault(); onSubmit(formatState(state));}}>Save</button>
    </form>
  )
};

FilterForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default WithState({
  name: '',
  hashtags: '',
  text: '',
  color: '',
  geo: {
    start : {
      lat: null,
      long: null
    },
    end: {
      lat: null,
      long: null
    }
  }
})(FilterForm)
