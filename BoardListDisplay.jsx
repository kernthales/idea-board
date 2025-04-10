import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

export default function BoardListDisplay() {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoards();
  }, []);

  async function fetchBoards() {
    const { data } = await supabase.from('boards').select();
    setBoards(data);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Boards</h1>
      <ul>
        {boards.map((board) => (
          <li
            key={board.id}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => navigate(`/board/${board.id}`)}
          >
            {board.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
