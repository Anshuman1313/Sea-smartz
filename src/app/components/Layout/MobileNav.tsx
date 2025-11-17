"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

import React, { useRef, useState, } from "react";
import { MENU_DATA } from "./Navbar2";
import { Logo1 } from "../svg_testing/Logo1";

interface SubItem {
  label: string;
  description: string;
  href: string;
}






const MobileNav = () => {
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const NavRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(23,23,23,0)", "#000000"]
  );

  const navHeight = useTransform(scrollY, [0, 100], ["13vh", "10vh"]);

  const handleDropdownClick = (label: string) => {
    console.log(label, activeDropdown)
    setActiveDropdown((prev) => (prev === label ? null : label));
  };


  return (
    <motion.div
      ref={NavRef}
      style={{
        height: navHeight,
        backgroundColor: navBgColor,

      }}
      className="sticky h-[15vh] md:hidden font-sans top-0 z-40 flex items-center px-5  justify-between md:px-8 transition-all duration-300"
    >

     <div className="text-2xl flex font-bold text-white">
        <div>
          <Link href="/">
          
          <Logo1 className="size-15 "/>
          </Link>
        </div>
        <Link href="/" className="flex justify-center items-center">
        
          <span className="text-chart-3">SEA</span>
          <span className="">SMARTZ</span>
        </Link>
      </div>

      {/* Mobile navigation */}

      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}

      />
      {
        isOpen && (
          <motion.ul
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: [1, 0.5, 0], y: -20, transition: { duration: 0.2, ease: "easeOut" } }}

            className="absolute top-full left-0 w-full bg-background text-muted-foreground flex flex-col space-y-2 px-5 py-6 md:hidden">
            {MENU_DATA.map((item) => (
              <div
                key={item.label}
                className="relative   group"
                ref={(el) => {
                  if (item.dropdown) {
                    dropdownRefs.current[item.label] = el;
                  }
                }}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="flex items-center w-full justify-between gap-2 hover:text-gray-300 transition-colors"
                    >
                      {item.label}
                      <motion.svg
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4"
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
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -6 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="bg-background/95  border-foreground/20 overflow-hidden"
                        >
                          {item.dropdown.map((cat, i) => (
                            <div key={cat.category} className={i > 0 ? " border-foreground/10" : ""}>

                              {cat.items.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                                  className="block px-5 py-3 hover:bg-foreground/10 transition-colors"
                                >
                                  <div className="text-foreground font-medium text-sm">{sub.label}</div>
                                  <p className="text-sm text-muted-foreground/70">{sub.description}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>


                  </>
                ) : (
                  <Link href={item.href || "#"} className="hover:text-gray-300 transition-colors"
                    onClick={() => { setActiveDropdown(null); setIsOpen(false); }}

                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className='h-px bg-muted-foreground inset-x-0 mt-2 mb-2'></div>
          </motion.ul>
        )
      }

    </motion.div>
  );
};

export default MobileNav;

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
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);