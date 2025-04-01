import React from 'react';

const Footer = () => {
  return (
    <div className="bg-orange-500 text-gray-100 mt-16 py-16 p-80 rounded-t-full">
      {/* Footer content */}
      <footer className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Programs</a></li>
              <li><a href="#" className="hover:text-gray-300">Admission</a></li>
              <li><a href="#" className="hover:text-gray-300">News/Events</a></li>
              <li><a href="#" className="hover:text-gray-300">Student Forms</a></li>
              <li><a href="#" className="hover:text-gray-300">Payment Notice</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Banasthali, Ithari-1, Sunsari, Nepal</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="hensangl.np" className="hover:text-gray-300">
                  lamahensang100@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>9746969899</span>
              </li>
            </ul>
          </div>

          {/* Mission Statement and Social Media */}
          <div>
            <div className="mb-6">
              <p className="italic">
                "Helping Students Grow Into Leaders of Today and Tomorrow"
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social media icons... */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>© {new Date().getFullYear()} School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
