// This is a TypeScript file, but with a .js extension for browser compatibility
import { Todo, createTodo, toggleTodo } from './todo.js';
import { saveToLocalStorage, loadFromLocalStorage } from './store.js';

// Type definitions
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

// Initial state with type annotation
const state: TodoState = {
  todos: loadFromLocalStorage<Todo[]>('todos') || [],
  filter: 'all' as const
};

// DOM Elements with type annotations
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const filterAll = document.getElementById('filter-all') as HTMLButtonElement;
const filterActive = document.getElementById('filter-active') as HTMLButtonElement;
const filterCompleted = document.getElementById('filter-completed') as HTMLButtonElement;

// Function to render todos
function renderTodos(): void {
  if (!todoList) return;
  
  // Clear the current list
  todoList.innerHTML = '';
  
  // Filter todos based on current filter
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });
  
  // Render each todo
  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) {
      li.classList.add('completed');
    }
    
    // Create todo item HTML structure
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
      <span class="todo-text">${todo.text}</span>
      <button class="todo-delete">×</button>
    `;
    
    // Add event listeners
    const checkbox = li.querySelector('.todo-checkbox') as HTMLInputElement;
    checkbox.addEventListener('change', () => {
      toggleTodoItem(todo.id);
    });
    
    const deleteButton = li.querySelector('.todo-delete') as HTMLButtonElement;
    deleteButton.addEventListener('click', () => {
      deleteTodoItem(todo.id);
    });
    
    todoList.appendChild(li);
  });
  
  // Save state to localStorage
  saveToLocalStorage('todos', state.todos);
  
  // Update filter button active states
  updateFilterButtons();
}

// Add new todo
function addTodo(text: string): void {
  const newTodo = createTodo(text);
  state.todos.push(newTodo);
  renderTodos();
}

// Toggle todo completed state
function toggleTodoItem(id: number): void {
  state.todos = state.todos.map(todo => 
    todo.id === id ? toggleTodo(todo) : todo
  );
  renderTodos();
}

// Delete todo
function deleteTodoItem(id: number): void {
  state.todos = state.todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Set active filter
function setFilter(filter: TodoState['filter']): void {
  state.filter = filter;
  renderTodos();
}

// Update filter button active states
function updateFilterButtons(): void {
  filterAll.classList.toggle('active', state.filter === 'all');
  filterActive.classList.toggle('active', state.filter === 'active');
  filterCompleted.classList.toggle('active', state.filter === 'completed');
}

// Event listeners
todoForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
  }
});

filterAll.addEventListener('click', () => setFilter('all'));
filterActive.addEventListener('click', () => setFilter('active'));
filterCompleted.addEventListener('click', () => setFilter('completed'));

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  console.log('TypeScript Todo app initialized');
  renderTodos();
}); 