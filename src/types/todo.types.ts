export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}