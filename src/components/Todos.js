import React, { useReducer, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { todoReducer } from '../helpers/todoReducer';
import '../styles/toggle.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const Todos = () => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const [ todos, dispatch ] = useReducer(todoReducer, [], init );


    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ])


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdd = () => {
        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                description,
                done: false
            }
        });

        reset()
    }

    const handleDelete = ( todoId ) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div className="container">
            <div className="row">
                
                <div className="col-6">
                    <h3>Tareas guardadas</h3>
                    <hr />
                    <ul className="list-group list-group-flush">
                    {
                            todos.map( ( todo, i ) => ( 
                                <>
                                    <p 
                                        className={`${ todo.done && 'todo-complete' }`}
                                        onClick={ () => handleToggle(todo.id) }
                                        key={ todo.id }
                                    >
                                        {i+1}. {todo.description}
                                    </p>

                                    <button 
                                        onClick= { () => handleDelete(todo.id) }
                                        className="btn btn-outline-danger"
                                    >
                                        Eliminar
                                    </button>
                                </>
                            ))
                    }
                    </ul>
                </div>

                <div className="col-6">
                    <h3>Agregar tarea</h3>
                    <hr />

                    <form 
                        onSubmit={ handleSubmit }
                        className="form-group"
                    >
                        <input 
                            type="text"
                            name="description"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            placeholder="Nueva tarea:"
                            value={ description }
                            className="form-control"
                        />

                        <button
                            type="submit"
                            onClick={ handleAdd }
                            className="btn btn-primary mt-3 form-control"
                        >
                            Agregar nueva tarea
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todos;
