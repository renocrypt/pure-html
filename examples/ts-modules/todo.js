// Todo interface
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Create a new todo
export function createTodo(text: string): Todo {
  return {
    id: Date.now(),
    text,
    completed: false
  };
}

// Toggle todo completed state
export function toggleTodo(todo: Todo): Todo {
  return {
    ...todo,
    completed: !todo.completed
  };
}

// Update todo text
export function updateTodoText(todo: Todo, text: string): Todo {
  return {
    ...todo,
    text
  };
} 