import React, { useState } from 'react';
import { supabase } from '../supabase';

export default function ColumnEditor({ boardId, onClose }) {
  const [title, setTitle] = useState('');

  async function saveColumn() {
    const { data } = await supabase.from('columns').insert({
      title,
      board_id: boardId,
    }).select();
    onClose();
  }

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="font-bold mb-2">Create Column</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Column Title"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={saveColumn} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancel
      </button>
    </div>
  );
}
