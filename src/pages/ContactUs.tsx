import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-b61ae4c/www.decorilla.com/online-decorating/wp-content/uploads/2022/01/Modern-online-office-design-by-Decorilla-2048x1365.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or inquiries? Feel free to reach out to us!
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500" />
            <p className="text-gray-600">
              <strong>Email:</strong> <a href="mailto:[Contact Email]" className="text-blue-500 hover:underline">[Contact Email]</a>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-green-500" />
            <p className="text-gray-600">
              <strong>Phone:</strong> [Contact Number]
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-red-500" />
            <p className="text-gray-600">
              <strong>Address:</strong> [Physical Address]
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
