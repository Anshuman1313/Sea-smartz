"use client"
import React from 'react'
import { NotchDivider, NotchDivider2 } from '../border/NotchBorder'

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/lib/icons';
import Link from 'next/link';
import { Particles } from '@/components/ui/particles';
import StaticRadialGradient from '../paper/RadialMoonGradient';
import { Logo_with_text } from '../svg_testing/Logo_with_text';
import { Logo1 } from '../svg_testing/Logo1';
import { Newsletter2 } from './Newsletter';
import MobileNav from './MobileNav';
import MobileFooter from './MobileFooter';
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sea-technologies-in/?viewAsMember=true", icon: <LinkedInIcon className='size-5 max-lg:h-5 max-lg:w-5' /> },
  { label: "Twitter", href: "https://x.com/SeaSmartz", icon: <TwitterIcon className='size-5 mx-lg:h-5 max-lg:w-5' /> },
  { label: "Instagram", href: "https://www.instagram.com/seasmartz/?hl=en", icon: <InstagramIcon className='size-5 max-lg:h-5 max-lg:w-5' /> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583353533863", icon: <FacebookIcon className='size-5 max-lg:h-5 max-lg:w-5' /> }
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
    <MobileFooter/>
      <div className="max-md:hidden relative w-full aspect-[1688/896] h-[80vh] overflow-hidden ">
        <svg className="absolute w-0 h-0">
          <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
            <path
              // d="M0,0.088 C0,0.068,0.008,0.052,0.018,0.052 H0.38 C0.394,0.052,0.408,0.041,0.418,0.021 V0.021 C0.426,0.008,0.435,0,0.445,0 H0.555 C0.565,0,0.576,0.007,0.584,0.021 V0.021 C0.596,0.041,0.611,0.052,0.626,0.052 H0.982 C0.992,0.052,1,0.068,1,0.088 V1 H0.888,0"
              d="M0,0.088 C0,0.068,0.008,0.052,0.018,0.052 H0.202 C0.217,0.052,0.23,0.041,0.241,0.021 V0.021 C0.248,0.008,0.257,0,0.267,0 H0.732 C0.743,0,0.753,0.007,0.761,0.021 V0.021 C0.773,0.041,0.788,0.052,0.804,0.052 H0.982 C0.992,0.052,1,0.068,1,0.088 V1 H0.888,0"

              transform="scale(1,1)"
            />
          </clipPath>
        </svg>

        <div className="absolute inset-0  [clip-path:url(#myClipPath)]">

          <div className='h-full w-full  '>
            <Particles className=' absolute h-full w-full ' />
            <StaticRadialGradient className="absolute inset-0  -z-10  h-full w-full object-cover " />
            <div className=' h-full w-full flex flex-col justify-between pb-2 pt-30'>


              <div className=' flex'>
                <div className='h-full w-[45%] space-y-3  mx-4'>

                  <div className='flex  items-start text-3xl font-bold'>

                  
                  <Logo1 className='size-30  ' />
                  <div className='flex flex-col  mt-10 items-start  h-full font-sans '>
                    <div>

                      <span className='text-chart-3'>SEA</span><span>SMARTZ</span>
                    </div>
                    <div className='font-semibold text-lg '>
                      TECHNOLOGIES
                    </div>
                  </div>
                  </div>

                  
                 
                  {/* <Logo_with_text className='bg-white' viewBox='0 0 320 340' /> */}
                </div>
                <div className='h-full w-full '><Nav /></div>
                <div className='w-[30%] '><Newsletter2/> </div>
              </div>
              <div className='mb-1 pl-3 pr-4'><SocialLinks /></div>

            </div>
          </div>
        </div>
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
      <p className=' text-[2vh] font-sans flex gap-2'>
        <span>© 2025 Sea Smartz. All rights reserved.</span>
        <span>Terms of service</span>
        <span>Terms of Use </span>
        <span>Privacy Policy</span>
        <span>Cookie policy</span>


      </p>
      <div className='flex gap-6'>
        {socials.map(s => (
          <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className='hover:text-chart-3 transition-colors ' aria-label={s.label}>
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
        <h3 className="  text-[13px] font-bold text-gray-300 uppercase  tracking-wide">{section.title}</h3>
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
