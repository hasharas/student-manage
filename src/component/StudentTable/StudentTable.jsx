import React from 'react';

const StudentTable = ({ users, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto sm:w-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Student ID</th>
                        <th className="border border-gray-300 px-4 py-2">First Name</th>
                        <th className="border border-gray-300 px-4 py-2">Last Name</th>
                        <th className="border border-gray-300 px-4 py-2">DOB</th>
                        <th className="border border-gray-300 px-4 py-2">Contact No</th>
                        <th className="border border-gray-300 px-4 py-2">image</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.dob}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.contactNo}</td>
                            <td className="border border-gray-300 px-4 py-0 text-center">
                                <img src={user.imageUrl} alt="User" className="w-10 h-10 object-cover mx-auto " />
                            </td>

                            <td className="border border-gray-300 px-4 py-2 flex justify-around">
                                <button
                                    onClick={() => onEdit(user)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(user.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
