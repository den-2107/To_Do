import React from 'react';

import { Header, TodoPanel, TodoList } from './components';

import styles from './App.module.css';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'Задача первая', description: 'Выполнить тестовое задание', checked: false },
  { id: 2, name: 'Вторая', description: 'Создать "тудушку"', checked: false },
  {
    id: 3,
    name: 'Создать проект',
    description:
      'Создать проект, используя пакетный менеджер yarn',
    checked: true
  },
  { id: 4, name: 'Git', description: 'Выложить проект на GitHub', checked: false },
];

export const App = () => {
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const changeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel mode='add' addTodo={addTodo} />
        <TodoList
          todoIdForEdit={todoIdForEdit}
          todos={todos}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
};
