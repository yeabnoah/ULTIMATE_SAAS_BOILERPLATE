import { Logo } from '@/components/logo'
import Link from 'next/link'
import { motion } from 'framer-motion'

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

const socialLinks = [
    {
        label: 'X/Twitter',
        ariaLabel: 'X/Twitter',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.697.865 3.194 2.181 4.073-.803-.026-1.56-.247-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.548 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.634.961-.695 1.8-1.562 2.46-2.549z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        ariaLabel: 'LinkedIn',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
            </svg>
        ),
    },
    {
        label: 'Facebook',
        ariaLabel: 'Facebook',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        ariaLabel: 'Instagram',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.563.334-3.535 1.306-.972.972-1.247 2.254-1.306 3.535-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.059 1.281.334 2.563 1.306 3.535.972.972 2.254 1.247 3.535 1.306 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.563-.334 3.535-1.306.972-.972 1.247-2.254 1.306-3.535.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.334-2.563-1.306-3.535-.972-.972-2.254-1.247-3.535-1.306-1.28-.058-1.688-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
            </svg>
        ),
    },
];

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <motion.div
                className="mx-auto max-w-5xl px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto font-bold block size-fit"
                >
                    SAS.
                </Link>

                <motion.div
                    className="my-8 flex flex-wrap justify-center gap-6 text-sm"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <Link
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150"
                            >
                                <span>{link.title}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="my-8 flex flex-wrap justify-center gap-6 text-sm"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.ariaLabel}
                                className="text-muted-foreground hover:text-primary block"
                            >
                                {social.icon}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.span
                    className="text-muted-foreground block text-center text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    © {new Date().getFullYear()} SAS., All rights reserved
                </motion.span>
            </motion.div>
        </footer>
    )
}