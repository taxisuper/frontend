# Redux workshop
## Introduction

### Task 1: Basic Redux application flow

In this section we'll set up a really simple app from scratch. You'll keep track of a single number starting at zero, incrementing it once for every click inside the browser window. We'll break this rather simple task into four steps, demonstrating the core redux concepts of a store, actions and reducers.

* A: Creating a store
* B: Retrieving the state
* C: Changing the state
* D: Subscribing to store change and re-rendering

We'll also add a final step E where we introduce React and use it to render our simple counter app.

* E: Using React to render the app

We'll be doing these tasks in the file `index.js` in the project root.

### A: Creating a store.

We need a store. Redux advocates having all your application data in a single object structure, but we'll need some layer of abstraction instead of just using a plain old javascript object.

Redux gives us a convenient function - `createStore`.

Use this to get yourself a shiny new store, ready to be filled with our application data.
Try to call `createStore` without any parameters initially, and check the browser console.

You'll see an error message. In the far left there's a reference to the file and line number that produced the error message.
Click it to enter the Redux source code to see what `createStore` was expecting.

--

Ok, so `createStore` is expecting this thing called a reducer as the first argument, which apparently is a function.
The reducer is a core concept in redux - they are functions that perform transformations on your application data.

The function signature for a reducer looks like this:

```javascript
(state, action) => state
```

The responsibility of a reducer is simply to return a new version of the state whenever something happens.
The event that something happens - it might be a user interaction, a timeout, ajax calls - are signalled using what is called `actions`. We'll come back to these in just a bit.

Let's create a simple function just to get our store up and running. This example will serve our purpose:

```javascript
function reducer(state=0, action) {
    return state;
}
```

For now, this function will serve as placeholder and won't actually do anything. Note how we use the default parameter syntax of ES2015 to indicate that the initial state value of this reducer should be the number zero.

Let's try creating that store again:

```javascript
createStore(reducer)
```

Success! 
Well, we still have a white page, so we're not quite finished yet.
Let's print the number in our store to the screen.

### B: Retrieving the state from the store

The `store` object has a function `getState` that's used to retrieve the current state.
We'll use the good, old DOM API to 

```javascript
document.body.innerText = store.getState();
```

Great! Now we've initialized a store object to contain all our data, created a simple pass-through reducer that describes our state mutations and rendered the store content to the DOM.The next logical step from here would be to perform changes to our state. 

### C: Changing our state

We'll use another function on `store`  - the `dispatch` function. This function enables us to declaratively say that something has happened in our app. This would be some user interaction, e.g a button was clicked, or something timed out, or basically whatever action that might require us to update our state.

Let's try doing that dispatch thing:

```javascript
store.dispatch()
```

Check the console again. Redux states how an action needs to be a plain javascript object. Try entering the source code again to have a look at what else Redux expects from our actions.

You'll see that the `type` property on our actions are used to distinguish between different kinds of actions.
Next, let's create and dispatch an action:

```javascript
store.dispatch({ type: 'USER_CLICKED' })
```

It's kinda lame saying the user clicked something when we obviously didn't, so we'll have to add an event listener:


```javascript
document.addEventListener('click', () => store.dispatch({ type: 'USER_CLICKED' }));
```

Click the white background of the browser window to see what happens!

...not much, so far.
Our reducer function actually gets the action passed in as the second argument, so why don't you go ahead and `console.log` the action parameter inside your reducer.

You'll see that upon creating the store, redux will trigger an action called `@@redux/INIT` which is used to set up the initial state in your reducer. Upon clicking the window, you'll see your own `USER_CLICKED`-actions appear.

The last thing we need to do in order to complete the Redux cycle is to update the state. 

This involves making our reducer react to certain types of actions - `'USER_CLICKED'`, for instance.
Use an `if`-statement in your reducer function to increment the state only when an action of this type is dispatched.

Running your app with these additions yields disappointing results in the browser. The problem is that even tho we are updating the value of our state, we're not rendering this new state to the page. This brings us to the fourth and final step of the cycle:

### D: Subscribing to store change and re-rendering

Lets refactor our rendering method into its own function:

```javascript
function render() {
    document.body.innerText = store.getState();
}
```

All thats left now is to tell the store object to let us know whenever something changes. The store supplies us with a function called  `subscribe()` for this purpose, which allows us to rerender on every change.

Make sure you still render the initial state upon app startup by calling render manually.

```javascript
store.subscribe(render);
```

Now the counter in your app should increase with every click inside the browser window.

That's it!
This is basically all there is to Redux.

Of course, this example app is trivial and only serves to help explain the core Redux concepts.

### E: Using React to render the app

React is a wildly popular frontend library by Facebook for creating graphical user interfaces. Hopefully you've got some experience with React before starting this workshop, but if that's not the case - fear not! React, when used with Redux, it pretty simple and can be learned pretty quickly.

We've created a separate document explaining the very basics of React, located [here](./react-intro.md).

If you're new to React you should read that before continuing on with the workshop.
If you've already become somewhat acquainted, it should be safe to skip it

### Creating a component

Let's get back to our simple counter application from Task 1 and render it using React. We'll have to create a simple component that accepts the current state as an argument, as a prop and renders this in a `<div>`.

The component might look something like this:

```javascript
function Counter(props) {
  return <div>{props.counter}</div>;
}
```

... and we'll instantiate it like this:

```javascript
<Counter counter={store.getState()} />
```

To actually render it on the screen, we need to import a couple of things from the `react` and `react-dom` libraries. The `render`-function accepts two parameters: a component to render and a DOM-reference to render it in.

```javascript
import React from 'react';
import { render } from 'react-dom';

render(component, document.querySelector('#app'))
```

##### Note on ES6 modules

*We'll be utilizing ES6 modules in this workshop, which means we'll use the keywords `import` and `export`. This is the new way of sharing code between JavaScript files that was standardised in the 2015-version of the JavaScript standard. Hopefully the syntax is intuitive enough to understand, but just ask if you have any questions*


## Task 2: Rendering a Tweet Component

Now we've explored the basic concepts of an application built using React and Redux. The rest of the workshop consist mostly of applying these concepts at scale - e.g how do we build big applications, how do we do asynchronous network calls, how do compose our component hierarchy, etc.

We'll do this by building a Twitter Dashboard app, as you've probably understood by now. Let's do the small and initial step of this process by creating a React component that'll render a Tweet. This will be a central part of our app and we'll use and extend it throughout the rest of the workshop.

The component should output the following HTML. This is needed to get the correct styling (we've written it already).

It contains hard coded tweet data, which we'll be replacing with real, live data from Twitter over the next steps.

```html
<div className="tweet">
        <div className={'tweet-header'}>
          <img className="tweet-image" src="https://pbs.twimg.com/profile_images/553711083064541184/9VsY9i09.jpeg" />
          <div className="tweet-image-offset tweet-name">Dan Abramov</div>
          <div className="tweet-image-offset tweet-screen-name">@DanAbramov</div>
        </div>

        <div className="tweet-content">
          <div className="tweet-text">Good luck on your quest to learn Redux!</div>
          <div className="tweet-stats">
            <span className="tweet-user-followers">
              <strong>26 587</strong>
              <span className="tweet-stats-desc">followers</span>
            </span>
          </div>
          <span className="tweet-country tweet-stats-desc">UK</span>
          <div className="tweet-city tweet-stats-desc">London</div>
        </div>
      </div>
```

In summary:

* create a Tweet component and put it in a new file in `/components`
* the component should return the given HTML structure
* the component should accept a prop called `tweet`
* the component should be passed a tweet datastructure, found in `example-tweet.js`

When this is done you should se a tweet rendered on the page.

The next step is to integrate the adding of a tweet to our redux workflow. Instead of manually sending in some hardcoded data from a file to the component, we should be getting the tweet data from the state, and adding it through dispatching an action.

You will need to do the following:

* change the initial state from a single number (the counter) to a an empty object, in anticipation of a tweet
* dispatch an action `'ADD_TWEET'` containing the tweet data
* 

Lets start by changing the initial state from a single number (our counter) to an empty object. This is done in our reducer, by using ES6 default parameter syntax as previously discussed.



##### A note on CSS and HTML

*Some practicalities from here on out: we've created CSS for the workshop, so you won't have to touch the CSS files at all (unless you want to spice it up with your own additions, of course). To make this work, we'll provide you with the HTML structure a component needs to output, or simply the CSS class name the top level node of a component.*


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
  hashtags: ['Trump'],
  active: true
},
```
The color indicates the marker color. The active flag indicates if the filter is turned on or off.
For now, the only case the reducer will handle is `FILTER_ACTIVE_TOGGLE`.
Create the corresponding action creator.

Create a Filter component :

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
  active: PropTypes.bool,
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



