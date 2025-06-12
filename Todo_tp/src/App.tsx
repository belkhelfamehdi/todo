import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };

  const [title, setTitle] = useState('Todo App');
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Première tâche', description: 'Exemple', completed: false },
  ]);
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

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Navbar title={title} />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} onDelete={handleDelete} onToggle={handleToggle} />} />
      </Routes>
    </div>
  )
}

export default App
