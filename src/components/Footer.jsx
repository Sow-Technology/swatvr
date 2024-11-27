import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "VR Rentals", href: "/services#rentals" },
        { name: "VR Experiences", href: "/services#experiences" },
        { name: "Corporate Events", href: "/services#corporate" },
        { name: "Technical Support", href: "/services#support" },
      ],
    },
    {
      title: "Contact Us",
      content: [
        "123 VR Street, Tech City, 12345",
        "Phone: (123) 456-7890",
        "Email: info@vrrentals.com",
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: "https://facebook.com" },
    { Icon: FaTwitter, href: "https://twitter.com" },
    { Icon: FaInstagram, href: "https://instagram.com" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-indigo-900 text-neutral-900 py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              className="h-24  w-auto"
              alt=""
              width={500}
              height={500}
            />
            <h2 className="text-2xl font-bold mb-4">SWAT VR</h2>
            <p className="text-gray-900">
              Experience the future of virtual reality today with our premium VR
              rental services.
            </p>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              {section.links ? (
                <ul>
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-2">
                      <a
                        href={link.href}
                        className="text-gray-900 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i} className="text-gray-900 mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-900 text-sm mb-4 md:mb-0">
            © {currentYear} VR Rentals. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
