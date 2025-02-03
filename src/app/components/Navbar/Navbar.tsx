import Link from "next/link";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const logo = "/assets/LogoTcss.png";

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
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <Link href="#">
            <Image
              className="mx-2"
              src={logo}
              alt=""
              width={50}
              height={33}
              quality={100}
            />
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

      </nav>
    </>
  );
};
export default Navbar;
