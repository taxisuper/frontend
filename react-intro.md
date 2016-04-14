# A very brief overview of React

React allows us to express our GUI as a series of functions. These functions can be seen as transformations that accept some sort of data structure as input and return a representation of how that data structure should be rendered in HTML. Hmm, that might sound kinda scary as well, but really - React is about functions. A function that accepts an object like `{ name: 'John', likesApples: true }` and returns some HTML: `<div>John likes apples</div>`.We typically refer to these functions describing our GUI as "React components" or just "components".

Here an example of a component:

```javascript
function MyCoolComponent() {
    return <div>Hello World</div>
}
```

Whoa, what was that? HTML in my JavaScript? Get outta here, you fish-eyed swashbuckler!
Long story short, this syntax called JSX allows us to transpile what looks like HTML into something which React will transform into HTML when it's inserted in the browser.

Components, like functions, will also accept parameters:

```javascript
function MyCoolComponent(props) {
    return <div>{props.name} {props.likesApples? 'likes' : 'dislikes'} apples</div>
}
```

`props` is the first argument passed to a component and consists of all the key-value pairs that are set on a component. Props are passed in the same way you assign attributes to good ol' HTML elements:

```html
<Component foo="bar" fagdag="awesome" />
```

will translate to the following props object:

```javascript
function Component(props) {
    console.log(props) // { foo: 'bar', fagdag: 'awesome' }
    ...
}
```

Props doesn't need to be strings. When using curly spaces inside an JSX-expression, we "escape" the JSX syntax and enter the regular JavaScript context, in which we can write regular code and utilize the full power of the language:

```html
<Component divisionFactor={ 2.0 } primes={ [1,2,3,5] } />
```


Our components can in turn utilize other components:

```javascript
function MyView() {
    return <div>
            <MyCoolComponent name="John" likesApples={true} />
            <MyCoolComponent name="Alice" likesApples={false} />
          </div>;
}
```

There! Congratulations on completing this crash course in functional React. There's alot more to React than this, but this is basically all you'll need for the example app of todays workshop.
