import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import TodoForm from '../ui/TodoForm';
import { PlusIcon, TrashIcon, CheckIcon } from '../components/Icons';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, onDelete, onToggle }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col min-h-screen py-20 px-4 sm:px-28 bg-gray-100 dark:bg-gray-900">
        <div className="flex justify-end mb-4">
                    <Button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2">
            <PlusIcon className="w-4 h-4" />
            <span>New To-Do</span>
          </Button>
        </div>
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md overflow-hidden">
          <thead className="text-xs uppercase bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-700 dark:to-blue-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Titre</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Statut</th>
              <th scope="col" className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {todos.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">Aucune tâche</td>
              </tr>
            )}
            {todos.map((todo) => (
              <tr key={todo.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {todo.title}
                </th>
                <td className="px-6 py-4">{todo.description}</td>
                <td className="px-6 py-4">
                  {todo.completed ? (
                    <span className="bg-green-200 text-green-700 py-1 px-2 rounded-lg">Terminée</span>
                  ) : (
                    <span className="bg-red-200 text-red-700 py-1 px-2 rounded-lg">En cours</span>
                  )}
                </td>
                <td className="flex  py-4 space-x-2">
                  <Button onClick={() => onToggle(todo.id)} className="text-xs flex items-center space-x-1">
                    <CheckIcon className="w-4 h-4" />
                    <span>{todo.completed ? 'Reprendre' : 'Compléter'}</span>
                  </Button>
                  <Button onClick={() => onDelete(todo.id)} className="text-xs flex items-center space-x-1 bg-red-500 hover:bg-red-600">
                    <TrashIcon className="w-4 h-4" />
                    <span>Supprimer</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} hideHeader>
        <TodoForm />
      </Modal>
    </>
  );
};
export default TodoList;