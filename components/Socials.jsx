import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, path: "https://github.com/ferpheri/" },
  { icon: <FaTwitter />, path: "https://x.com/ferpheri" },
  { icon: <FaTelegram />, path: "https://t.me/ferpheri" },
  { icon: <FaInstagram />, path: "https://instagram.com/ferpheri" },
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
