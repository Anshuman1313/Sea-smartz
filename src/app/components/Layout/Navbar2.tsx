"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

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

const Navbar2 = () => {
  const NavRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(NavRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "top+=100 top",
        scrub: true,
      },
      height: "10vh",
      backgroundColor: "rgba(23,23,23,0.8)",
      backdropFilter: "blur(12px)",
      ease: "power1.in",
    })
    return ()=>{
      ScrollTrigger.killAll();
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );

      if (clickedOutside && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div
      ref={NavRef}
      className="sticky  font-sans top-0 z-40 h-[15vh] flex items-center justify-between px-8 transition-all duration-300 bg-transparent"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
       <Link href="/">
          <span className=''>SEA</span><span className='text-chart-3 '>SMARTZ</span>
          </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-8 text-white">
        {MENU_DATA.map((item) => (
          <div
            key={item.label}
            className="relative group"
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
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? "rotate-180" : "rotate-0"
                    }`}
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
                  </svg>
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute  top-full left-0 mt-2 min-w-[280px] bg-black  border border-foreground/30 backdrop-blur-3xl rounded-[10px] shadow-xl overflow-hidden">
                    {item.dropdown.map((category, idx) => (
                      <div key={category.category} className={idx > 0 ? "border-t border-foreground/20" : ""}>
                        {/* Category Header */}
                        <div className="px-4 pt-4 pb-2">
                          <h3 className="text-sm font-bold  uppercase tracking-wider">
                            {category.category}
                          </h3>
                        </div>
                        {/* Category Items */}
                        <div className="pb-2">
                          {category.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 hover:bg-foreground/30 transition-colors group/item"
                            >
                              <div className="font-semibold text-white group-hover/item:text-chart-3 transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-sm text-gray-400 mt-0.5">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href || "#"} className="hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar2;
