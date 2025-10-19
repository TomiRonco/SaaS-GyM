"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyData } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold text-white">{companyData.name}</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                {companyData.description}
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center md:justify-center gap-4"
            >
              {companyData.navigation.footer.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <div className="space-y-2">
                <a href={`mailto:${companyData.contact.email}`} className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {companyData.contact.email}
                </a>
                <a href={`tel:${companyData.contact.phone}`} className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {companyData.contact.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyData.name}. {companyData.messages.footer.copyright}
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-gray-400 text-sm">{companyData.messages.footer.madeWith}</span>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{companyData.messages.footer.systemStatus}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;