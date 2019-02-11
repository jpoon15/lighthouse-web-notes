# Breakout on React

## Crafting Components

## Demo Code
https://codepen.io/joelshinness/pen/EdJBrm?editors=0010

All of your code when you make Components will be two types of things (for the most part):

- Declarative JSX Expressions. Presentation is a function of your data.

- Imperative State Management.

..- Setting initial state this.state = {}
..- Updating state: this.setState({data: newData})

## Component Definitions

If we create components with the Component class, it only really needs a render function.

## State management

The state is a cache of data that a Component maintains. It can only be changed directly by the Component itself.

## Component Lifecycles

There are three big lifecycle processes that happen for a Component: mounting, updating, and unmounting. The mounting happens exactly once in a component's life, the updating may happen any number of times between 0 and infinity, and the unmounting will happen once (or never, if the page closes.)