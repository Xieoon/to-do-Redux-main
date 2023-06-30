import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // Поле `reducers` позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;

      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом, он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        complete: false,
      };
    },

    toggleCompleteness: (state, action) => {
      const { id } = action.payload;

      const todo = state.byIds[id];

      todo.completed = !todo.completed;
    },

    deleteTodo: (state, action) => {
      const {id} = action.payload;
      state.allIds = state.allIds.filter((todoId) => todoId !== id);
      delete state.byIds[id];
    },
  },
});


export const { addTodo, toggleCompleteness, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
