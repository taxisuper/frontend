import React, {PropTypes} from 'react'
import WithState from '../util/withState.js';
import InputField from './../components/InputField.jsx'
import SelectField from './../components/SelectField.jsx'
import { updateFilterForm } from '../actions';
import { connect } from 'react-redux';

const formatHashTags = (hashtagString) => {
  return hashtagString.split(' ').filter(word =>word.indexOf('#') === 0)
    .map(hashtag => hashtag.substr(1));
};

const FilterForm = ({form, onSubmit, dispatch}) => {
  const updateForm = (field) => dispatch(updateFilterForm(field));
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
      <h3>New filter</h3>
      <InputField name="name" autofocus={true} label="Name"
                  value={form.name} onChange={name => updateForm({key: 'name', value: name})}/>
      <InputField name="hashtag" label="#"
                  value={form.hashtags} onChange={hashtags => updateForm({key: 'hashtags', value: hashtags})}/>
      <InputField name="text" label="Text"
                  value={form.text} onChange={text => updateForm({key: 'text', value: text})}/>
      <SelectField name="color" label="Marker color" options={colors}
                   value={form.color} onChange={color => updateForm({key: 'color', value: color})} />
      <button onClick={e => {e.preventDefault(); onSubmit(formatState(form));}}>Save</button>
    </form>
  )
};

FilterForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps)(FilterForm);
