import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialState = {
    counter: 2, // timestamps are dumb
    items: [{value: 'List item 1',
             id: 0,
             complete: false},
            {value: 'List item two',
             id: 1,
             complete: true}]
};

export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {...initialState}; // just some state to play with
    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this); // had to .bind(this) for the
                                                  // child class component(s) to be able to
                                                  // use them without undef state errors
  };

  // adds a new item to the array
  addItem(value) {
    const newItem = {
      value: value,
      id: this.state.counter,
      complete: false
    };
    this.setState({counter: this.state.counter + 1,
                   items: [...this.state.items, newItem]});
  };

  // clears out completed items from the list
  clearItems() {
    let tempItems = this.state.items.filter(item => item.complete === false);
    this.setState({...this.state,
                   items: tempItems});
  };

  // toggles an item between complete and incomplete states
  toggleCompleteItem = id => {
    this.setState({...this.state,
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {...item, complete: !item.complete};
        }
        else return item;
      })
    });

  };

  render() {
    return (
      <div>
        <h2>TO DO:</h2>
        <TodoList items={this.state.items} toggleCompleteItem={this.toggleCompleteItem} />
        <TodoForm addItem={this.addItem} clearItems={this.clearItems} />
      </div>
    );
  };
};
