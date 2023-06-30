import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

export const TodoList = () => {
 // const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState('all');

  const filteredTodos = filter === 'all'
    ? todos
    : todos.filter((todo) => filter === 'completed' ? todo.completed : !todo.completed)



  return (
    <div>
    <div>
    <button onClick={() => setFilter('all')}>Весь список задач</button>
    <button onClick={() => setFilter('completed')}>Завершенные задачи</button>
    <button onClick={() => setFilter('uncompleted')}> Оставшиеся задачи</button>
  </div>
  <ul className={styles.list}>
    {filteredTodos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
  </div>
  );
};

