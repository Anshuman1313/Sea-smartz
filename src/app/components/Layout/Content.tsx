"use client"

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/lib/icons';

import Link from 'next/link'
import React from 'react'
import { Newsletter2 } from './Newsletter';

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sea-technologies-in/?viewAsMember=true", icon: <LinkedInIcon className='size-5 max-lg:h-5 max-lg:w-5' /> },
  { label: "Twitter", href: "https://x.com/technologi29879", icon: <TwitterIcon className='size-5 mx-lg:h-5 max-lg:w-5'/> },
  { label: "Instagram", href: "https://www.instagram.com/sea.technologies/", icon: <InstagramIcon className='size-5 max-lg:h-5 max-lg:w-5'/> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61569627805201&sk=about", icon: <FacebookIcon className='size-5 max-lg:h-5 max-lg:w-5'/> }
];

const navigation = [
  {
    title: "Technologies",
    links: [
      { label: "React.js", href: "/technologies/react" },
      { label: "Next.js", href: "/technologies/nextjs" },
      { label: "Vue.js", href: "/technologies/vue" },
      { label: "Node.js", href: "/technologies/nodejs" },
      { label: ".NET Core", href: "/technologies/dotnet" },
      { label: "Python", href: "/technologies/python" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "API Development", href: "/services/api-development" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "DevOps", href: "/services/devops" },
      { label: "Tech Consulting", href: "/services/consulting" },
    ]
  },
  {
    title: "DIY Teams",
    links: [
      { label: "Frontend Developers", href: "/diy-teams/frontend" },
      { label: "Backend Developers", href: "/diy-teams/backend" },
      { label: "Full Stack Developers", href: "/diy-teams/fullstack" },
      { label: "Mobile Developers", href: "/diy-teams/mobile" },
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Education", href: "/industries/education" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export default function Content() {
  return (
    <div className='bg-chart-3 font-sans h-[90vh]  w-full justify-end lg:justify-around pb-5 flex flex-col px-7  max-md:h-auto max-md:py-6 max-md:px-6'>
   

      {/* Navigation Section */}
      <div className="flex  mt-4  px-2 ">
        <div className=' w-1/3'><Newsletter2/></div>
        <Nav />
      </div>
      <div className='font-bold text-[15vw] bg-gradient-to-b text-transparent from-neutral-100 to-orange-300 bg-clip-text  font-sans text-center '>
        SEA<span className=''>SMARTZ</span>
      </div>

      {/* Social & Copyright Section */}
      <div className="flex-shrink-0 pt-2  border-t border-foreground/20">
        <SocialLinks />
      </div>
    </div>
  )
}

export function SocialLinks() {
  return (
    <div className="flex gap-5 justify-between px-2 text-sm flex-col md:flex-row items-center">
        <p className= ' text-[2vh] font-sans flex gap-2'>
          <span>© 2025 SeaSmartz. All rights reserved.</span>
          <span>Terms of service</span>
          <span>Terms of Use </span>
          <span>Privacy Policy</span>
          <span>Cookie policy</span>


        </p>
      <div className='flex gap-6'>
        {socials.map(s => (
          <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" 
            className='hover:text-foreground transition-colors ' aria-label={s.label}>
            {s.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export const Nav = () => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6 font-sans  mx-auto">
    {navigation.map(section => (
      <div key={section.title} className="flex flex-col space-y-3">
        <h3 className="  text-[13px] font-bold text-gray-400 uppercase  tracking-wide">{section.title}</h3>
        <div className='flex flex-col space-y-2 '>

        {section.links.map(link => (
          <Link key={link.href} href={link.href} 
            className="  text-[15px] font-medium text-foreground  hover:underline transition-colors">
            {link.label}
          </Link>
        ))}
        </div>
      </div>
    ))}
  </div>
);

