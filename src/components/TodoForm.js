import React from 'react';

export default class TodoForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            text: ''
        };
    };

    handleChanges = event => {
        this.setState({text: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.text !== ''){
            this.props.addItem(this.state.text);
            this.setState({text: ''});
        };
    };

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