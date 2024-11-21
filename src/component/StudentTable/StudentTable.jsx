import React from 'react';
import Actions from '../Buttons/Actions';

const StudentTable = ({ users, onEdit, onDelete }) => {
      return (
            <table className="min-w-full bg-white shadow-md rounded mt-6">
                  <thead className="bg-gray-800 text-white text-center">
                        <tr>
                              <th className="py-2 px-4">Student Id</th>
                              <th className="py-2 px-4">First Name</th>
                              <th className="py-2 px-4">Last Name</th>
                              <th className="py-2 px-4">DOB</th>
                              <th className="py-2 px-4">Contact No</th>
                              <th className="py-2 px-4"></th>
                        </tr>
                  </thead>
                  <tbody>
                        {users.length > 0 ? (
                              users.map((user) => (
                                    <tr key={user._id} className="border-b text-center">
                                          <td className="py-2 px-4">{user.id}</td>
                                          <td className="py-2 px-4">{user.firstName}</td>
                                          <td className="py-2 px-4">{user.lastName}</td>
                                          <td className="py-2 px-4">{new Date(user.dob).toLocaleDateString()}</td>
                                          <td className="py-2 px-4">{user.contactNo}</td>
                                          <Actions userId={user.id} onEdit={onEdit} onDelete={onDelete} />
                                    </tr>
                              ))
                        ) : (
                              <tr>
                                    <td colSpan="6" className="text-center py-4">
                                          No users found
                                    </td>
                              </tr>
                        )}
                  </tbody>
            </table>
      );
};

export default StudentTable;
