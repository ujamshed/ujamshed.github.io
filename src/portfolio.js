/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Usman Jamshed",
  title: "Hi, I'm Usman",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with experience building Scientific Software 🧬 and Web Applications ⚙️."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yQR53JlHXYZ4Oo9IbnvZNbNObxquRQ6n/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ujamshed",
  linkedin: "https://www.linkedin.com/in/usmanjamshedk/",
  gmail: "jamshedu@berkeley.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection2 = {
  subTitle: "SCIENTIFIC SOFTWARE DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop robust, scalable, optimized scientific software"
    ),
    emoji("⚡ Creating software for downstream wet-lab teams to increase throughput"),
    emoji(
      "⚡ Experienced in parallel programing paradigms and machine learning algorithms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Experienced with creating RESTful APIs and relational / non-relational databases"),
    emoji(
      "⚡ Integration of third party services such as AWS / Docker"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/berkeley.png"),
      subHeader: "Master of Molecular Science and Software Engineering",
      duration: "September 2021 - May 2023",
    },
    {
      schoolName: "McMaster University",
      logo: require("./assets/images/mcmaster.jpeg"),
      subHeader: "Bachelor of Health Science: Biology and Pharmacology CO-OP",
      duration: "September 2016 - April 2021",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computational Science CO-OP",
      company: "Moderna",
      companylogo: require("./assets/images/moderna.jpg"),
      date: "Jan 2023 – Present",
      desc: "Molecular Engineering and Modelling",
      descBullets: [
        "Creating software for wet-lab research teams to increase throughput and efficiency.",
        "In-silico humanization of antibodies.",
        "End-to-end protein re-engineering featuring ddG scan.",
        "Containerized and integrated developed software onto a lab data platform utilizing AWS infrastructure, decreasing workflow time by 70%"
      ]
    },
    {
      role: "Scientific Informatics Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Jan 2022 – Dec 2022",
      descBullets: [
        "Laboratory informatics management systems software developer working with proprietary languages and SQL in an agile fashion.",
        "Created python scripts for automating workflows and standardizing data ingestion using AWS Lambda and DynamoDB."
      ]
    },
    {
      role: "Junior Full Stack Developer",
      company: "McMaster University & ECCC",
      companylogo: require("./assets/images/mcmaster.jpeg"),
      date: "May 2020 – Dec 2021",
      desc: "Collaboration between McMaster University & Environment and Climate Change Canada",
      descBullets: [
        "Developed a website to host animal data collected by hunters/trappers in Alberta to give more information about the traplines to stakeholders using the LAMP (Linux, Apache, MySQL and PHP) stack, JS, HTML and CSS3.",
        "Used Vega-Lite to visualize different graphs to display data collected from the animals (elemental analysis, rodenticide presence, land use, etc.)",
        "Created an interactive leaflet map of all traplines with data.",
        "Has 50 monthly users."
      ]
    },
    {
      role: "MRL Vaccine Bio-Process Research and Development CO-OP",
      company: "Merck & Co., Inc.",
      companylogo: require("./assets/images/merck.gif"),
      date: "May 2019 – Dec 2019",
      desc: "Downstream Vaccine Conjugation",
      descBullets: [
        "Performing independent experiments for the optimization of chemical conjugation of polysaccharides to proteins to create a vaccine conjugate as part of downstream process development.",
        "Using analytical tools such as HPSEC to analyze the properties of the conjugates.",
        "Presenting results at group meetings, departmental meetings, and companywide symposiums."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OPEN SOURCE APPLICATIONS THAT I HELPED TO CREATE",
  projects: [
    {
      image: require("./assets/images/KT_Logo.png"),
      projectName: "Kotawân",
      projectDesc: "A PORTAL TO ACCESS WILDLIFE AND ENVIRONMENTAL MONITORING DATA",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kotawanportal.ca/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kraken.png"),
      projectName: "kraken",
      projectDesc: "Kolossal viRtual dAtabase for moleKular dEscriptors of orgaNophosphorus ligands",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kraken.molssi.org"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection2,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
