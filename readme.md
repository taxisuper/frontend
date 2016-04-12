# Redux workshop

### Task 7
#### a)
To make our twitter stream a bit more interesting, we can implement a filtering mechanism.
Let's say we filter the tweets based on text and hashtags.
This way we can use the map to see in what parts of the world they talk about "Trump" for instance.
Create a filter reducer that consists of an array of filters with the following data structure:
```
{
  color: 'yellow',
  name: 'Trump',
  text: 'Trump',
  hashtag: [Trump],
  active: true
},
```
The color indicates the marker color. The active flag indicates if the filter is turned on or off.
For now, the only case the reducer will handle is `FILTER_ACTIVE_TOGGLE`.
Create the corresponding action creator.

We have created a FilterList React component for you:

```javascript
function Filter({ name, color, active}) {
  const className = active ? '' : 'inactive';
  return (
    <span className={ className } onClick = {() => console.log('filter click')}>
      <div className={`circle ${color} ${className}`}/>
      { name }
    </span>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

function FilterList({ filters}) {
  return (
    <ul className="filterList">
      { filters.map(f =>
        <li key={ f.name }>
          <Filter
            {...f}
          />
        </li>)}
    </ul>
  );
}

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  onFilterActiveChange: PropTypes.func.isRequired
};
```
Create a file with the `FilterList` component and let this component be a child of the `Map` and `Feed` components.
Pass the state from your newly created `filters` reducer down to the `FilterList` component.
Remember to combine the new reducer in the `reducers/index.js` file.
You may want to put some initial state data into the reducer, for instance the Trump filter, so that you have some data to work with in the UI.
When the filter list is successfully displayed on both routes, you can start on the onClick handler of the `Filter` component.
When you click on a filter, you should be able to toggle the active flag.

#### b)
Now it is time to actually filter the tweets.



