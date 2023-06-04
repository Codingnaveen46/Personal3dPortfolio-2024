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
    title: "WordPress Developer",
    icon: web,
  },
  // {
  //   title: "Frontend Developer",
  //   icon: mobile,
  // },
  {
    title: "Technical Recruiter",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
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
  {
    name: "Three JS",
    icon: threejs,
  },
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
    title: "WordPress Developer",
    company_name: "GoldenPi Technologies Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "As a WordPress developer, I have an experience working on blog websites where I have successfully implemented various new features and made structural changes to enhance the overall functionality and user experience. In addition to these improvements, I have also integrated new plugins to extend the capabilities of the blog.",
      "During my work, I prioritize writing clean and maintainable code to ensure the long-term sustainability of the website. I adhere to best coding practices and follow WordPress coding standards to ensure consistency and readability of the codebase. By doing so, I aim to facilitate future updates, bug fixes, and modifications, making it easier for other developers to collaborate on the project if necessary.",
      "When adding new features, I carefully analyze the requirements and plan the implementation accordingly. I aim to keep the code modular and reusable to minimize dependencies and ensure scalability. This approach allows for easy maintenance and helps avoid code duplication.",
      "When making structural changes, I consider the impact on the existing functionality and take necessary precautions to prevent any unintended consequences. I thoroughly test the changes to ensure they do not introduce any regressions or conflicts with existing features.",
      "When integrating new plugins, I evaluate their compatibility with the current setup and choose reliable and well-supported options from trusted sources. I ensure that the plugins follow best coding practices and do not negatively affect the performance or security of the blog.",
      "Overall, my goal as a WordPress developer is to deliver a clean and robust solution that meets the client's requirements, enhances the user experience, and is easy to maintain and extend in the future.",

    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
  {
    testimonial:
      "Commig soon.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Commig soon.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
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
    tags: [,

      // {
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
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
