export const portfolioData = {
  header: {
    name: "Gabriel",
    title: "Front-end developer",
    subtitle: "React, Vue & JavaScript",
    role: "Web Developer",
  },
  intro: {
    title: "Hi there, I'm Gabriel!",
    description:
      "A bilingual Front-End Web Developer driven by a curiosity for emerging technologies and a focus on continuous learning and improvement, I consistently seek out innovative approaches to solve complex problems.",
  },
  projects: [
    {
      title: "Responsive Movies Web App",
      description: "A modern and responsive web app utilizing React Hooks such as useState, useEffect useParams and more, for dynamic state management and fetching movie data. The app allows users to browse movies, view detailed information including cast, trailers (via YouTube), and similar movies. ",
      image: "public/movies-app-preview.png",
      technologies: ["React", "JavaScript", "React-Router", "TMDb API", "SCSS"],
      link: "https://movies-app-ashen-six.vercel.app/react-movie-app"
    },
    {
      title: "Virtual Reality Landing Page",
      description: "A responsive and modern landing page designed with a mobile-first approach to showcase virtual reality experiences and products. Emphasizing clean design and fast loading times to provide an engaging user experience across all devices. Featuring dynamic visuals, and placed call-to-actions (CTAs),",
      image: "public/virtual-reality-landing-page-prod.vercel.app_ (1).png", // You'll need to add these images to your public folder
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel", "npm", "Git"],
      link: "https://virtual-reality-landing-page-prod.vercel.app/"
    },
    {
      title: "Pizza ordering and tracking app",
      description: "A sleek front-end application that allows users to browse a pizza menu that is fetched from an external Rest API, customize orders, manage their cart, and track their order status. Features include dynamic item updates, a search bar for finding previous orders, and an checkout process.",
      image: "public/fast-pizza-ordering.vercel.app_.png",
      technologies: ["React", "Redux", "React-Router", "Tailwind CSS", "Rest API", "Git"],
      link: "https://fast-pizza-ordering.vercel.app/"
    },
    // {
    //   title: "Task Management Tool",
    //   description: "A collaborative task management application with real-time updates",
    //   image: "https://placehold.co/600x400",
    //   technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Jest"],
    //   link: "https://github.com/example/project4"
    // }
  ],
  services: [
    {
      id: "01",
      number: "",
      title: "FRONTEND DEVELOPMENT",
      description: "Crafting responsive and performant web applications using modern technologies and best practices. Specialized in React, Vue and JavaScript development with a focus on user experience and accessibility.",
      details: [
        "Modern JavaScript & Python",
        "React & Vue Development(and More!)",
        "State Management (Redux, Context API)",
        "Responsive Design",
        "Spanish Native Speaker & English Fluent(C1)",
      ]
    },
    // {
    //   id: "02",
    //   number: "02",
    //   title: "UI/UX DESIGN",
    //   description: "Creating intuitive and engaging user interfaces that provide exceptional user experiences. Focus on modern design principles and accessibility.",
    //   details: [
    //     "User Interface Design",
    //     "Responsive Layouts",
    //     "Interactive Prototypes",
    //     "Design Systems",
    //     "Accessibility (WCAG)"
    //   ]
    // }
  ],
  about: {
    description: `Professional with experience in web development, I've had the pleasure of working as a freelance developer and I'm the co-founder of a Japanese learning platform(Still in Development). My journey began by cloning landing pages with simple HTML and CSS, but my passion for creating exceptional user experiences, solving complex problems and creating software that improves people's lives led me to become proficient in modern frameworks and tools.
     When I'm not coding, I spend my time reading, learning languages or hanging out with my friends!.`,
  
    skills: [
      // "Frontend Development",
      // "UI/UX Design",
      // "React & TypeScript",
      // "Performance Optimization",
      // "Technical Leadership",
      // "Mobile-First Development"
    ],

    experience: [
      {
        company: "Tech Innovators Inc.",
        role: "Senior Frontend Developer",
        period: "2020 - Present",
        description: "Leading the frontend development team and architecting scalable solutions."
      },
      {
        company: "Digital Solutions Ltd.",
        role: "Frontend Developer",
        period: "2018 - 2020",
        description: "Developed and maintained multiple client projects using React and TypeScript."
      }
    ],

    education: [
      {
        degree: "Master's in Computer Science",
        school: "Tech University",
        year: "2018"
      },
      {
        degree: "Bachelor's in Software Engineering",
        school: "Engineering College",
        year: "2016"
      }
    ]
  },
  contact: {
    email: "curtainsopened82@gmail.com",
    // phone: "+44555555555",
    // location: "San Francisco, CA",
    availability: "Open to new opportunities"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/gabriel-maldonado-138ab1323/",
    twitter: "#",
    // instagram: "#",
    // github: "#",
  },
};
