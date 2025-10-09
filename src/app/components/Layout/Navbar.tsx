"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
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

const NavLink = ({ href, children }: NavLinkProps) => (
  <AnimatePresence>
    <motion.li
      className="relative cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      exit="rest"
    >
      <a href={href} className="text-primary no-underline relative z-10">
        {children}
      </a>
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-primary rounded"
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.li>
  </AnimatePresence>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-transparent max-md:justify-between sticky top-0 z-20 max-md:px-2 px-6 max-md:pt-4 max-md:pb-2 py-4 flex justify-around items-center text-primary">
        <div className="logo font-bold text-2xl">SEASMARTZ</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </ul>
        {/* Mobile toggle button */}
        <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        {/* Mobile menu */}
          <AnimatePresence>
        {isOpen && (
          <motion.ul
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: [1,0.5,0], y: -20, transition: { duration: 0.2, ease: "easeOut"}  }}
            
            className="absolute top-full left-0 w-full bg-background text-muted-foreground flex flex-col space-y-2 px-3 py-6 md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <div className='h-px bg-muted-foreground inset-x-0 mt-2 mb-2'></div>
          </motion.ul>
        )}
        </AnimatePresence>
      </nav>
    </>
  );
};


