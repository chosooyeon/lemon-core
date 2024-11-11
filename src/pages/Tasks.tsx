import { useTranslation } from 'react-i18next';
import { useTodoStore } from '@/hooks/useTodoStore';

export const TasksPage = () => {
  const { t } = useTranslation();
  const { todos, addTodo, removeTodo, toggleTodo, isLoading, error } = useTodoStore();
  
  if (isLoading) return <div>Loading...</div>;

  const handleToggle = async (id: number) => {
    await toggleTodo(id);
  };

  const handleDelete = async (id: number) => {
    await removeTodo(id);
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t('tasks')}</h1>
      
      {isLoading && <div>Loading...</div>}
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};