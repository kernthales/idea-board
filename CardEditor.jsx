import React, { useState } from 'react';
import { supabase } from '../supabase';

export default function CardEditor({ columnId, onClose }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('blue');

  async function saveCard() {
    const { data } = await supabase.from('cards').insert({
      column_id: columnId,
      title,
      status,
      color,
    }).select();
    onClose(); // Close editor after save
  }

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="font-bold mb-2">Create Card</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Card Title"
        className="border p-2 mb-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border p-2 mb-4 w-full"
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
      </select>
      <button onClick={saveCard} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancel
      </button>
    </div>
  );
}
