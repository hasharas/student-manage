import React, { useState, useEffect } from 'react';
import userService from '../services/UserService';
import StudentTable from '../../component/StudentTable/StudentTable';
import Recorde from '../Record/Record';

const DetailView = () => {
      const [users, setUsers] = useState([]); // List of users

      const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            dob: '',
            contactNo: '',
            id: '',
      }); // Form data state

      const [isEditMode, setIsEditMode] = useState(false);
      const [currentEditId, setCurrentEditId] = useState(null);

      // Fetch all users on load
      useEffect(() => {
            const fetchUsers = async () => {
                  try {
                        const fetchedUsers = await userService.fetchAllUsers();
                        // dob to string
                        const formattedUsers = fetchedUsers.map((user) => ({
                              ...user,
                              dob: new Date(user.dob).toISOString().split('T')[0],
                        }));
                        setUsers(formattedUsers);
                  } catch (error) {
                        console.error('Error fetching users:', error);
                  }
            };
            fetchUsers();
      }, []);

      //update and create user
      const handleSubmit = async (data) => {
            if (isEditMode) {
                  try {
                        //update user 
                        const updatedUser = await userService.updateUserById(currentEditId, data);

                        if (updatedUser) {
                              setUsers((prev) =>
                                    prev.map((user) =>
                                          user.id === currentEditId ? { ...user, ...updatedUser } : user
                                    )
                              );
                              alert('User updated successfully!');
                        } else {
                              console.error('No data returned from update API');
                        }
                  } catch (error) {
                        console.error('Error updating user:', error);
                  }
            } else {
                  try {
                        // Create a new user
                        const newUser = await userService.createUser(data);
                        setUsers((prev) => [...prev, newUser]);
                        alert('User added successfully!');
                  } catch (error) {
                        console.error('Error adding user:', error);
                  }
            }

            resetForm();
      };

      //edit handlee
      const handleEdit = (user) => {
            setIsEditMode(true);
            setCurrentEditId(user.id);
            setFormData({
                  firstName: user.firstName,
                  lastName: user.lastName,
                  dob: new Date(user.dob).toISOString().split('T')[0], // to date string
                  contactNo: user.contactNo,
                  id: user.id,
            });
      };
      //delete handlee
      const handleDelete = async (userId) => {
            try {
                  await userService.deleteUserById(userId);
                  setUsers((prev) => prev.filter((user) => user.id !== userId));
                  alert('User deleted successfully!');
            } catch (error) {
                  console.error('Error deleting user:', error);
            }
      };
      //after submiting reset form 
      const resetForm = () => {
            setFormData({
                  firstName: '',
                  lastName: '',
                  dob: '',
                  contactNo: '',
                  id: '',
            });
            setIsEditMode(false);
            setCurrentEditId(null);
      };

      return (
            <div className="mx-5 my-5">
                  <Recorde
                        formData={formData}
                        setFormData={setFormData}
                        isEditMode={isEditMode}
                        onSubmit={handleSubmit}
                        onCancel={resetForm}
                  />
                  <StudentTable
                        users={users}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                  />
            </div>
      );
};

export default DetailView;
