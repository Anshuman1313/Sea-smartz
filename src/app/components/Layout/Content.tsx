"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/lib/icons';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link'
import React from 'react'


const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sea-technologies-in/?viewAsMember=true", icon: <LinkedInIcon  /> },
  { label: "Twitter", href: "https://x.com/technologi29879", icon: <TwitterIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/sea.technologies/", icon: <InstagramIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61569627805201&sk=about", icon: <FacebookIcon /> }
  // etc.
];
const navigation = [
  {
    title: "Technologies",
    links: [
      { label: "Web Development", href: "/technology/web-development" },
      { label: "Mobile Development", href: "/technology/mobile-development" },
      { label: "Cloud & DevOps", href: "/technology/cloud-devops" },
      { label: "AI & Data Science", href: "/technology/ai-data-science" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "IT Consulting", href: "/services/it-consulting" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "FinTech Solutions", href: "/industries/fintech-solutions" },
      { label: "Healthcare Technology", href: "/industries/healthcare-technology" },
      { label: "E-Commerce Platforms", href: "/industries/e-commerce-platforms" },
      { label: "Education Technology", href: "/industries/education-technology" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Our Team", href: "/company/our-team" },
      { label: "Careers", href: "/company/careers" }
    ]
  }
];

export default function Content() {
  
  return (


    <div className='bg-chart-3 py-8  px-12 h-full w-full flex flex-col space-y-4 justify-evenly
     max-md:py-4 max-md:px-6 max-md:space-y-2  max-md:justify-center
    '>
      {/* <NewsletterForm /> */}
      <Section1 />
     <div className='md:hidden'>
      <Section2 />

     </div>
     
      
      <SocialLinks />
    </div>


  )
}

export function SocialLinks() {
  return (
    <div className="flex gap-5  sm:mx-12 justify-between border-t border-foreground/20 pt-6  text-sm flex-col md:flex-row items-center">
      <div className='flex gap-6'>

      {socials.map(s => (
        <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className='hover:text-accent transition ' aria-label={s.label}>
          {s.icon}
        </Link>
      ))}
      </div>
      <div><p>© 2025 Sea Smartz. All rights reserved.</p></div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="text-center">
      <h1 className="text-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider">
        Sea Smartz
      </h1>
      <p className="text-foreground text-sm mt-4 opacity-90">
        Empowering businesses with AI-driven technology solutions
      </p>
    </div>
  )
}

const Nav = () => (
  <div className="flex shrink-0
  gap-20 justify-evenly
   max-md:gap-10 max-md:flex-col ">
    {navigation.map(section => (
      <div key={section.title} className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase ">{section.title}</h3>
        {section.links.map(link => (
          <Link key={link.href} href={link.href} className="hover:underline hover:text-accent transition">
            {link.label}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

const NewsletterForm = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription submitted');
  };
  return (
    <div className="mb-8  pb-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Stay Ahead with AI Insights
        </h2>
      

        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white/50 h-11"
            required
          />
          <Button
            type="submit"
            className="bg-white text-primary hover:bg-white/90 transition-colors h-11 px-6 group"
          >
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <p className="text-white/60 text-sm mt-3">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  )
};


