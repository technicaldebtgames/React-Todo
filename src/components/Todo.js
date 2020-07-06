import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {

    render() {
        return (
            <div className={'todo-item ' + (this.props.item.complete ? 'complete' : 'incomplete')} onClick={() => this.props.toggleCompleteItem(this.props.item.id)} >
                {this.props.item.value}
            </div>
        );
    };

};