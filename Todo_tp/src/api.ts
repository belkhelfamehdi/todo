const API_URL = 'http://localhost:8080/api';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function authHeader(token?: string): Record<string, string> {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  return data.token as string;
}

export async function signup(username: string, password: string, role: string) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  });
  if (!res.ok) throw new Error('Signup failed');
  return res.json();
}

export async function getTodos(token: string) {
  const res = await fetch(`${API_URL}/todos`, {
    headers: authHeader(token)
  });
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json() as Promise<Todo[]>;
}

export async function createTodo(todo: Omit<Todo, 'id'>, token: string) {
  const res = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(token) },
    body: JSON.stringify(todo)
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json() as Promise<Todo>;
}

export async function updateTodo(id: number, todo: Todo, token: string) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(token) },
    body: JSON.stringify(todo)
  });
  if (!res.ok) throw new Error('Failed to update todo');
  return res.json() as Promise<Todo>;
}

export async function deleteTodo(id: number, token: string) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: authHeader(token)
  });
  if (!res.ok) throw new Error('Failed to delete todo');
}
