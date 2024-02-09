import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3sl font-bold mb-4">Make an Appointment</h2>
      <hr className='bg-blue-300 h-1 w-20 m-auto' />

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Time:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message (Optional):
          </label>
          <textarea
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
