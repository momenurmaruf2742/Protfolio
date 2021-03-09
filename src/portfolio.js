/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Maruf's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Momenur Islam Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Md.Momenur Islam",
  logo_name: "MomenurIslam",
  nickname: "Maruf",
  subTitle:
    "A passionate Software Developer 🚀 and content writer ✍ having an experience of building modern Web applications with Python / Django / Reactjs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/momenurmaruf2742",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/momenurmaruf2742",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/md-momenur-islam-9b3b9a161/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCPJxVl8jzMa6AKFZvFYwvvw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:momenur.maruf@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MarufMomenur",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/momenurislam.maruf/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/momenur_maruf_143/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React & Materializecss ",
        "⚡ Developing mobile applications using Java, React Native ",
        "⚡ Progressive Web Applications",
        "⚡ Creating application backend in Node & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",

        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "SQl",
          fontAwesomeClassname: "carbon:sql",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/momenur_maruf",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/momenurmaruf",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Daffodil International University",
      subtitle: "B.Sc in Software Engineering",
      logo_path: "diu.2e4f74fc.png",
      alt_name: "DIU",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have received award from respected director for consistently best site making .",
      ],
      website_link: "http://daffodilvarsity.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Ethical Hacker",
      subtitle: "EC-Council",
      logo_path: "CEH.PNG",
      certificate_link: "",
      alt_name: "EC-Council",
      color_code: "#8C151599",
    },
    {
      title: "Android",
      subtitle: "ICT-Division Bangladesh",
      logo_path: "IMG20210310002252.jpg",
      certificate_link: "",
      alt_name: "ICT",
      color_code: "#8C151599",
    },
    {
      title: "C Programming",
      subtitle: "Code.org",
      logo_path: "maruf.jpg",
      certificate_link: "",
      alt_name: "C Programming",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience on Python , Django , Android , CEH ,ML done many more projects i like to develop project with more secure",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "coming-soon-with-megaphone-design_1017-26689.jpg",
          duration: "",
          location: "",
          description: "Comming Soon",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "coming-soon-with-megaphone-design_1017-26689.jpg",
          duration: "",
          location: "",
          description: "Comming Soon",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "coming-soon-with-megaphone-design_1017-26689.jpg",
          duration: "",
          location: "",
          description: "Comming Soon",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Machine Learning projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Maruf.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, Python, Django, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I have personal site for representing me",
    link: "https://momenurmaruf.wixsite.com/personal",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dhanmondi , Dhaka Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@25.0933388,89.0234687,13z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+8801963191891",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
