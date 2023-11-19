import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg border border-blue-500">
        <div className="rounded-lg p-10 overflow-hidden shadow-3xl transform hover:scale-105 transition-transform duration-200">
          <iframe
            src="https://maps.google.com/maps?q=melbourne&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            width="480"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="rounded-lg overflow-hidden shadow-3xl p-10 bg-black bg-opacity-80 text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input {...register("name", { required: "Please enter your name" })} className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white" type="text" placeholder="Your Name" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <input {...register("email", { required: "Please enter your email" })} className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white" type="email" placeholder="Your Email" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input {...register("phone", { required: "Please enter your phone number" })} className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white" type="tel" placeholder="Your Phone Number" />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            <input {...register("subject", { required: "Please enter a subject" })} className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white" type="text" placeholder="Subject" />
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            <textarea {...register("message", { required: "Please enter your message" })} className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white" placeholder="Your Message"></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;