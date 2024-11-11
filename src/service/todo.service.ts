import axios from 'axios';
import { Todo } from '@/types/todo.types';

const API_URL = 'http://localhost:3001';

export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await axios.get(API_URL+'/todos');
    console.log(response,"res")
    if (!response) throw new Error('Failed to fetch todos');
    return response.data;
  },

  createTodo: async (title: string): Promise<Todo> => {
    const response = await axios.post(API_URL+'/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    });
    if (!response) throw new Error('Failed to create todo');
    return response.data;
  },

  updateTodo: async (id: number, todo: Partial<Todo>): Promise<Todo> => {
    const response = await axios.patch(`${API_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    if (!response) throw new Error('Failed to update todo');
    return response.data;
  },

  deleteTodo: async (id: number): Promise<void> => {
    const response = await axios.delete(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response) throw new Error('Failed to delete todo');
  },
};