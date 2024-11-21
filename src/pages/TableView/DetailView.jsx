import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/UserService';
import StudentTable from '../../component/StudentTable/StudentTable';

const DetailView = () => {
      const [users, setUsers] = useState([]);
      const navigate = useNavigate();

      // Fetch all users 
      useEffect(() => {
            const fetchUsers = async () => {
                  try {
                        const fetchedUsers = await userService.fetchAllUsers();
                        setUsers(fetchedUsers);
                  } catch (error) {
                        console.error('Error fetching users:', error);
                  }
            };

            fetchUsers();
      }, []);

      const handleDelete = async (userId) => {
            try {
                  const response = await userService.deleteUserById(userId);
                  if (response) {
                        console.log(`User with ID ${userId} deleted successfully.`);
                        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
                        alert('User delete successfully!');
                  } else {
                        console.error('Failed to delete user.');
                  }
            } catch (error) {
                  console.error('Error deleting user:', error);
            }
      };

      const handleEdit = (id) => {
            // Navigate to the edit page 
            navigate(`/editrecord/${id}`);
      };

      return (
            <div className="overflow-x-auto">
                  <StudentTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
      );
};

export default DetailView;
