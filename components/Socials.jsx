import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaTelegram />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
