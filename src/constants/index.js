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
  github,
} from "../assets";

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
    title: "HR RecruiterLevel 2",
    icon: web,
  },
  // // {
  // //   title: "Frontend Developer",
  // //   icon: mobile,
  // // },
  {
    title: "Technical Recruiter",
    icon: backend,
  },
  // {
  //   // title: "Full stack web developement certificate",
  //   // source_code_link:
  //   //   "https://learn.pwskills.com/certificate/089f566f-4ddb-4929-b4be-dc5358954fde",
  // },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Canva",
    icon: figma,
  },
  // {
  //   name: "Github",
  //   icon: github,
  // },
];

const experiences = [
  {
    title: "HR Recruiter Level 2",
    company_name: "Allegies Pvt. Ltd.",
    // icon:,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and executing recruitment strategies to identify and attract top technical talent for the organization.",
      "Sourcing and screening candidates through various channels such as job boards, social media, networking events, referrals, and others. Conducting phone screens and interviews to assess candidate qualifications, skills, and cultural fit.",
      "Collaborating with hiring managers to understand job requirements and develop job descriptions and interview questions. Building and maintaining relationships with candidates and hiring managers to ensure a positive experience and a strong talent pipeline..",
    ],
  },

  {
    title: "Technical Recruiter",
    company_name: "Goldenpi Technologies Pvt Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2022 - August 1 2023",
    points: [
      "Assist in the recruitment process, such as posting job listings, screening resumes, scheduling interviews",
      "Help with the onboarding process of new employees, including preparing orientation materials, coordinating training sessions, and ensuring new hires have all necessary paperwork completed.",
      "Assist in maintaining employee records and databases, ensuring that all information is accurate and up to date.",
      "Assist with the preparation of new employee orientation and training materials, and support the scheduling of training sessions.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "Commig soon.",
  //   name: "Sara Lee",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "Commig soon.",
  //   name: "Sara Lee",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Food Website",
    description:
      "Developed a responsive food website using HTML, CSS, and JavaScript., Employed CSS to style the website, including fonts, colors, layouts, and responsive design elements. Implemented JavaScript functionality to enhance user interactions and improve the overall user experience.Ensured the website's responsiveness by utilizing media queries and CSS breakpoints to adapt the layout and design across different devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://foodwebsite-three.vercel.app/",
  },
  {
    name: "Small projects",
    description:
      "Worked on some small projects feel free to visit my Github profile to see more projects",
    tags: [
      ,// {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://github.com/Codingnaveen46?tab=repositories",
  },
  {
    name: "Full stack web developement certificate",
    description:
      "",
    tags: [
      // {
      //   name: "React js",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Material UI",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Chart js",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link:
      "https://learn.pwskills.com/certificate/089f566f-4ddb-4929-b4be-dc5358954fde",
  },
];

export { services, technologies, experiences, testimonials, projects };
