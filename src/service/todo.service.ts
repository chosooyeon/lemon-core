import { Todo } from '@/types/todo.types';

export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await fetch('/api/todos');
    if (!response.ok) throw new Error('Failed to fetch todos');
    return response.json();
  },

  createTodo: async (title: string): Promise<Todo> => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    });
    if (!response.ok) throw new Error('Failed to create todo');
    return response.json();
  },

  updateTodo: async (id: number, todo: Partial<Todo>): Promise<Todo> => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error('Failed to update todo');
    return response.json();
  },

  deleteTodo: async (id: number): Promise<void> => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
  },
};