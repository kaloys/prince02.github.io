import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  yamaha,
  bountiply,
  airevent,
  syngenta
} from "../assets";

const expCards = [];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DND Maintenance System",
    company_name: "Yamaha",
    icon: yamaha,
    iconBg: "#383E56",
    date: "December - Present 2025",
    points: [
      "The system is a digital filing platform that allows employees across nationwide to submit maintenance tickets for broken items, facility issues and many more.",
      "It supports multiple user roles with varying access privileges and handles dynamic workflows based on ticket data, ensuring efficient processing from submission to resolution",
      "Features automated email notifications and generates comprehensive ticket summaries to track issue lifecycles end-to-end."
    ],
  },
  {
    title: "Forms Builder",
    company_name: "Yamaha",
    icon: yamaha,
    iconBg: "#383E56",
    date: "January - September 2024",
    points: [
      "A user-friendly web application that simplifies the creation and management of custom forms with an intuitive drag-and-drop interface.",
      "It features customizable elements, user access and permissions; and secure data management.",
      "The Forms Builder empowers users of all technical levels to efficiently design and publish forms for various purposes in alignment with every departments of their organization.",
    ],
  },
  {
    title: "AirEvent",
    company_name: "Youthwise",
    icon: airevent,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "A comprehensive and user-friendly platform designed to streamline the planning, organization, and execution of various events, ranging from corporate conferences and trade shows to social gatherings and weddings.",
      "This software aims to simplify the entire event management process and enhance collaboration among event organizers, attendees, vendors, and stakeholders.",
    ],
  },
  {
    title: "Quality Inspection System for Quality Engineering Department",
    company_name: "Yamaha",
    icon: yamaha,
    iconBg: "#383E56",
    date: "Oct 2023-Apr 2024",
    points: [
      "The project aimed to digitalize the manual inspection process by developing both mobile and web applications for seamless data collection.",
      "Key features included a digital checklist for technical inspectors, historical data saving, comprehensive reports, interactive dashboards, offline mode functionality, QR code scanning, and image capture capabilities.",
      "This digital transformation significantly improved the efficiency and accuracy of the inspection process.",
    ],
  },
  {
    title: "Syngenta Application",
    company_name: "Syngenta",
    icon: syngenta,
    iconBg: "#E6DEDD",
    date: "July - August 2023",
    points: [
      "Streamline agricultural processes and support field operations through a centralized digital platform.",
      "It enables users to collect, manage, and analyze crop data efficiently, improving decision-making and farm productivity",
      "The app also fosters real-time collaboration between agronomists, farmers, and Syngenta teams for more responsive and data-driven farming practices."
    ],
  },
  {
    title: "Material Resource Planning Application",
    company_name: "Yamaha",
    icon: yamaha,
    iconBg: "#E6DEDD",
    date: "September 2022- Mar 2023",
    points: [
      "The project aims to eliminate paperwork and optimized the current manual processing of client’s material resource planning activities.",
      "Develop an efficient and effective system that streamline inventory management, optimize procurement processes, and ensure timely availability of resources for projects and operations.",
    ],
  },
  {
    title: "Kaizen System",
    company_name: "Yamaha",
    icon: yamaha,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - June 2023",
    points: [
      "It’s a fabrication request processing software solution designed to streamline the entire fabrication request workflow.",
      "With approval flow mechanism ensuring all requests follow a structured and transparent process, from submission to final approval.",
      "Users can easily track the status of their requests, enabling real-time monitoring and providing them with complete visibility throughout the entire fabrication lifecycle."
    ],
  },
  {
    title: "Bountiply",
    company_name: "Bountiply",
    icon: bountiply,
    iconBg: "#E6DEDD",
    date: "Feb-May 2022",
    points: [
      "Solutions Resource's end-to-end loyalty system is a versatile web and mobile application, designed to empower businesses with fully customizable loyalty programs.",
      "The system offers a seamless and user-friendly experience for both businesses and their customers, enabling effective management and engagement within loyalty programs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  words,
  techStackIcons,
  expCards,
};
