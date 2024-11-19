import React from 'react';

const DetailView = () => {
      return (

            <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md rounded mt-6">
                        <thead className="bg-gray-800 text-white">
                              <tr>
                                    <th className="py-2 px-4">First Name</th>
                                    <th className="py-2 px-4">Last Name</th>
                                    <th className="py-2 px-4">DOB</th>
                                    <th className="py-2 px-4">Contact No</th>
                                    <th className="py-2 px-4">Actions</th>
                              </tr>
                        </thead>
                        {/* <tbody>
                              {details.map((detail) => (
                                    <tr className="border-b">
                                          <td className="py-2 px-4">{detail.firstName}</td>
                                          <td className="py-2 px-4">{detail.lastName}</td>
                                          <td className="py-2 px-4">{detail.dob}</td>
                                          <td className="py-2 px-4">{detail.contactNo}</td>
                                          <td className="py-2 px-4">
                                                <button
                                                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                                                // onClick={() => onEdit(detail)}
                                                >
                                                      Edit
                                                </button>
                                                <button
                                                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                                // onClick={() => onDelete(detail.id)}
                                                >
                                                      Delete
                                                </button>
                                          </td>
                                    </tr>
                              ))}
                        </tbody> */}
                  </table>


            </div>
      );
}

export default DetailView;
