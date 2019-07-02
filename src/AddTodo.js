import React, { Component } from "react";

class AddTodo extends Component {

    state = {
        id: null,
        item: ""
    }

    handleChange = (e) => {
        let item = e.target.value;
        let id = this.props.id + 1;

        this.setState({
            id,
            item
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = this.state;
        this.props.addTodo(todo);
        this.setState({
            item: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.item} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}


export default AddTodo;