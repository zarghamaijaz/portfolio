import { Wrench, Code2, Database, Braces, FileCode, Boxes, Cpu, Globe } from 'lucide-react';

export const MY_EMAIL = "zadxdev@gmail.com";
export const MY_NAME = "Zargham Aijaz";
export const MY_PHONE = "+92 3174429967";
export const MY_ADDRESS = "Lahore, Pakistan";
export const MY_DESIGNATION = "Software Engineer";
export const MY_PORTFOLIO = "https://zarghamaijaz.vercel.app";



export const TOOLS = [
  { name: "React", icon: Braces, color: "#61DAFB" },
  { name: "TypeScript", icon: FileCode, color: "#3178C6" },
  { name: "Next.js", icon: Code2, color: "#000000" },
  { name: "Node.js", icon: Cpu, color: "#339933" },
  { name: "PostgreSQL", icon: Database, color: "#4169E1" },
  { name: "Tailwind", icon: Wrench, color: "#06B6D4" },
  { name: "API", icon: Globe, color: "#FF6B6B" },
];



export const TECHNOLOGIES_LIST = [
    {
        name: "HTML",
        icon: "/icons/html.png",
    },
    {
        name: "CSS",
        icon: "/icons/css.svg",
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/icons/typescript.png",
    },
    {
        name: "React",
        icon: "/icons/react.svg",
    },
    {
        name: "Next.js",
        icon: "/icons/nextjs.png",
    },
    {
        name: "TailwindCSS",
        icon: "/icons/tailwindcss.png",
    },
    {
        name: "Node.js",
        icon: "/icons/node.png",
    },
    {
        name: "MongoDB",
        icon: "/icons/mongodb.webp",
    },
    {
        name: "PostgreSQL",
        icon: "/icons/postgresql.png",
    },
]


export const PROJECTS_LIST = [
    {
        name: "IT Asset Management System (ManageX)",
        description: "Multitenant, RBAC, Asset management system developed for VaporVM",
        image: "/images/projects/itam/main.png",
        domain: "Asset management system",
        href: "/projects/itam",
    },
    {
        name: "QaboolHai",
        description: "An Islamic matrimony website made with React.js",
        image: "/images/projects/qaboolhai/main.png",
        domain: "Matrimony website",
        href: "/projects/qabool-hai",
    },
    {
        name: "OneVibe Server",
        description: "A backend server for OneVibe App. Built with Node.js, Socket.io and PostgreSQL.",
        image: "",
        domain: "API",
        href: "/projects/onevibe",
    },
    {
        name: "Instant Cloud Support",
        description: "A cloud support ticketing system for customers.",
        image: "/images/projects/cloud-support/main.png",
        domain: "IT support platform",
        href: "/projects/instant-cloud-support",
    },
    {
        name: "DU Ticketing and Inventory System",
        description: "Automated ticketing system built for Du Telecom to manage support tickets and updating inventory with logs.",
        image: "/images/projects/mx-du/main.png",
        domain: "Inventory management",
        href: "/",
    },
    {
        name: "Prostore",
        description: "An Ecommerce store. Built with Next.js and TailwindCSS. Featuring server-side rendering, server-actions, zod validation and more.",
        image: "/images/projects/prostore/main.png",
        domain: "Ecommerce",
        href: "https://prostore-jzlf.onrender.com/",
    },
    {
        name: "Stelios Driving School",
        description: "A webapp made for a client to manage their daily operations.",
        image: "/images/projects/steliosdrivingschool/main.png",
        domain: "Web Application",
        href: "/",
    },
    {
        name: "Social Media App",
        description: "Social media platform made with Next.js.",
        image: "",
        domain: "Social media",
        href: "/",
    },
]



export const EXPERIENCE = [
    {
        company: "VaporVM IT Services",
        position: "Software Engineer",
        duration: "2022 - Present",
        jobType: "Full-time",
    },
    {
        company: "QaboolHai ltd",
        position: "React Developer",
        duration: "2023 - 2024",
        jobType: "Part-time",
    },
    {
        company: "US Packaging Solutions",
        position: "Frontend Developer",
        duration: "2021 - 2022",
        jobType: "Full-time",
    },
    {
        company: "Nubrotech",
        position: "Web Developer",
        duration: "2020 - 2021",
        jobType: "Internship",
    },
]

export const CERTIFICATIONS = [
    {
        title: "Next.js Ecommerce 2025 - Shopping Platform From Scratch",
        instructor: "Brad Traversy",
        platform: "Udemy",
        date: "November 2025",
        image: "/images/certificates/next-ecommerce.jpg",
    },
    {
        title: "React Node MERN Stack from Scratch building Social Network",
        instructor: "Ryan Dhungel",
        platform: "Udemy",
        date: "February 2024",
        image: "/images/certificates/next-ecommerce.jpg",
    },
]
export const EDUCATION = [
    {
        title: "Bachelor of Science in Information Technology",
        institution: "Lahore Garrison University",
        duration: "2016 - 2020",
    },
    {
        title: "ICS (Physics)",
        institution: "Board of Intermediate & Secondary Education",
        duration: "2014 - 2016",
    },
]


export const WHY_HIRE_ME =[
    {
        title: "I Build Clean, Reliable, and Scalable Digital Products",
        description: "I focus on writing high-quality, maintainable code that grows with your project. No hacks, no shortcuts. Just scalable architecture and thoughtful design that keeps your app fast and stable long after launch.",
    },
    {
        title: "End-to-End Expertise",
        description: "From UI/UX to backend systems, database structure, API integrations, authentication, cloud deployment, and performance optimization. I handle the full development cycle. You get everything done by one skilled developer, not a scattered team.",
    },
    {
        title: "Pixel-Perfect Execution",
        description: "I translate designs into smooth, responsive interfaces that look and feel exceptional on every device. I obsess over micro-interactions, animations, and accessibility. Every detail matters.",
    },
    {
        title: "Custom Solutions, Not Templates",
        description: "I build tailored solutions that fit your business needs. Not generic templates or off-the-shelf setups. Your project gets unique attention and craftsmanship.",
    },
]


export const CONTRIBUTION = {
    ITAM: [
        {
            title: "Custom Roles and permissions based on organizations",
            description: "The further requirements were to let people add custom roles and permissions based on organizations. This was to make the system more customizable.",
            date: "August 2025",
        },
        {
            title: "Implemented Role Bases Access Control (RBAC)",
            description: "The NOC team needed a solution where they can use a single account to manage multiple organizations. So, I implemented Role Based Access Control (RBAC). I made a super-admin account that could view and manage assets of all organizations registered on the system.",
            date: "July 2025",
        },
        {
            title: "Add multitenant support to all modules",
            description: "Added multitenant support to all modules so that users can log in from their own credentials and should be able to see data within their organization only.",
            date: "June 2025",
        },
        {
            title: "Multitenant Architecture design",
            description: "The stakeholders requested a multitenant support so that clients can log in from their own credentials and should be able to see assets within their organization only.",
            date: "June 2025",
        },
        {
            title: "Add bulk asset import feature",
            description: "We had to give a functionality where users can upload multiple assets at once by using an excell file.",
            date: "May 2025",
        },
        {
            title: "Implement Expiry Notifications",
            description: "The stakeholders wanted to be notified when assets are about to expire so they can take action accordingly.",
            date: "",
        },
        {
            title: "Location Management Module",
            description: "Developed location management module with CRUD operations.",
            date: "",
        },
        {
            title: "Group Management Module",
            description: "Developed group management module to allow users to create groups and assign assets to groups.",
            date: "",
        },
        {
            title: "Users Management Module",
            description: "Developed users management module with CRUD operations.",
            date: "",
        },
        {
            title: "API Integration",
            description: "The next step was to integrate the APIs and make the application functional.",
            date: "",
        },
        {
            title: "Use Mock APIs to simulate backend",
            description: "While the backend was still being developed, I used mock APIs to simulate the backend. This allowed me to build the frontend without waiting for the backend to be ready.",
            date: "April 2025",
        },
        {
            title: "Transform Design into functional code.",
            description: "As the UI/UX teams were working on the design, I was responsible for translating the design into functional code.",
            date: "",
        },
        {
            title: "Identify tools and technologies",
            description: "The next step was to identify the tools needed to build the system. I decided to use React.js with Redux, and Tailwindcss.",
            date: "",
        },
        {
            title: "Gather Initial Requirements",
            description: "Discuss the project's requirements and goals with NOC team members and other stakeholders.",
            date: "March 2025",
        },
    ],
    QABOOL_HAI: [
        {
            title: "Change payment gateway from Stripe to Swich",
            description: "The Stripe payment gateway stopped the support for all matchmaking sites. So the team decided to change default the payment gateway to Swich. I had to restructure many parts of the application to implemenmt the new payment gateway.",
            date: "September 2024",
        },
        {
            title: "Maintain the Frontend",
            description: "I was required to maintain the Frontend of the application and add new features as they were requested.",
            date: "July 2024",
        },
        {
            title: "Role Based Access Control (RBAC)",
            description: "Implemented Role Based Access Control (RBAC) and added new Spectator role that could only view data and not modify anything.",
            date: "",
        },
        {
            title: "Stats, Charts and graphs",
            description: "Added visualization of stats, charts and graphs to the admin dashboard so that admins can make decisions based on the data.",
            date: "",
        },
        {
            title: "Coupon Management Module",
            description: "Added a new module for coupon management. The customers can avail special discounts on their purchases using coupons.",
            date: "",
        },
        {
            title: "Admin Dashboard API Integration",
            description: "After making the screens for the admin dashboard, I integrated the APIs provided by the backend team.",
            date: "",
        },
        {
            title: "Admin Dashboard Development",
            description: "The application has a separate admin dashboard where the admin can manage the events and users. I was required to make new develop new pages provided in Figma design.",
            date: "June 2024",
        },
        {
            title: "API Integration",
            description: "I integrated the APIs provided by the backend team. By using the APIs, the event registration became functional.",
            date: "",
        },
        {
            title: "Add Events Page",
            description: "I added an events page where users can buy tickets for live events.",
            date: "April 2024",
        },
        {
            title: "Mobile Optimization",
            description: "As the application was mostly being used by users with mobile phones, it was crucial to optimize the application for mobile devices.",
            date: "",
        },
        {
            title: "Redesign and Refactor",
            description: "The UI/UX team provided a new design in Figma and I was responsible for translating it into functional code.",
            date: "",
        },
        {
            title: "Code Review",
            description: "The first step was to understand the existing code and identify areas that needed improvement.",
            date: "February 2024",
        },
    ],
    ONEVIBE: [
        {
            title: "Calling feature implementation using Dyte",
            description: "Fully developed a video calling feature by using socket events and Dyte to allow users to call other users.",
            date: "November 2025",
        },
        {
            title: "Send Message to Mhannel API",
            description: "Developed an API to let channel Admins to send messages to channel members.",
            date: "",
        },
        {
            title: "Channel Module",
            description: "Fully developed a channel module where users can create channels and invite other users to join them. Users can also follow channels on their own.",
            date: "",
        },
        {
            title: "Broadcast Messages module",
            description: "Added a broadcast message module just like WhatsApps broadcast messages. This allowed users to send messages to different people without creating groups.",
            date: "",
        },
        {
            title: "Poll Messages CRUD",
            description: "Added poll creation functionality to existing messages module. This allowed users to create polls and vote on them.",
            date: "",
        },
        {
            title: "Reactions API",
            description: "Developed a reactions API to allow users to react to message.",
            date: "October 2025",
        },
        {
            title: "Translation API",
            description: "Developed a translation API to translate message from one language to another.",
            date: "",
        },
        {
            title: "Group Management Module",
            description: "Added a group management module to allow users to create groups and invite other users to join them.",
            date: "",
        },
        {
            title: "Migrations and Database Schema Design",
            description: "To add new features, I had to change the database schema. I worked with the lead backend developer to design the database schema and ran migrations.",
            date: "",
        },
        {
            title: "Created HTTP methods and Socket events",
            description: "The application uses bothe HTTP methods and Socket events to send and receive messages. So I had to make both HTTP methods and Socket events.",
            date: "",
        },
        {
            title: "Work on Chat Module",
            description: "I worked with lead backend developer to develop the chat module.",
            date: "",
        },
        {
            title: "Code Review",
            description: "I studied the existing code to better understand the requirements and identify how to proceed with the project.",
            date: "September 2025",
        },
    ],
    INSTANT_CLOUD_SUPPORT: [
        {
            title: "Developed Call queue and wait timer",
            description: "Developed call queue for the Customer-Care Representatives and added a call wait timer for Customers to know how long they have to wait. The timer gets stored on server side retrieved on client side on every mount to make sure the timer is accurate.",
            date: "April 2024",
        },
        {
            title: "Developed Calling Feature",
            description: "Used Dyte with SignalR events to create a fully functional calling feature.",
            date: "",
        },
        {
            title: "Handled Signal Events",
            description: "Used context hooks to handle SignalR events.",
            date: "",
        },
        {
            title: "SignalR Integration",
            description: "Restructured the application to use SignalR to make the application real-time.",
            date: "March 2024",
        },
        {
            title: "Task Management Module",
            description: "Developed task module and integrated it with credit module to sync tasks with credit hours.",
            date: "",
        },
        {
            title: "Document sharing module",
            description: "Developed a document sharing module within a service request so files can be better organized.",
            date: "",
        },
        {
            title: "Comments module",
            description: "Developed a raltime comments module for better communication between customer and engineers.",
            date: "",
        },
        {
            title: "Credit Hours Module",
            description: "Used stripe to allow customers to purchase credit hours that can be consumed when a task is completed.",
            date: "February 2024",
        },
        {
            title: "API Integration",
            description: "Integrated the APIs provided by backend team.",
            date: "",
        },
        {
            title: "Implemented RBAC",
            description: "Made the application secure by implementing Role Based Access Control (RBAC).",
            date: "",
        },
        {
            title: "Code Optimization",
            description: "Made the application optimized for mobile devices.",
            date: "January 2024",
        },
        {
            title: "Code Refactoring",
            description: "Converted the application into smaller reusable components.",
            date: "",
        },
        {
            title: "Layouting and Styling",
            description: "I started by analyzing Figma designs and creating interfaces for the application.",
            date: "December 2023",
        },
    ],
}


export const FEATURES = {
    ITAM: [
        {
            title: "Hardware & Software Asset Management",
            description: "The system supports comprehensive management of both hardware and software assets. From computers and printers to software licenses and digital products, ITAM is suitable for any asset.",
            image: "/images/projects/itam/assets-list.webp",
        },
        {
            title: "Automatic Logs & History",
            description: "Whenever the asset gets modified or gets assigned to a new user, the system generates logs and maintains a history of changes. This helps users keep track of asset usage and maintenance history.",
            image: "/images/projects/itam/logs-and-history.png",
        },
        {
            title: "Custom form fields and tags",
            description: "Because each asset has unique details, ITAM allows users to add custom fields and tags to each asset. This makes it easy to search and filter assets based on specific criteria. For example when adding a laptop, you can define a brand, model, and serial number.",
            image: "/images/projects/itam/custom-fields.png",
        },
        {
            title: "Licence Expiry Notifications",
            description: "The system sends notifications to users when assets are about to expire. This helps users stay up-to-date on their assets and take action accordingly.",
        },
        {
            title: "Multi-tenant Support",
            description: "All assets and related data are stored separately based on each user's organization. This ensures that users only have access to the assets and information belonging to their own organization.",
        },
        {
            title: "Super Admin Account",
            description: "To provide support to its customers, VaporVM holds a special Super-Admin account. The account is used to manage assets of all organizations registered on the system.",
            image: "/images/projects/itam/super-admin.webp",
        },
        {
            title: "Role Based Access Control (RBAC)",
            description: "The system uses RBAC to ensure secure and organized access management. Each user is assigned a role, and every role comes with specific permissions. For example, administrators can view, create, update, or delete assets, while regular users may only have permission to view asset information. This structure helps maintain control, security, and clarity over who can perform which actions within the system.",
        },
        {
            title: "Custom Roles and Permission Management",
            description: "The system allows each organization to create and manage its own roles and permissions. Since every organization operates differently, this flexibility ensures the system can be tailored to match each team's workflows and access requirements.",
            image: "/images/projects/itam/role-management.png",
        },
    ],
    QABOOL_HAI: [
        {
            title: "Halal Matchmaking",
            description: "Qaboolhai is a halal matchmaking platform developed for Muslim men and women who are looking for a life partner.",
            image: "",
        },
        {
            title: "Live Events",
            description: "Qaboolhai organizes live events accross the world to help people meet each other and find their soulmates. The events are added by the admin and users can join them by purchasing tickets.",
            image: "/images/projects/qaboolhai/events.png",
        },
        {
            title: "Gold & Platinum Membership",
            description: "Qaboolhai offers gold and platinum membership to its users who want extra perks and benefits.",
            image: "",
        },
        {
            title: "Selfie Verification",
            description: "The platform detects the face of the user and allows them to verify their identity by taking a selfie. No fakes are allowed.",
            image: "",
        },
    ],
    ONEVIBE: [
        {
            title: "Posts Module",
            description: "Onevibe lets the users create posts, photos and videos. It also allows users to like, comment and share posts.",
            image: "",
        },
        {
            title: "Reels and Stories",
            description: "The platform lets the users create reels and stories and share them with others.",
            image: "",
        },
        {
            title: "Chat Module",
            description: "Onevibe combines all essential chat features into a single robust application to deliver the best experience to its users.",
            image: "",
        },
        {
            title: "Group Chat Module",
            description: "Onevibe provides a way to create groups of your favourite friends and chat with them in one place.",
            image: "",
        },
        {
            title: "Audio/Video Calling",
            description: "Users can start a video call or audio calls with their friends and family to feel more connected.",
            image: "",
        },
    ],
    INSTANT_CLOUD_SUPPORT: [
        {
            title: "Role Based Access Control (RBAC)",
            description: "The platform has Role Based Access Control (RBAC) implemented which allows users to have different levels of access based on their roles. There are three primary roles: Customer, Customer-Care Representative, and Expert-Support.",
            image: "",
        },
        {
            title: "Call Queue Management",
            description: "The platform lets the Customer-Care Representatives manage call queues and assign tasks to the Expert-Support users.",
            image: "",
        },
        {
            title: "Service Request Creation",
            description: "Service Requests works like tickets and can be created by the Customer or Customer-Care Representative (Admins).",
            image: "",
        },
        {
            title: "Task Creation and Assignment",
            description: "Each service request can have multiple tasks that can be assigned to Expert-Support users. The progress of the task can be upated by the Expert-Support users. When the progress is updated, the Customer receives Realtime Notifications.",
            image: "",
        },
        {
            title: "Credit Hours Management",
            description: "The platform lets the customers purchase credit hours. These credit hours are consumed when a task is completed by Expert-Support users.",
            image: "",
        },
        {
            title: "Realtime progress tracking",
            description: "The platform shares realtime project tracking with the customer.",
            image: "",
        },
        {
            title: "Chat and Video Calling",
            description: "The customers can start a video call or chat with the Customer-Care Representative (Admins) or Expert-Support users that are directly assigned to their project.",
            image: "",
        },
    ],
}