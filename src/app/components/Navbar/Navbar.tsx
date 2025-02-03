"use client";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {


  const socialLinks = [
    {
      platform: "Linkedin",
      icon: <IoLogoLinkedin />,
    },
    {
      platform: "Fagithub",
      icon: <FaGithub />,
    },
    {
      platform: "FaInstagram",
      icon: <FaInstagram />,
    },
    {
      platform: "facebook",
      icon: <FaFacebookSquare />,
    },
  ];

  return (
    <>
      <motion.nav
      initial={{ opacity: 0 , x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.8, delay: 2 }}


      className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <Link href="#">
             <p className="tracking-widest">CRACKER PORTFOLIO</p>
          </Link>
        </div>

        {/* loop icon */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              rel="noopener noreferrer"
              aria-label="Linkedin"
              href={"#"}
            >
              {link.icon}
            </Link>
          ))}
        </div>

      </motion.nav>
    </>
  );
};
export default Navbar;
