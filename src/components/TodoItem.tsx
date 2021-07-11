import React from 'react';
import {ITodo} from "../types/data";


interface ITodoItemProps extends ITodo {
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props
    return (
        <div>
            <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)}/>
            <span style={{
                margin: '10px'
            }}>
                {title}
            </span>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    background: "none",
                    border: "none",
                    outline: 'none',
                    marginLeft: '16px',
                    cursor: "pointer",
                    fontSize: '20px'
                }}
            >x
            </button>
        </div>
    );
};

