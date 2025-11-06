"use client"
import { BookOpenCheck, LucideIcon } from 'lucide-react'
import { Building2, Banknote, HeartPulse, ShieldCheck, Wallet, Plane, Laptop, Clapperboard } from "lucide-react";
import React, { useState } from 'react'
import { motion } from 'framer-motion'

type IndustriesCard = {
    id: number,
    title: string,
    icon?: LucideIcon,
    description: string
}

const IndustriesCard = () => {

    const industries: IndustriesCard[] = [
        {
            id: 1,
            title: "Real Estate",
            icon: Building2,
            description: "Leverage digital platforms, automation, and data insights to simplify property management and client engagement."
        },
        {
            id: 2,
            title: "Banking",
            icon: Banknote,
            description: "Enable secure, compliant, and agile banking experiences through modernized IT infrastructure and digital innovation."
        },
        {
            id: 3,
            title: "Healthcare",
            icon: HeartPulse,
            description: "Transform patient care with intelligent systems, secure data management, and telehealth solutions."
        },
        {
            id: 4,
            title: "Insurance",
            icon: ShieldCheck,
            description: "Automate claims, enhance customer experience, and improve accuracy with AI and cloud-based solutions."
        },
        {
            id: 5,
            title: "Education & E-Learning",
            icon: BookOpenCheck,
            description:   "Transforming learning experiences with smart EdTech platforms, virtual classrooms, and AI-powered assessment tools.",
        },
        {
            id: 6,
            title: "Travel & Hospitality",
            icon: Plane,
            description: "Deliver seamless customer journeys with smart booking systems and personalized digital experiences."
        },
        {
            id: 7,
            title: "Software & Technology",
            icon: Laptop,
            description: "Accelerate your digital roadmap with agile development, DevOps, and cloud-native architectures."
        },
        {
            id: 8,
            title: "Media & Entertainment",
            icon: Clapperboard,
            description: "Reimagine content delivery, audience engagement, and monetization through digital-first media solutions."
        },
        {
            id: 9,
            title: "FinTech",
            icon: Wallet,
            description: "Empower financial innovation with scalable, API-driven, and secure digital platforms."
        },
    ];



    const [hovered, setHovered] = useState<number | null>(null)
    return (
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-md:mx-auto  w-full '>
            {industries.map((Industry, index) => {
                const Icon = Industry.icon as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                return (

                    <div key={Industry.id} className=' relative  p-4 '
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {
                            hovered === index && (
                                <motion.div
                                    layoutId='hover'
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                    className='absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:13px_13px] [--pattern-fg:gray]/20  w-full h-full rounded-2xl'></motion.div>
                            )
                        }

                        <div key={index} className='relative space-y-2' >
                            {
                                Icon && <div ><Icon className="text-chart-3" /></div>
                            }
                            <h2 className='text-lg font-semibold'>{Industry.title}</h2>
                            <p className='text-sm text-foreground/60'>{Industry.description}</p>

                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default IndustriesCard
