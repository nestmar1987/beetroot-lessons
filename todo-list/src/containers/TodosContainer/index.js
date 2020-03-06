import React, { useState } from 'react';
import moment from 'moment';

// Components

import { SimpleInput } from '../../components/ui/SimpleInput';
import { FontIcon } from '../../components/FontIcon';
import { TodoItem } from '../../components/TodoItem';
import { Button } from '../../components/ui/Button';
import { List } from '../../components/List';
import Bool from '../../components/renderProp/Bool';

// Styles

import './styles.scss';

// --------------------

export const TodosContainer = () => {
  const [todos, setTodos] = useState([
    {
      name: 'Learn HTML',
      id: '1',
      createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
    {
      name: 'Learn CSS',
      id: '2',
      createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
    {
      name: 'Learn JS',
      id: '3',
      createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
    {
      name: 'Learn React',
      id: '4',
      createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  ]);

  const [inputValues, setInputValue] = useState({
    todoName: '',
    password: '',
    email: '',
  });

  function addHandler(nameTodo) {
    if (inputValues.todoName) {
      setTodos(prevTodos => {
        return [
          {
            createdDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
            name: nameTodo,
            id: Date.now().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      alert('Введите название...');
    }
  }

  const changeHandler = (name, value) => {
    setInputValue(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const removeHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-container__header">
        <SimpleInput
          changeHandler={e => changeHandler('todoName', e.target.value)}
          placeholder="Enter todo name"
          value={inputValues.todoName}
          name="todoName"
        />

        <Button onClick={() => addHandler(inputValues.todoName)}>
          Add todo
          <FontIcon size="lg" icon="add" style={{ marginLeft: '12px' }} />
        </Button>
      </div>

      <List
        listItem={({ createdDate, removeHandler, name, id }) => (
          <TodoItem
            removeHandler={removeHandler}
            createdDate={createdDate}
            name={name}
            id={id}
          />
        )}
        list={todos}
        extra={{
          removeHandler: removeHandler,
        }}
      />

      <div className="todo-container__login-form">
        <SimpleInput
          changeHandler={({ target: { value } }) =>
            changeHandler('email', value)
          }
          placeholder="Email"
          value={inputValues.email}
          name="email"
          type="email"
        />
        <Bool
          render={({ handleChange, isTrue }) => (
            <SimpleInput
              changeHandler={({ target: { value } }) =>
                changeHandler('password', value)
              }
              placeholder="Password"
              value={inputValues.password}
              name="password"
              type={isTrue ? 'text' : 'password'}
              icon={
                <FontIcon
                  iconColor={isTrue ? 'green' : null}
                  onClick={handleChange}
                  icon="remove_red_eye"
                  size="lg"
                />
              }
            />
          )}
        />
      </div>
    </div>
  );
};
