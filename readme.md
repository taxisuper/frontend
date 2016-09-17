# Redux workshop
## Introduction

## Task 1: Basic Redux application flow

In this section we'll set up a really simple app from scratch. You'll keep track of a single number starting at zero, incrementing it once for every click inside the browser window. We'll break this rather simple task into four steps, demonstrating the core redux concepts of a store, actions and reducers.

* A: Creating a store
* B: Retrieving the state
* C: Changing the state
* D: Subscribing to store change and re-rendering

We'll also add a final step E where we introduce React and use it to render our simple counter app.

* E: Using React to render the app

We'll be doing these tasks in the file `src/index.js` in the project root.

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

If you've already become somewhat acquainted, it should be safe to skip it.

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

Now we've explored the basic concepts of an application built using React and Redux. The rest of the workshop consist mostly of applying these concepts at scale - e.g how do we build real world applications, how do we do asynchronous network calls, how do compose our component hierarchy, etc.

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

Do the following:

* create a Tweet component and put it in a new file in `/components`
* the component should return the given HTML structure
* the component should accept a prop called `tweet`
* the component should be passed a tweet datastructure, found in `example-tweet.js`

When this is done you should se a tweet rendered on the page.

The next step is to integrate the adding of a tweet to our redux flow. Instead of manually sending in some hardcoded data from a file to the component, we should be getting the tweet data from the store, and adding the tweet to the store by dispatching an action.

You will need to do the following:

* change the initial state from a single number (the counter) to a an empty object, in anticipation of a tweet
* dispatch an action `'TWEET_RECEIVED'` containing the tweet data
* make the reducer return the received tweet as the new state

## Task 3: Receiving real tweets from the Twitter API


## Task 4: the beginnings of a larger application
Okay, now we're showing only one tweet at a time. We can't really see what people are tweeting about as new tweets replace the older ones faster than we can read. What if we put them in a list instead?

#### Step I: `App.jsx`
As this will be the beginning of a larger application we want to create a root component for our app. Create this component in `containers/App.jsx`. This component should take a list called `tweets` as a `prop` and render an `<ul>` with the css class `tweetlist` and `<li>`s containing a `<Tweet>` for each of the tweets.

*eksempel HTML her*

Back in our store listener function in `index.js` we now want to render the `<App>` with all the tweets we get from the store. If you open the application you should see an ever growing list of incoming tweets.


#### Step II: `react-redux`
Now, we don't really want to handle store changes and rendering of the app manually (by having our own store subscriber and calling `render`), and this is where the package `react-redux` helps us. `react-redux` has a component called `<Provider>` that takes our `store` as a prop and takes care of subscribing to the store and updating its children.

So, in `index.js`, remove the `store.subscribe` bit and replace it with

*TODO: importering av Provider*

```javascript
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#app')
);
```

You might notice that `<App>` is not getting the `tweets` list as a prop here. This is because we want `<App>` to get them from the store itself. How do we do this from `<App>`? Again, `react-redux` comes to the rescue with its `connect` function.

`connect` is a so-called higher order component that, simply put, "connects" a component to our redux store. `connect`'s first argument is a function gets the store `state` as an argument and returns an object. This function is called `mapStateToProps` (it makes sense, doesn't it?). The object returned from `mapStateToProps` will be given as props to the component that `connect` wraps.

Your task now is to write a `mapStateToProps` function that takes the store `state` as an argument and returns an object with the list of `tweets` as one of the properties. When you have done this, export the `<App>` component like this:
```javascript
export default connect(mapStateToProps)(App);
```

Now check that the list of tweets is still rendered and updated when new tweets come in.

#### Step III: Refactoring
It isn't immediately obvious that `<App>` renders a list of tweets, and we may want to render more things than just this tweet list in our app so we want to refactor a bit.

Move the rendering of the tweet list to `components/TweetFeed.jsx`. The tweets should be passed down to this component from `App.jsx` (we shouldn't need to `connect` `TweetFeed`).
There should be no visible changes from before but we have the beginnings of a nicer application architecture.

#### Step IV: Developer Tools
As our application is starting to grow we want to take advantage of a really nice tool that exists for `redux` applications, namely the `redux-devtools`. This will help us during application development by allowing us to see every action that flows through our application and how they affect the store `state`.

We have done some of the boring setup so you don't have to. Go to `index.js` and replace your store initialization with
```javascript
import configureStore from './configureStore';
const store = configureStore();
```

While you're at it, import the `<DevTools>` component we've made (`./containers/DevTools`) and modify your `render` call so it looks like this:

*TODO: IMPORT DEVTOOLS*

```javascript
render(
  <Provider store={ store }>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#app')
);
```

When you now open your app you should see a nice dark blue thingy on the right side of the screen that keeps showing `TWEET_RECEIVED`. Pretty cool, huh? You can even hide the devtools by pressing `ctrl+h` and move it by pressing `ctrl+q`!

Because of the large amount of tweets coming in we won't be able to notice other actions so we want to filter these out. Go to `containers/DevTools` and do as the instructions there say.
Now when you open your app you will only see the `@@INIT` action in the devtools, along with the store `state` after this initial action.


## Task 7
### Step I:
To make our twitter stream a bit more interesting, we can implement a filtering mechanism.
Let's say we filter the tweets based on text and hashtags.
This way we can use the map to see in what parts of the world they talk about "Trump" for instance.
Create a filter reducer that consists of an array of filters with the following data structure:
```javascript
{
  color: 'yellow',
  name: 'Trump',
  text: 'Trump',
  hashtags: ['Trump'],
  active: true
},
```
The active flag indicates if the filter is turned on or off.
The color indicates the map marker color, where the supported colors are: "blue", "green", "pink", "lightblue", "purple", "yellow" and "red"
For now, the only case the reducer will handle is an action with type `FILTER_ACTIVE_TOGGLE`.
Create the corresponding action creator `toggleActiveFilter()`.

To display the filters, we need a filter component. Create the file `Filter.jsx` with a component that renders the following HTML when given a filter
Substitute FILTERNAME and FILTERCOLOR with the values from the actual filter.

```html
<span className="FILTERACTIVE">
 <div className="circle FILTERCOLOR" />
 FILTERNAME
</span>
```

We would like to render a list of different filters, thus, create a `FilterList` component:

```html
<div className="filter-container">
  <ul className="filterList">
   <li>
    <Filter>
   </li>
  </ul>
</div>
```

Put the `FilterList` component in a new file and let this component be a child of the `Map` and `Feed` components.
Pass the state from your newly created `filters`-reducer down to the `FilterList` component.
Hint: In the `mapStateToProps` function at the bottom of the `Map` and `Feed`components, you should pick up `filters`from the `state` object.

Remember to combine the new reducer in the `reducers/index.js` file, as you did before with the `route`-reducer and the `tweets`reducer.

You may want to put some initial state data into the reducer, for instance the Trump filter, so that you have some data to work with in the UI.
When the filter list is successfully displayed on both routes, you can start on the onClick handler of the `Filter` component.

When you have finished this task, you should be able to toggle filters on and off by clicking on them.
If you have used the correct css-classes, this should be visible in the ui.

### Step II:
Now it is time to actually filter the tweets. Let's start with the tweets displayed in the feed route.
In the function `mapStateToProps` we pick up `filters`and `tweets`, thus, here we have everything we need.
Make a utility function `getViewTweets(tweets, filters)` that returns an array of all the tweets that match one or more of the active filters.
If there are no active filters, the function should return the 100 most recent tweets, as before.
Inside `mapStateToProps`, instead of returning a sliced array of tweets, use you newly created utility-function to return the "view" tweets.
Hint: It might be an idea to create a filter with a high match rate, so that you can quicly see if your implementation is correct.
For instance:
```
{
    color: 'orange',
    name: 'Frequent filter',
    text: 'the',
    active: false,
  }
```
Now, we are going to need the exact same functionality in the `Map` component.
Let's make our utility function reusable by putting it into a separate file and exporting it into both the `Map` and `Feed` component.
When you have completed this task, only tweets that match the active filter should show up in the Feed and on the Map.

### Step III: Adding color
Edit your `getViewTweets` function so that it not only filters the tweets, but also adds the prop color of the filter it matches.
If it does not match any filters, add the color red.
If you have used the correct CSS classes, both the Map and the Feed should now clearly indicate which filter the tweets match.


## Task 8: Creating new filters
### Step I:
It would be nice to be able to add new filters in the GUI instead of changing the initial state of the `filters`-reducer every time we want a new filter.
For this, we need a form component with the exotic name `FilterForm`.
We will start by only rendering the html, with no form logic.
The HTML should look something like this
 ```html
 <form className="filter-form">
       <h3>New filter</h3>
       <div className="input-wrapper">
           <label for="name">Name</label>
           <input type="text" id="name" name="name"/>
       </div>
       <div className="input-wrapper">
           <label for="hashtag">#</label>
           <input type="text" id="hashtags" name="hashtags"/>
       </div>
       <div className="input-wrapper">
          <label for="text">Text</label>
          <input type="text" id="text" name="text"/>
        </div>
        <div className="input-wrapper">
            <label for="color">Marker color</label>
            <select name="color">
              <option key="green" value="green">Green</option>
              <option key="pink" value="green">Pink</option>
            </select>
        </div>
        <button>Save</button>
     </form>
 ```
Tip: You may want to make a separate `InputField` component to DRY things up.

Before we put the new component into our GUI, let's make a wrapper component `FilterContainer` that wraps both the `FilterForm` and the `FilterList`:

```html
<div className="filter-container">
  <h2>Filters</h2>
  <FilterList/>
  <FilterForm/>
</div>
```

Note: remove the `className="filter-container"` prop in the `FilterList`, otherwise the html will look strange.
Replace the `FilterList` child component in `Feed` and `Map` with your newly created `FilterContainer`.
When you have completed this task there should be a form in the GUI.

### Step II
In React, form components have two props that control user interaction: `onChange` and `value`.
We will be using these two props to activate our input and select fields, the React Form documentation will be helpful here:
https://facebook.github.io/react/docs/forms.html.

In the example they are using in the React documentation they use `setState` inside the `handleChange` function.
Using `setState` means storing the state locally, in the component.
However, since we have a tool for handling state, namely, Redux, we don't need to use `setState`.
We can just use actions and reducers and make the form a part of our redux state tree. So, guess what? Time to make a new reducer `form`.
The initial state of the `form` should have the following representation:
```javascript
const initialState = {
  name: '',
  hashtags: '',
  text: '',
  color: ''
}
```
The new reducer should handle two cases `FORM_UPDATED` with the `formUpdate(field)` action creator and `FORM_SUBMITTED` with the `formSubmit()`action creator.
The field shoud be an object with a key (the field name) and a value (the field value).

You may want to connect the `FilterForm` component so that you don't have to pass form callbacks and form state all the way from `Feed` down to the input fields.
Once the `FilterForm` component is connected, you can hook up the form state with the `value` prop of the input and select form elements.
You can also create a callback function `updateForm` that dispatches `formFilterUpdate(field)`.
Pass the `updateForm` function down to the input field, so that you end up with something along the lines of
```
<input type="text" id={name} name={text} value={value} onChange={(event) => updateForm({key: 'text', value: event.target.value  })} />
```

When you have completed this task you should be able to fill the form fields and there should be actions firing in the Redux panel on every key stroke.

### Step III Submitting the form
When the user presses the save button in the form, three things should happen
1) The form should not be displayed in the GUI, we should only see the filters.
Thus we need to extend our `view` state object with a new prop: `formVisibility`.
The reducer should be extended with two cases `FORM_HIDE` and `FORM_SUBMITTED`, the latter action type we created in Step II.
When the `Form` is hidden, that is, when `formVisibilty: false`, the `FilterList` should be visible, along with a button ```<button>New filter</button>```.
When the `Form` is displayed, the `FilterList` and the button should be hidden. Hint: You may want to use the `If`-components introduced in task 5.

2) The form fields should be cleared

3) The form data should be submitted into our json









