import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/logo.jpg'
import github from './assets/img/icons/common/smartcreations.png'
import airbnb from './assets/img/icons/common/mantra.jpg'

export const greetings = {
    "name": "Moorthy rm",
    "title": "Hi all, I'm moorthy",
    "description": "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / php / mysql / codeigniter/ wordpress and some other cool libraries and Web Apps.",
    "resumeLink": "https://drive.google.com/file/d/13FSjnpV_4uJhfPExlxFAkK-u_GjFZ53D/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'MOORTHYrm'
}

export const contact = {
  
}

export const socialLinks = {
   
    "instagram": "https://www.instagram.com/moorthyrm96",
    "twitter": "https://twitter.com/moorthyrm96",
    "github": "https://github.com/MOORTHYrm",
    "linkedin": "https://in.linkedin.com/in/moorthy-rm-b48481b1"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / Back End User Interfaces for your web applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services as a Firebase'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'Wordpress',
        fontAwesomeClassname: 'logos:wordpress',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'php',
        fontAwesomeClassname: 'logos:php',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'codeigniter',
        fontAwesomeClassname: 'logos:codeigniter',
      },
      {
        skillName: 'mysql',
        fontAwesomeClassname: 'logos:mysql',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      
     
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '75',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Bharadhidasan University',
      subHeader: 'Bachelor of Computer Application',
      duration: 'July 2014 - April 2017',
      desc: 'i have developed leaderspassions.wordprss.com for tech blog.',
      descBullets: [
        'I have studied basic software engineering subjects like DS, DBMS, OS, php, java.',
        'Apart from this, I have done course on java certification.',
      ],
    },
   
]

export const experience = [
  {
    role: 'Web Developer',
    company: 'geethamsoft Pvt Ltd',
    companylogo: googlelogo,
    date: 'Nov 2017 – Feb 2019',
    desc:
      'Software Based company.',
    descBullets: [
      'We have developed login and registration module, file uploading concepts in php framework along with codeigniter',
      'facebook, whatsapp integration, pageview counter',
       'Team Size of 7',
     'php, codeigniter, mysql',
    ],
  },
  {
    role: 'Web Developer (parent company)',
    company: 'smartcreations',
    companylogo: github,
    date: 'March 2019 – June 2020',
    desc:
      'Gold platings, gold coating services',
    descBullets: [
      'We have developed login and registration module, static and dynamic pages',
      'facebook, whatsapp integration, php based blog system',
       'Team Size of 1',
     'php, mysql, facebook api, ',
    ],
  },
  {
    role: 'Web Developer (Subsidiary Company)',
    company: 'mantragoldcoatings',
    companylogo: airbnb,
    date: 'March 2019 – June 2020',
    desc:
      'Home Decor products',
      descBullets: [
      'We have developed woocommerce based ecommerce website. login and registration module, static and dynamic pages' ,
      'facebook, whatsapp integration, paytm payment gateway',
       'Team Size of 3',
     'wordpress, php, mysql,woocommerce, paytm payment gateway ',
    ],
  },
]

export const projects = [
  {
    name: "portfolio",
    desc: "react based personal website",
    link: {
      name: "personal portfolio",
      url: "dreamtecworld.com"
    }
  },
  {
    name: "covid tracker",
    desc: "worldwide covid tracker react based",
    link: {
      name: "covid tracker",
      url: "https://moorthycovidtracker.netlify.app/"
    }
  },
  {
    name: "calculator",
    desc: "simple react based calculator",
    link: {
      name: "calculator",
      url: "https://moorthycalculator.netlify.app/"
    }
  }
]