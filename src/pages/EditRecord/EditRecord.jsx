// src/pages/EditRecord.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../services/UserService';

const EditRecord = () => {
      const { userId } = useParams(); // Get the userId from URL params
      const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            dob: '',
            contactNo: '',
            studentId: ''
      });
      const navigate = useNavigate();

      useEffect(() => {
            const fetchUser = async () => {
                  try {
                        const user = await userService.fetchUserById(userId);

                        // Convert dob to YYYY-MM-DD
                        if (user.dob) {
                              user.dob = new Date(user.dob).toISOString().split('T')[0];
                        }

                        setFormData(user);
                  } catch (error) {
                        console.error('Error fetching user:', error);
                  }
            };

            fetchUser();
      }, [userId]);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await userService.updateUserById(userId, formData);
                  alert('User updated successfully!');
                  navigate('/'); // Redirect back to the details page
            } catch (error) {
                  console.error('Error updating user:', error);
                  alert('Failed to update user.');
            }
      };

      const handleCancel = () => {
            navigate('/'); // Navigate back
      };

      return (
            <div className='mx-5 my-5 h-auto'>
                  <form onSubmit={handleSubmit} className="mx-auto bg-gray-300 shadow-md rounded px-6 pb-6">
                        <span className="text-xl flex font-bold px-5 py-5 justify-center">UPDATE YOUR DETAILS</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-[50px] mb-5 gap-8 sm:gap-[10px]">
                              <div className="mb-2 mx-5">
                                    <label className="block text-base font-medium text-gray-700">First Name</label>
                                    <input
                                          type="text"
                                          name="firstName"
                                          value={formData.firstName}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-2 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Last Name</label>
                                    <input
                                          type="text"
                                          name="lastName"
                                          value={formData.lastName}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Date of Birth</label>
                                    <input
                                          type="date"
                                          name="dob"
                                          value={formData.dob}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Contact No</label>
                                    <input
                                          type="text"
                                          name="contactNo"
                                          value={formData.contactNo}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              {/* <div className="mb-4 mx-5">
                        <label className="block text-base font-medium text-gray-700">Student Id</label>
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div> */}
                              <div className="border-dashed border-2 mx-5 border-gray-500 flex justify-center items-center h-[70px] cursor-pointer">
                                    <p className="text-lg font-semibold text-gray-500">+ Add Image</p>
                              </div>
                              <div className="mb-4 mx-5">
                                    <button
                                          type="submit"
                                          className="w-full text-base bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                                    >
                                          Submit Information
                                    </button>
                              </div>
                              <div className="mb-4 mx-5">
                                    <button
                                          type="button"
                                          onClick={handleCancel}
                                          className="w-full bg-gray-500 text-base text-white py-2 px-4 rounded hover:bg-gray-600"
                                    >
                                          Cancel
                                    </button>
                              </div>
                        </div>
                  </form>
            </div>
      );
};

export default EditRecord;
