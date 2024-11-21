import React from 'react';

const Actions = ({ userId, onEdit, onDelete }) => {
      return (
            <td className="py-2 px-4">
                  <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                        onClick={() => onEdit(userId)}
                  >
                        Edit
                  </button>
                  <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => onDelete(userId)}
                  >
                        Delete
                  </button>
            </td>
      );
};

export default Actions;
