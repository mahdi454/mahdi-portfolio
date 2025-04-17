
export interface KeyFeatures {
    feature: string;
    featureDesc: string;
}
export interface StackType {
    name: string;
    icon: string;
}

export interface IProject {
    title: string;
    year: string;
    description: string;
    keyFeatures: KeyFeatures[];
    techStack: StackType[];
    thumbnail?: string;
    longThumbnail?: string;
    images?: string[];
    slug: string;
    githubUrl: string;
    sourceCode?: string;
}
export const GENERAL_INFO = {
    email: 'tasmirolislam@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/mahdi454' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mahdi-hassani-913a4b22a' },
    { name: 'twitter', url: 'https://x.com/Madi300809' },
];



export const MY_STACK: StackType[] = [
    {
        name: 'Javascript',
        icon: '/logo/js.png',
    },
    {
        name: 'Typescript',
        icon: '/logo/ts.png',
    },
    {
        name: 'React',
        icon: '/logo/react.png',
    },
    {
        name: 'Next.js',
        icon: '/logo/next.png',
    },
    {
        name: 'Redux',
        icon: '/logo/redux.png',
    },
    {
        name: 'Tailwind CSS',
        icon: '/logo/tailwind.png',
    },
    {
        name: 'GSAP',
        icon: '/logo/gsap.png',
    },

    {
        name: 'SASS',
        icon: '/logo/sass.png',
    },


    {
        name: 'Node.js',
        icon: '/logo/node.png',
    },

    {
        name: 'Express.js',
        icon: '/logo/express.png',
    },
    {
        name: 'Git',
        icon: '/logo/git.png',
    },


    {
        name: 'PostgreSQL',
        icon: '/logo/postgreSQL.png',
    },
    {
        name: 'MongoDB',
        icon: '/logo/mongodb.svg',
    },
    {
        name: 'Prisma',
        icon: '/logo/prisma.png',
    },


]

export const PROJECTS: IProject[] = [
    {
        title: 'MMA News Blog',
        slug: 'mma-hub',
        techStack: [
            {
                name: 'Typescript',
                icon: '/logo/ts.png',
            },
            {
                name: 'React',
                icon: '/logo/react.png',
            },
            {
                name: 'Next.js',
                icon: '/logo/next.png',
            },
            {
                name: 'Tailwind CSS',
                icon: '/logo/tailwind.png',
            },
            {
                name: 'Zustand',
                icon: '/logo/zustand.svg',
            },
            {
                name: 'Supabase',
                icon: '/logo/supabase.png',
            },
            {
                name: 'Zod',
                icon: '/logo/zod.png',
            }
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
        githubUrl: 'https://github.com/mahdi454/mma-blog',
        year: "2024 - 2025",
        description: `A full-stack sports news platform where users can write and submit articles, while admins manage publications via a custom dashboard with role-based access and a rich text editor.`,
        keyFeatures: [
            {
                feature: "Custom Admin Dashboard with Authentication",
                featureDesc:
                    "Role-based access system with Writers and Admins. Writers can sign up and submit articles; Admins can approve, reject, or manage submissions from a custom dashboard.",
            },
            {
                feature: "Simple Rich Text Editor",
                featureDesc:
                    "Custom-developed editor supporting formatted text, image uploads, and embedded media like YouTube or Tweets—giving writers full control over content.",
            },
            {
                feature: "Responsive Design",
                featureDesc:
                    "Optimized for all screen sizes—desktop, tablet, and mobile—for a smooth and accessible user experience.",
            },
            {
                feature: "Advanced Features in Progress",
                featureDesc:
                    "Upcoming tools include athlete profiles with stats and search, AI integration for article suggestions, real-time notifications, and admin-side analytics.",
            },
        ],
    },
    {
        title: 'Twitter Clone',
        slug: 'twitter-clone',
        techStack: [
            {
                name: 'Node.js',
                icon: '/logo/node.png',
            },

            {
                name: 'Express.js',
                icon: '/logo/express.png',
            },
            {
                name: 'Typescript',
                icon: '/logo/ts.png',
            },
            {
                name: 'React',
                icon: '/logo/react.png',
            },

            {
                name: 'Tailwind CSS',
                icon: '/logo/tailwind.png',
            },
            {
                name: 'Redux',
                icon: '/logo/redux.png',
            },
            {
                name: 'Prisma',
                icon: '/logo/prisma.png',
            },
            {
                name: 'Zod',
                icon: '/logo/zod.png',
            },
            {
                name: 'JWT',
                icon: '/logo/jwt.png',
            },
            {
                name: 'Postgress',
                icon: '/logo/postgreSQL.png',
            }
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [],
        githubUrl: 'https://github.com/mahdi454/tweeter-frontend',
        year: "2024",
        description:
            'A full-stack Twitter-like app featuring a decoupled frontend and backend with secure JWT authentication, user file uploads, and dynamic timeline updates using MVC architecture and Prisma.',
        keyFeatures: [{
            feature: "Separation of Frontend and Backend",
            featureDesc:
                "Built with a modular architecture using the MVC pattern on the backend and a dedicated frontend with React Router for seamless navigation and scalability.",
        },
        {
            feature: "Secure Authentication",
            featureDesc:
                "Implemented JWT-based authentication with HTTP-only cookies for secure session management, including protected routes and login verification.",
        },
        {
            feature: "Robust API & Database Layer",
            featureDesc:
                "RESTful API developed with Prisma ORM for PostgreSQL, featuring error handling, validation, and secure data access with CORS support.",
        },
        {
            feature: "Interactive Frontend Features",
            featureDesc:
                "User-friendly interfaces with support for file uploads, form handling, and dynamic content updates—designed for responsiveness and performance.",
        },],
    },
    {
        title: 'Online Perfume Store',
        slug: 'city-hunter',
        techStack: [
            {
                name: 'Typescript',
                icon: '/logo/ts.png',
            },
            {
                name: 'React',
                icon: '/logo/react.png',
            },
            {
                name: 'Next.js',
                icon: '/logo/next.png',
            },
            {
                name: 'Tailwind CSS',
                icon: '/logo/tailwind.png',
            },
            {
                name: 'Zustand',
                icon: '/logo/zustand.svg',
            },
            {
                name: 'Zod',
                icon: '/logo/zod.png',
            },
            {
                name: 'Drizzle ORM',
                icon: '/logo/drizzle.jpg',
            },
            {
                name: 'Framer Motion',
                icon: '/logo/framer-motion.png',
            }
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [],
        githubUrl: 'https://github.com/mahdi454/cityh-hunter',
        year: "2024",
        description:
            'Minimal e-commerce platform for fragrances with dark mode and a custom-built admin dashboard for managing products efficiently.',
        keyFeatures: [{
            feature: "Dark Mode UI",
            featureDesc: "User-friendly interface with full dark mode support for better user experience."
        },
        {
            feature: "Custom Admin Dashboard",
            featureDesc: "Easily manage products with a custom dashboard powered by Drizzle ORM for seamless database interactions."
        },
        {
            feature: "Product Management",
            featureDesc: "Add, update, and organize perfume listings with categories, pricing, and images."
        },
        {
            feature: "Responsive Design",
            featureDesc: "Optimized for mobile, tablet, and desktop — ensuring smooth shopping on all devices."
        }],
    },
    {
        title: 'Online Booking Hotel',
        slug: 'hotel-managment',
        techStack: [
            {
                name: 'React',
                icon: '/logo/react.png',
            },
            {
                name: 'React Query',
                icon: '/logo/react-query.png',
            },
            {
                name: 'Styled Components',
                icon: '/logo/styled-components.png',
            },
            {
                name: 'Supabase',
                icon: '/logo/supabase.png',
            }],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [],
        githubUrl: 'https://github.com/mahdi454/hotel',
        year: "2023",
        description:
            'A customer-facing web platform for exploring and reserving cabins, with account management and dynamic pricing.',
        keyFeatures: [{
            feature: "Cabin Reservations",
            featureDesc: "Users can browse available cabins, choose dates, set guest details, and make bookings easily."
        },
        {
            feature: "Dynamic Pricing System",
            featureDesc: "Automatically calculates total cost based on cabin rates, guest count, and applied discounts."
        },
        {
            feature: "Supabase-Integrated Backend",
            featureDesc: "Uses Supabase for real-time data and streamlined backend functionality without custom server setup."
        }],
    }
];

// export const MY_EXPERIENCE = [
//     {
//         title: 'Software Engineer (Frontend)',
//         company: 'Strativ AB',
//         duration: 'Dec 2024 - Present',
//     },
//     {
//         title: 'Frontend Developer',
//         company: 'Epikcoders',
//         duration: 'Oct 2023 - Nov 2024',
//     },
//     {
//         title: 'FRONTEND ENGINEER',
//         company: 'Anchorblock Technology',
//         duration: 'Oct 2022 - Sep 2023',
//     },
//     {
//         title: 'Frontend Developer (Part-time)',
//         company: 'Branex IT',
//         duration: 'Jan 2022 - Oct 2022',
//     },
// ];