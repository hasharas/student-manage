import React from 'react';

const Recorde = ({ formData, setFormData, isEditMode, onSubmit, onCancel }) => {
      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleFormSubmit = (e) => {
            e.preventDefault();
            onSubmit(formData);
      };

      return (
            <form onSubmit={handleFormSubmit} className="bg-gray-100 p-5 shadow rounded mb-5">
                  <h2 className="text-xl font-bold mb-4">
                        {isEditMode ? 'Edit Record' : 'Add New Record'}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                        <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                              className="border p-2 rounded"
                              required
                        />
                        <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              className="border p-2 rounded"
                              required
                        />
                        <input
                              type="date"
                              name="dob"
                              value={formData.dob}
                              onChange={handleChange}
                              className="border p-2 rounded"
                              required
                        />
                        <input
                              type="text"
                              name="contactNo"
                              value={formData.contactNo}
                              onChange={handleChange}
                              placeholder="Contact Number"
                              className="border p-2 rounded"
                              required
                        />
                        {/* <input
                              type="text"
                              name="studentId"
                              value={formData.id}
                              onChange={handleChange}
                              placeholder="Student ID"
                              className="border p-2 rounded"
                              required
                        /> */}
                  </div>
                  <div className="mt-4 flex gap-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                              {isEditMode ? 'Update Record' : 'Add Record'}
                        </button>
                        {isEditMode && (
                              <button
                                    type="button"
                                    onClick={onCancel}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                              >
                                    Cancel
                              </button>
                        )}
                  </div>
            </form>
      );
};

export default Recorde;
