import React from 'react';

export default class TodoForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            text: ''
        };
    };

    // when a change occurs, update state
    handleChanges = event => {
        this.setState({text: event.target.value});
    };

    // when submit happens, update state (if text field isn't empty)
    handleSubmit = event => {
        event.preventDefault();
        if(this.state.text !== ''){
            this.props.addItem(this.state.text);
            this.setState({text: ''});
        };
    };

    // form contains a submit button and a clear list button, as well as text input field
    render() {
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <input className='todo-form-text' type='text' name='text' value={this.state.text} onChange={this.handleChanges} />
                <button type='submit' className='todo-form-submit'>Submit Item</button>
                <button className='todo-form-clear' onClick={this.props.clearItems}>Clear Complete Items</button>
            </form>
        );
    };

};