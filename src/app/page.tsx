"use client";

import { useEffect, useState } from "react";
import TodoGrid from "@/components/TodoGrid";
import AddTodoForm from "@/components/AddTodoForm";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  quadrant: "UrgentImportant" | "UrgentLessImportant" | "LessUrgentImportant" | "LessUrgentLessImportant" | "Backlog";
};

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setTodos([{id: 1, title: 'test', quadrant: 'Backlog'}]);

  }, []);

  useEffect(() => {
    console.log( process.env);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const handleAddTodo = (title: string, quadrant: string) => {
  //   const newTodo: Todo = {
  //     id: todos.length + 1,
  //     title,
  //     quadrant: quadrant as Todo["quadrant"],
  //   };
  //   setTodos([...todos, newTodo]);
  // };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id: number, updatedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mx-auto p-4">
      {/*<h1 className="text-2xl font-bold mb-4">Eisenhower Matrix</h1>*/}
      {/*<p className="mb-4">*/}
      {/*  The Eisenhower Matrix is a task management tool that helps you organize*/}
      {/*  and prioritize tasks by urgency and importance. It divides tasks into*/}
      {/*  four boxes based on the tasks you&apos;ll do first, the tasks*/}
      {/*  you&apos;ll schedule for later, the tasks you&apos;ll delegate, and the*/}
      {/*  tasks you&apos;ll delete.*/}
      {/*</p>*/}
      {/*<AddTodoForm onAddTodo={handleAddTodo} />*/}
      {/*<p className="text-xs mt-4">*/}
      {/*  You can drag and drop items below to reorder. This app uses Local*/}
      {/*  Storage to persist data.*/}
      {/*</p>*/}

      <TodoGrid
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default TodoPage;
