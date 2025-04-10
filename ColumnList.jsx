import React, { useState } from 'react';
import Column from './Column';
import { supabase } from '../supabase';

export default function ColumnList({ boardId }) {
  const [columns, setColumns] = useState([]);
  const [newColumn, setNewColumn] = useState('');

  async function fetchColumns() {
    const { data } = await supabase.from('columns').select().eq('board_id', boardId);
    setColumns(data);
  }

  async function createColumn() {
    const { data } = await supabase.from('columns').insert({ title: newColumn, board_id: boardId }).select();
    setColumns((prev) => [...prev, ...data]);
    setNewColumn('');
  }

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Columns</h3>
      <input
        value={newColumn}
        onChange={(e) => setNewColumn(e.target.value)}
        className="border p-2 mb-2 w-full"
        placeholder="New column"
      />
      <button onClick={createColumn} className="bg-green-500 text-white px-4 py-2 rounded">
        Create Column
      </button>
      <div className="mt-4">
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
      </div>
    </div>
  );
}
