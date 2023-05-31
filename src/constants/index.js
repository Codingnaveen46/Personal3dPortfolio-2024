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
      title: "Web Developer",
      icon: web,
    },
    {
      title: " Learning React ",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Wordpress Developer",
      icon: web,
    },
    {
      title: "Recruiter & Handling Social Media",
      icon: mobile,
    }
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
      // name: "TypeScript",
      // icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      // name: "Redux Toolkit",
      // icon: redux,
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
      // name: "Three JS",
      // icon: threejs,
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
      // name: "docker",
      // icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Social Media Strategist",
      company_name: "GoldenPi",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023 - present ",
      points: [
        "Developing and implementing social media marketing strategies and campaigns to promote the brand or product..",
        "Creating and curating content for social media platforms such as Facebook, Twitter, LinkedIn, Instagram, and others.",
        "Managing the day-to-day activities of social media platforms, including creating and scheduling posts, responding to comments and messages, and monitoring social media analytics.",
        "Developing and executing social media advertising campaigns to increase brand awareness, drive website traffic, and generate leads.",
        "Collaborating with other teams such as design, content, and product teams to ensure consistency in branding and messaging across all social media platforms.",
        "Analyzing and reporting on social media metrics to determine the effectiveness of social media campaigns and make data-driven decisions.",
        "Staying up-to-date with the latest social media trends, algorithms, and best practices to continuously improve social media marketing efforts."

      ],
    },
    {
      title: "TECHNICAL RECRUITER",
      company_name: "GoldenPi",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and executing recruitment strategies to identify and attract top technical talent for the organization.",
        "Sourcing and screening candidates through various channels such as job boards, social media, networking events, referrals, and others.",
        "Conducting phone screens and interviews to assess candidate qualifications, skills, and cultural fit.",
        "Collaborating with hiring managers to understand job requirements and develop job descriptions and interview questions.",
        "Managing the candidate experience throughout the recruitment process, including scheduling interviews, providing feedback, and making job offers.",
        "Maintaining and updating applicant tracking systems (ATS) to ensure accurate and timely data entry and reporting.",
        "Building and maintaining relationships with candidates and hiring managers to ensure a positive experience and a strong talent pipeline.",

      ],
    },
    
    // {
    //   title: "Freelance Developer",
    //   company_name: "freelancer",
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
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "ChatGPT-3.5",
      description:
        "ChatGPT can be used by people to get answers to their questions, learn new things, and get recommendations. People can also use ChatGPT to improve their productivity, practice their language skills, and have fun engaging in various activities. ChatGPT is designed to be a helpful and informative resource for anyone who interacts with it..",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      link: "https://codewithnaveen.vercel.app//",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
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
  