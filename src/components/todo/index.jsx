import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleCompleteness, deleteTodo } from "../../store/slices/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  }

  const deleteTodoItem = () => {
    dispatch(deleteTodo({ id: todo.id }));
  }

  return (
   <div className={styles.todo_box}>
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
     
    </li>
     <button className={styles.deleteButton} onClick={deleteTodoItem}>
     Delete
   </button>
   </div>
    

  );
};
