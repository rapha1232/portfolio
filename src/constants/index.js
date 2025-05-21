export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Raphael was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Raphael’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Raphael. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Raphael was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'CrisisCompass',
    desc: 'CrisisCompass is a comprehensive crisis management platform that helps organizations and volunteers prepare for, respond to, and recover from emergencies. It provides real-time alerts, communication tools, and incident reporting features to ensure a swift and coordinated response to any crisis.',
    subdesc:
      'Built with Next.js, Convex, and Stream, CrisisCompass is a powerful tool that can save lives and protect communities during times of crisis.',
    href: 'https://crisiscompass.vercel.app',
    texture: '/textures/project/crisis.mp4',
    logo: '/assets/crisiscompass.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'NextJS',
        path: '/assets/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tail.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/ts.svg',
      },
      {
        id: 4,
        name: 'Convex DB',
        path: '/assets/conv-1.svg',
      },
      {
        id: 5,
        name: 'Clerk Auth',
        path: '/assets/c.svg',
      },
      {
        id: 6,
        name: 'Stream',
        path: '/assets/stream.svg',
      },
    ],
  },
  {
    title: 'Astro Club',
    desc: 'Astro Club is a social networking platform designed for astronomy enthusiasts. It allows users to connect with like-minded individuals, share their passion for the cosmos, and participate in stargazing events. The platform features a user-friendly interface, event scheduling capabilities, and a 3D model of the solar system for educational purposes.',
    subdesc:
      'Built with React.js, TailwindCSS, NestJS, and Three.js, Astro Club is a fun and interactive way for astronomy lovers to connect and learn more about the universe.',
    href: 'https://astroclub.vercel.app/home',
    texture: '/textures/project/astroclub.mp4',
    logo: '/assets/astroclub.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tail.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/ts.svg',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/three.svg',
      },
      {
        id: 5,
        name: 'Supabase',
        path: '/assets/sup.svg',
      },
      {
        id: 6,
        name: 'Redux',
        path: '/assets/redux.png',
      },
      {
        id: 7,
        name: 'NestJS',
        path: '/assets/nest.svg',
      },
    ],
  },
  {
    title: 'Live Docs',
    desc: 'Live Docs is a collaborative document editing platform that allows users to create, edit, and share documents in real-time. It features a user-friendly interface, live cursors, and a comment system for seamless communication. The platform is designed to streamline the document editing process and enhance productivity for teams of all sizes.',
    subdesc:
      'Built with NextJS, TailwindCSS, Clerk, and LiveBlocks. Live Docs is a powerful tool that can transform the way teams collaborate on documents.',
    href: 'https://live-docs-raphael-semaans-projects.vercel.app/sign-in',
    texture: '/textures/project/livedocs.mp4',
    logo: '/assets/livedocs.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'NextJS',
        path: '/assets/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tail.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/ts.svg',
      },
      {
        id: 5,
        name: 'Clerk',
        path: '/assets/c.svg',
      },
      {
        id: 6,
        name: 'LiveBlocks',
        path: '/assets/lb.svg',
      },
      {
        id: 7,
        name: 'Sentry',
        path: '/assets/sentry.svg',
      },
    ],
  },
  {
    title: 'XORA',
    desc: 'XORA is a landing page for a fake AI startup/company. It features a modern design, smooth animations, and a responsive layout.',
    subdesc: 'Built with ReactJS and TailwindCSS. XORA is a showcase of my frontend development skills and creativity.',
    href: 'https://saas-landing-page.raphaelsemaan.com',
    texture: '/textures/project/xora.mp4',
    logo: '/assets/xora.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'ReactJS',
        path: '/assets/re.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tail.svg',
      },
      {
        id: 3,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
    ],
  },
  {
    title: 'Threads Clone',
    desc: 'Threads Clone is a social media platform inspired by the popular app Threads by Instagram. It allows users to share messages with close friends. The platform features a user-friendly interface and real-time updates',
    subdesc: 'Built with NextJS and TailwindCSS. Threads Clone is a showcase of my fullstack development skills.',
    href: 'https://threads-clone-raphael-semaans-projects.vercel.app',
    texture: '/textures/project/threads-clone.mp4',
    logo: '/assets/threads-clone.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'NextJS',
        path: 'assets/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tail.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'assets/ts.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'assets/mongo.svg',
      },
      {
        id: 5,
        name: 'Clerk',
        path: 'assets/c.svg',
      },
      {
        id: 6,
        name: 'UploadThing',
        path: 'assets/uploadthing.svg',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tail.svg',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/ts.svg',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tail.svg',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/ts.svg',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tail.svg',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/ts.svg',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'University',
    pos: 'BS in Computer Science',
    duration: '2021 - 2024',
    title:
      'I am a fresh graduate from the University of Balamand. I have a Bachelor’s degree in Computer Science. I have a strong foundation in software development, data structures, algorithms, and computer systems. I have built several projects during my time at university which are showcased above.',
    icon: '/assets/exp1.svg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Internship at Exquitech Group',
    pos: 'Software Developer Intern',
    duration: 'Nov - Dec 2024',
    title: [
      '- Developed a fully functional book repository web application using Next.js, showcasing advanced front-end development skills.',
      '- Designed and implemented secure web APIs in C# to support user authentication, data management, and administrative functionalities.',
      '- Gained hands-on experience in full-stack web development, bridging front-end and back-end technologies.',
    ],
    icon: '/assets/exp2.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Searching for a Job',
    pos: '',
    duration: 'Present',
    title:
      'I am currently looking for a job as a software developer. I am passionate about technology and enjoy building things that live on the internet. I am open to learning new technologies and developing new types of applications.',
    icon: '/assets/exp4.svg',
    animation: 'salute',
  },
];
