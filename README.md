A library app created using [React](https://reactjs.org/).

## Build process

I used the official [React guide](https://reactjs.org/docs/thinking-in-react.html) to give me structure when building this simple app.

## Problems I encountered

### 1. Lifting state up

When you have a separate component that needs to access the state of a parent or component higher up, you should use props to move up the component chain.

### 2. Changing the state of a property on an individual object (in state)

First you should create a copy of the state that you are changing, modify it, then replace the current state with the updated one as you cannot do all this in a single setState call.

View it [here](https://guyroberts21.github.io/react-library/)
