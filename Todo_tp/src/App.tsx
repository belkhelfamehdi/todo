import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { useAuth } from './AuthContext';
import * as api from './api';

function App() {
  type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };

  const { token } = useAuth();
  const [title, setTitle] = useState('Todo App');
  const [todos, setTodos] = useState<Todo[]>([]);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('My To-Do List');
        break;
      case '/login':
        setTitle('Login');
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!token) return;
    api.getTodos(token).then(setTodos).catch(() => setTodos([]));
  }, [token]);

  const handleToggle = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo || !token) return;
    const updated = await api.updateTodo(id, { ...todo, completed: !todo.completed }, token);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const handleDelete = async (id: number) => {
    if (!token) return;
    await api.deleteTodo(id, token);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCreate = async (todo: Omit<Todo, 'id'>) => {
    if (!token) return;
    const created = await api.createTodo(todo, token);
    setTodos((prev) => [...prev, created]);
  };

  return (
    <div>
      <Navbar title={title} />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} onDelete={handleDelete} onToggle={handleToggle} onCreate={handleCreate} />} />
      </Routes>
    </div>
  )
}

export default App
