import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET
export const getTodo = createAsyncThunk("todos/getTodo", async () => {
  return await fetch("http://localhost:8000/todos").then((res) => res.json());
});
// ADD
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, thunkAPI) => {
    const response = await fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();

    return data;
  }
);

// DELETE
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    await fetch(`http://localhost:8000/todos/${todoId}`, {
      method: "DELETE",
    });

    return todoId;
  }
);

// COMPLETE
export const completeTodo = createAsyncThunk(
  "todos/completeTodo",
  async (todoId, thunkAPI) => {
    const todoToUpdate = thunkAPI
      .getState()
      .todos.todo.find((todo) => todo.id === todoId);
    const updatedTodo = { ...todoToUpdate, isDone: true };

    await fetch(`http://localhost:8000/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    return updatedTodo;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
    loading: false,
  },
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      console.log({ action });
      state.loading = false;
    });
    builder.addCase(getTodo.rejected, (state) => {
      state.loading = true;
    });
    // addTodo
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      console.log({ action });
      state.todo.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addTodo.rejected, (state) => {
      state.loading = true;
    });
    // deleteTodo
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      const deletedTodoId = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== deletedTodoId);
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.loading = false;
    });
    // completeTodo
    builder.addCase(completeTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(completeTodo.fulfilled, (state, action) => {
      state.loading = false;
      const completedTodoId = action.payload.id;
      const updatedTodos = state.todo.map((todo) =>
        todo.id === completedTodoId ? action.payload : todo
      );
      state.todo = updatedTodos;
    });

    builder.addCase(completeTodo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default todosSlice.reducer;
