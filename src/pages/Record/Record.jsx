import React from 'react';

const Record = () => {
      return (
            <form className=" mx-auto bg-gray-300 shadow-md rounded p-6">
                  <div className=''>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-[50px] mb-5 gap-4 sm:gap-[10px]">
                              <div className="mb-2">
                                    <label className="block text-base font-medium text-gray-700">First Name</label>
                                    <input
                                          type="text"
                                          name="firstName"
                                          //     value={formData.firstName}
                                          //     onChange={handleChange}
                                          className="mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-2">
                                    <label className="block text-base font-medium text-gray-700">Last Name</label>
                                    <input
                                          type="text"
                                          name="lastName"
                                          //     value={formData.lastName}
                                          //     onChange={handleChange}
                                          className="mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4">
                                    <label className="block text-base font-medium text-gray-700">Date of Birth</label>
                                    <input
                                          type="date"
                                          name="dob"
                                          //     value={formData.dob}
                                          //     onChange={handleChange}
                                          className="mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4">
                                    <label className="block text-base font-medium text-gray-700">Contact No</label>
                                    <input
                                          type="text"
                                          name="contactNo"
                                          //     value={formData.contactNo}
                                          //     onChange={handleChange}
                                          className="mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          className="w-full bg-gray-500 text-base text-white py-2 px-4 rounded hover:bg-gray-600"
                                    >
                                          Submit image
                                    </button>
                              </div>

                              <div className="border-dashed border-2 border-gray-500 flex justify-center items-center h-[100px] cursor-pointer">
                                    <p className="text-lg font-semibold text-gray-500">+ Add Image</p>
                              </div>

                        </div>

                        <div className='mx-4 sm:mx-[50px]'>
                              <button
                                    type="submit"
                                    className="w-full text-base bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                              >
                                    Submit
                              </button>
                        </div>
                  </div>
            </form>
      );
}

export default Record;
