import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '@/service/todo.service';
import { Todo, TodoState } from '@/types/todo.types';

const TODO_QUERY_KEY = 'todos';

export const useTodoStore = () => {
  const queryClient = useQueryClient();

  // Fetch Todos Query
  const { 
    data: todos = [], 
    isLoading, 
    error 
  } = useQuery<Todo[], Error>({
    queryKey: [TODO_QUERY_KEY],
    queryFn: todoService.getTodos,
  });

  // Add Todo Mutation
  const addTodoMutation = useMutation({
    mutationFn: todoService.createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>([TODO_QUERY_KEY], (old = []) => [...old, newTodo]);
    },
  });

  // Remove Todo Mutation
  const removeTodoMutation = useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Todo[]>([TODO_QUERY_KEY], (old = []) => 
        old.filter(todo => todo.id !== deletedId)
      );
    },
  });

  // Toggle Todo Mutation
  const toggleTodoMutation = useMutation({
    mutationFn: async (id: number) => {
      const todo = todos.find(t => t.id === id);
      if (!todo) throw new Error('Todo not found');
      return todoService.updateTodo(id, { ...todo, completed: !todo.completed });
    },
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>([TODO_QUERY_KEY], (old = []) =>
        old.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
      );
    },
  });

  return {
    todos,
    isLoading,
    error,
    addTodo: (title: string) => addTodoMutation.mutate(title),
    removeTodo: (id: number) => removeTodoMutation.mutate(id),
    toggleTodo: (id: number) => toggleTodoMutation.mutate(id),
    isAddingTodo: addTodoMutation.isPending,
    isRemovingTodo: removeTodoMutation.isPending,
    isTogglingTodo: toggleTodoMutation.isPending,
    addError: addTodoMutation.error,
    removeError: removeTodoMutation.error,
    toggleError: toggleTodoMutation.error,
  };
};