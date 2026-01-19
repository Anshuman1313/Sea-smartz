"use client"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/lib/icons"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/seasmartz/", icon: <LinkedInIcon className="h-5 w-5" /> },
  { label: "Twitter", href: "https://x.com/technologi29879", icon: <TwitterIcon className="h-5 w-5" /> },
  { label: "Instagram", href: "https://www.instagram.com/sea.technologies/", icon: <InstagramIcon className="h-5 w-5" /> },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61569627805201&sk=about", icon: <FacebookIcon className="h-5 w-5" /> },
]

const navigation = {
  Technologies: [
    { label: "React.js", href: "/technologies/react" },
    { label: "Next.js", href: "/technologies/nextjs" },
    { label: "Vue.js", href: "/technologies/vue" },
    { label: "Node.js", href: "/technologies/nodejs" },
    { label: ".NET Core", href: "/technologies/dotnet" },
    { label: "Python", href: "/technologies/python" },
  ],
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "API Development", href: "/services/api-development" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "DevOps", href: "/services/devops" },
    { label: "Tech Consulting", href: "/services/consulting" },
  ],
  DIYTeams: [
    { label: "Frontend Developers", href: "/diy-teams/frontend" },
    { label: "Backend Developers", href: "/diy-teams/backend" },
    { label: "Full Stack Developers", href: "/diy-teams/fullstack" },
    { label: "Mobile Developers", href: "/diy-teams/mobile" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Finance", href: "/industries/finance" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Education", href: "/industries/education" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function MobileFooter() {
  return (
    <footer className="md:hidden min-h-screen bg-background text-foreground py-8 px-2 flex flex-col  space-y-6 border-t border-white/10">
      {/* Brand */}
      {/* <h2 className="text-3xl text-center font-bold text-chart-3  tracking-wide"><span className="text-foreground">SEA</span>SMARTZ</h2> */}

        <div className="grid  grid-cols-2 sm:grid-cols-3 px-4 gap-6">
          {Object.entries(navigation).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-sm mb-2">{title}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      {/* Social Icons */}
      <div className="flex gap-5 justify-center items-center mt-1">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors "
          >
            {s.icon}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400 mt-3 text-center">
        © 2025 SeaSmartz. All rights reserved.
      </p>
    </footer>
  )
}

