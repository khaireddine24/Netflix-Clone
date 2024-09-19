import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-8 container max-w-[1000px]">
        <div className="flex my-10 text-white text-2xl gap-4 items-start">
          <Link to={"https://www.facebook.com/kheriddine.ihrissane.1"}>
            <FaFacebookF className="cursor-pointer hover:text-red transition-colors"/>
          </Link>
          <Link to={"https://www.instagram.com/khaireddine.ihrissane/"}>
            <BsInstagram className="cursor-pointer hover:text-red transition-colors"/>
          </Link>
          <Link to={"https://x.com/KIhrissane27637"}>
            <FaSquareXTwitter className="cursor-pointer hover:text-red transition-colors"/>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 pb-6 border-b border-gray-800">
          <div className="w-full md:w-1/4">
            <ul className="text-sm space-y-2">
              <li className="footer_link">Audio description</li>
              <li className="footer_link">Help Center</li>
              <li className="footer_link">Gift Cards</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="text-sm space-y-2">
              <li className="footer_link">Media Center</li>
              <li className="footer_link">Privacy</li>
              <li className="footer_link">Speed Test</li>
              <li className="footer_link">Subscriptions</li>
              <li className="footer_link">Trams and conditions</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="text-sm space-y-2">
              <li className="footer_link">Legal Notices</li>
              <li className="footer_link">Cookie Preferences</li>
              <li className="footer_link">Corporate Information</li>
              <li className="footer_link">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
