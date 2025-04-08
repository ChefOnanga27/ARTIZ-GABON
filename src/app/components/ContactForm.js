import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    location: "Essassa",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    

    <div className="max-w-6xl mx-auto  px-4 text-center">
           <h2 className=" text-center text-4xl font-bold mb-14 ">
          Contactez-nous
        </h2>
             
    <div className="flex bg-gray-200 flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-6">
       
      
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-center h-[600px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre email"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Lieux</label>
            <div className="relative">
              <FaLocationDot className="absolute left-3 top-3 text-gray-500" />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Essassa">Essassa</option>
                <option value="Libreville">Libreville</option>
                <option value="Owendo">Owendo</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Laissez un message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dites-nous ce que vous pensez..."
              rows="4"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>Envoyer ➡️</span>
          </motion.button>
        </form>
      </motion.div>

     
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/MEL.png"
          alt="Femme en tenue traditionnelle"
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
    </div>
    </div>
  );
};

export default ContactForm;
