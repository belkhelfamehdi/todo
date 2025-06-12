import React, { useState } from "react";
import Button from "../components/Button";
import { PlusIcon } from "../components/Icons";

const TodoForm: React.FC = () => {
  const [status, setStatus] = useState("not_completed");

  return (
    <div className="flex flex-col items-center justify-center pt-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">New To-Do</h1>
      <form className="w-lg bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
          <input
            type="text"
            name="title"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Statut</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block px-3 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="not_completed">Non complétée</option>
            <option value="completed">Complétée</option>
          </select>
        </div>

        <Button type="submit" className="flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Ajouter To-Do</span>
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
