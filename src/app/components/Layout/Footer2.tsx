import React from 'react'
import { NotchDivider, NotchDivider2 } from '../border/NotchBorder'

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/lib/icons';
import Link from 'next/link';
import { Particles } from '@/components/ui/particles';
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sea-technologies-in/?viewAsMember=true", icon: <LinkedInIcon className='size-5 max-lg:h-5 max-lg:w-5' /> },
  { label: "Twitter", href: "https://x.com/SeaSmartz", icon: <TwitterIcon className='size-5 mx-lg:h-5 max-lg:w-5'/> },
  { label: "Instagram", href: "https://www.instagram.com/seasmartz/?hl=en", icon: <InstagramIcon className='size-5 max-lg:h-5 max-lg:w-5'/> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583353533863", icon: <FacebookIcon className='size-5 max-lg:h-5 max-lg:w-5'/> }
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
const Footer2 = () => {
  return (
    <>
    <div className="relative w-full aspect-[1688/896] h-[90vh] overflow-hidden ">
  <svg className="absolute w-0 h-0">
    <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
      <path
        d="M0 0.082C0 0.064 0.008 0.048 0.018 0.048H0.38C0.394 0.048 0.408 0.038 0.418 0.02C0.425 0.008 0.437 0.002 0.449 0.002H0.555C0.566 0.002 0.576 0.008 0.584 0.02C0.596 0.038 0.611 0.048 0.626 0.048H0.982C0.992 0.048 1 0.064 1 0.082V0.933C1 0.951 0.992 0.965 0.982 0.965H0.888C0.884 0.965 0.88 0.967 0.877 0.97L0.867 0.98C0.863 0.984 0.858 0.986 0.853 0.986H0.18C0.176 0.986 0.172 0.984 0.168 0.98L0.161 0.973C0.156 0.968 0.15 0.965 0.143 0.965H0.018C0.008 0.965 0 0.951 0 0.933Z"
        transform="scale(1,1)"
      />
    </clipPath>
  </svg>

  <div className="absolute inset-0 bg-gray-400 [clip-path:url(#myClipPath)]"></div>
</div>

    {/* <div className='h-screen w-full  bg-blue-400 '>
      <div className='h-40 bg-red-400 [clip-path:inset(20px_20px_50px_0px_round_15px_0px)]'></div>
    </div> */}
    {/* <div className=' relative h-screen  '
    style={{
  backgroundImage: `
    linear-gradient(
      180deg,
      #000000 0%,
      #050200 10%,
      #0a0400 30%,
      #1c0a00 50%,
      #ff6a00 100%
    )
  `,
}}
    >
      <NotchDivider2 bgColor="black" fillColor="#ff7700"    height={60} hideOnSmall={false} />
    <Particles className=' absolute h-full w-full '/>
      
      <div className='mx-auto  bg-background  hidden overflow-clip  p-5 border-2  z-50 h-[80%] w-[85%] rounded-4xl  flex flex-col justify-between'>
          <div className=' flex'>
            <div className='h-full w-[45%]  text-5xl font-bold'>
              SEA SMARTZ
              </div>
            <div className='h-full w-full '><Nav /></div>
          </div>
          <div className=''><SocialLinks /></div>


        </div>
   
    </div> */}
    </>
  )
}

export default Footer2

export function SocialLinks() {
  return (
    <div className="flex gap-5 justify-between px-2 text-sm flex-col md:flex-row items-center">
        <p className= ' text-[2vh] font-sans flex gap-2'>
          <span>© 2025 Sea Smartz. All rights reserved.</span>
          <span>Terms of service</span>
          <span>Terms of Use </span>
          <span>Privacy Policy</span>
          <span>Cookie policy</span>


        </p>
      <div className='flex gap-6'>
        {socials.map(s => (
          <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" 
            className='hover:text-accent transition-colors ' aria-label={s.label}>
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
