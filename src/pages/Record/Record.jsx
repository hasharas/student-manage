import React, { useState } from 'react';
// import ActionsEditDelet from '../../component/Buttons/ActionsEditDelet';

const Recorde = ({ formData, setFormData, isEditMode, onSubmit, onCancel }) => {
      const [error, setError] = useState('');
      const [imageFile, setImageFile] = useState(null);

      const handleChange = (e) => {

            const { name, value, type } = e.target;

            if (type === "file") {
                  const file = e.target.files[0];
                  setImageFile(file); // Set the uploaded file
                  return;
            }

            if (name === 'contactNo') {
                  const isValid = /^[+94]?[0-9]{0,15}$/.test(value);
                  if (!isValid) {
                        setError('Invalid contact number. Only digits and an optional "+" at the start are allowed.');
                        return;
                  } else {
                        setError(''); // Clear error if valid
                  }
            }
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleFormSubmit = async (e) => {
            e.preventDefault();

            if (!/^[+94]?[0-9]{0,15}$/.test(formData.contactNo)) {
                  alert('Please provide a valid contact number (7-15 digits, optional "+" at the start).');
                  return;
            }



            //include both text and the uploaded image
            const formDataObj = new FormData();
            formDataObj.append("firstName", formData.firstName);
            formDataObj.append("lastName", formData.lastName);
            formDataObj.append("dob", formData.dob);
            formDataObj.append("contactNo", formData.contactNo);

            if (imageFile) {
                  formDataObj.append("image", imageFile); // uploaded image to FormData
            } else {
                  alert("Please upload an image.");
                  return;
            }
            // Pass the FormData object to the onSubmit function
            onSubmit(formDataObj);
      };

      return (
            <form onSubmit={handleFormSubmit} className="bg-gray-100 p-5 shadow rounded mb-5">
                  <h2 className="text-xl text-center font-bold mb-4">
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
                        <input
                              type="file"
                              name="image"
                              // value={formData.imageUrl}
                              onChange={handleChange}
                              // placeholder="image"
                              className="border p-2 rounded"
                              required
                        />
                        {/* <div className="border-dashed border-2 mx-5 border-gray-500 flex justify-center items-center h-[70px] cursor-pointer">
                              <p className="text-lg font-semibold text-gray-500" onChange={handleChange}>+ Add Image</p>
                        </div> */}

                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                  </div>
                  <div className="mt-4 flex gap-4 w-full">
                        <button type="submit" className="bg-blue-500 sm:w-[25%]  xl:w-[49.5%] l:w-[50%]  text-white px-4 py-2 rounded">
                              {isEditMode ? 'Update Record' : 'Add Record'}
                        </button>
                        {isEditMode && (
                              <button
                                    type="button"
                                    onClick={onCancel}
                                    className="bg-gray-500 sm:w-[25%]  xl:w-[49.5%] l:w-[50%] text-white px-4 py-2 rounded"
                              >
                                    Cancel
                              </button>
                        )}

                        {/* <ActionsEditDelet /> */}

                  </div>
            </form>
      );
};

export default Recorde;
