## Props and State

##### Forms and Inputs

React form elements maintain internal state. Think of React inputs as stateful child components. This means that we must manage the state of inputs through our own stateful component and one way data binding. The creation of a parent component (which we’ll refer to as form-container), manages the state for all child components of the form and passes any necessary state down into it’s inputs through the use of props. Each input has an onChange event that we can handle and use to update our form-container’s state each time the user interacts with an input.


##### Props

Components accept arbitrary inputs called props. In JSX, props are passed into a component with a syntax that looks like HTML attributes. These are the equivalent of function params.

In actuality, props is the name of the object passed into a component constructor and any prop added to a component in the JSX will be accessible as a property on props.

After props is passed into the constructors super function, they are available on the context by using this.props.

- Props can be data or functions

an example....

``` 
When that button gets clicked, it’s onClick action fires
That action runs the method this.props.handleClick
That method runs in <Foo> … <Foo> passed it down to <Bar> essentially telling it what it wants it to do. 
```


##### One Way Data flow

State can only be passed from parent component to a child component through the use of props. This enforces the idea of one way data flow. One way data flow is a way of describing that state can only be passed down the component tree (not up). If a child wants to pass some data to a parent, the parent can pass a function to the child through props and the child may invoke that function and pass it data for the parent to manage.


resources...

[setState Explained](https://css-tricks.com/understanding-react-setstate/)
[handling events](https://facebook.github.io/react/docs/handling-events.html)
[forms](https://facebook.github.io/react/docs/forms.html)
[state and lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
[components and props](https://facebook.github.io/react/docs/components-and-props.html)