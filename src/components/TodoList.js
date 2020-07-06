// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    // just render a list of todo items and send them their props/key
    return (
        <div className='todo-list'>
            {props.items.map(item => 
                <Todo key={item.id} item={item} toggleCompleteItem={props.toggleCompleteItem}/>
            )}
        </div>
    );

};

export default TodoList;