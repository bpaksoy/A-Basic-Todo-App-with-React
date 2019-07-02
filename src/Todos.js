import React from "react";

const Todos = ({ todos, handleDelete }) => {

    const todo = todos.length ? todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}><span >{todo.item}</span><br />
                <button className="waves-effect waves-light btn-small" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>

        )
    }) : (<p className="center">You have no todos left </p>)

    return (
        <div className="todos collection">{todo}</div>
    )
}

export default Todos;