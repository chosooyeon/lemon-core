import { useTodoStore } from '@/hooks/useTodoStore';
import React from 'react';

export const TodoList = () => {
  const { 
    todos, 
    isLoading, 
    error,
    addTodo,
    removeTodo,
    toggleTodo,
    isAddingTodo,
    isRemovingTodo,
    isTogglingTodo
  } = useTodoStore();

  const [newTodoTitle, setNewTodoTitle] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      addTodo(newTodoTitle.trim());
      setNewTodoTitle('');
    }
  };

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Add new todo"
            disabled={isAddingTodo}
          />
          <button
            type="submit"
            disabled={isAddingTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
          >
            {isAddingTodo ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className="flex items-center gap-2 p-2 border rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              disabled={isTogglingTodo}
              className="h-5 w-5"
            />
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              disabled={isRemovingTodo}
              className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-red-300"
            >
              {isRemovingTodo ? '...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};