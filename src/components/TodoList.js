import React from "react";
import Todo from "./Todo";
export const TodoList = ({ todos }) => {
    console.log(todos)


    return (


        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => {
                    return <Todo key={todo.id} text={todo.text} />
                })}
            </ul>
        </div>

    )
}
