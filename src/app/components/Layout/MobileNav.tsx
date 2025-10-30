"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface SubItem {
  label: string;
  description: string;
  href: string;
}

interface DropdownCategory {
  category: string;
  items: SubItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: DropdownCategory[];
}

const MENU_DATA: MenuItem[] = [
  {
    label: "Technologies",
    dropdown: [
      {
        category: "Frontend",
        items: [
          { label: "React.js", description: "Component-based UI library", href: "/technologies/react" },
          { label: "Next.js", description: "React framework for production", href: "/technologies/nextjs" },
          { label: "Vue.js", description: "Progressive JavaScript framework", href: "/technologies/vue" },
        ],
      },
      {
        category: "Backend",
        items: [
          { label: "Node.js", description: "JavaScript runtime environment", href: "/technologies/nodejs" },
          { label: ".NET Core", description: "Cross-platform framework", href: "/technologies/dotnet" },
          { label: "Python", description: "Versatile backend language", href: "/technologies/python" },
        ],
      },
    ],
  },
  {
    label: "Services",
    dropdown: [
      {
        category: "Development",
        items: [
          { label: "Web Development", description: "Custom web applications", href: "/services/web-development" },
          { label: "Mobile Apps", description: "iOS & Android solutions", href: "/services/mobile-apps" },
          { label: "API Development", description: "RESTful & GraphQL APIs", href: "/services/api-development" },
        ],
      },
      {
        category: "Consulting",
        items: [
          { label: "Cloud Solutions", description: "AWS, Azure & GCP experts", href: "/services/cloud-solutions" },
          { label: "DevOps", description: "CI/CD & automation", href: "/services/devops" },
          { label: "Tech Consulting", description: "Strategic guidance", href: "/services/consulting" },
        ],
      },
    ],
  },
  {
    label: "DIY Teams",
    dropdown: [
      {
        category: "Dedicated Teams",
        items: [
          { label: "Frontend Developers", description: "React, Angular, Vue experts", href: "/diy-teams/frontend" },
          { label: "Backend Developers", description: "Node.js, .NET, Java & more", href: "/diy-teams/backend" },
          { label: "Full Stack Developers", description: "End-to-end development expertise", href: "/diy-teams/fullstack" },
          { label: "Mobile App Developers", description: "Native & cross-platform specialists", href: "/diy-teams/mobile" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    dropdown: [
      {
        category: "Sectors We Serve",
        items: [
          { label: "Healthcare", description: "HIPAA-compliant solutions", href: "/industries/healthcare" },
          { label: "Finance", description: "Secure fintech applications", href: "/industries/finance" },
          { label: "E-commerce", description: "Scalable online stores", href: "/industries/ecommerce" },
          { label: "Education", description: "Learning management systems", href: "/industries/education" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
];

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: HamburgerProps) => (
  <button
    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    onClick={toggle}
    aria-label="Toggle menu"
  >
    <motion.span
      className="bg-white w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="bg-white w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="bg-white w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  return (
    <>
      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-lg z-50 overflow-y-auto md:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={closeMenu}
                className="text-white focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-6 pb-6 space-y-2">
              {MENU_DATA.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-2">
                  {item.dropdown ? (
                    <>
                      {/* Expandable Menu Item */}
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="w-full flex items-center justify-between py-3 text-white text-lg font-medium"
                      >
                        {item.label}
                        <motion.svg
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      {/* Expandable Dropdown Content */}
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {item.dropdown.map((category) => (
                              <div key={category.category} className="mt-2 ml-4">
                                {/* Category Header */}
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                                  {category.category}
                                </h3>
                                
                                {/* Category Items */}
                                <div className="space-y-1">
                                  {category.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={closeMenu}
                                      className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
                                    >
                                      <div className="text-white font-semibold">
                                        {subItem.label}
                                      </div>
                                      <div className="text-sm text-gray-400">
                                        {subItem.description}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Simple Link (like "About Us")
                    <Link
                      href={item.href || "#"}
                      onClick={closeMenu}
                      className="block py-3 text-white text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Contact Us Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
