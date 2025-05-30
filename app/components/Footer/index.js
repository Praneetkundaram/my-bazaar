import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#002B60] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Filters */}
        <div>
          <h4 className="font-semibold mb-4">Filters</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electronics
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-gray-300">© 2024 American</p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
