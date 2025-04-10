import React from 'react';

export default function StatusFilter({ onFilter }) {
  function handleChange(e) {
    onFilter(e.target.value);
  }

  return (
    <div className="mb-4">
      <label className="font-medium">Filter by Status</label>
      <select onChange={handleChange} className="border p-2">
        <option value="">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}
