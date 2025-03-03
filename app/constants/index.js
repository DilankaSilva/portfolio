import project1 from "../assets/project1.jpg";
import project2 from "../assets/boardingHub.jpg";


export const HERO_CONTENT = `I am a highly motivated and dedicated student pursuing a degree 
in Computer Science and Statistics with a passion for developing robust and user-friendly 
software solutions.  I have experience in front-end technologies like React and Next.js, as well as back-end technologies 
including Spring Boot, MySQL, and Oracle.  My goal is to leverage my skills and contribute to innovative projects while continuously learning and growing as a software engineer.`;

export const EXPERIENCE = [
  {
    year: "2024 Oct - (present)",
    role: "Software Engineer Intern",
    company: "Ceylon Electriciy Board",
    description: `Developed RESTful APIs in Spring Boot to handle cost estimation, retrieve materials and job details, and save
cost details in the Oracle database. And also designed a UI for the job estimation module, improving user experience and accessibility. `,
  },
];

export const PROJECTS = [
  {
    title: "BoardingHub project",
    image: project2,
    description: `Developed a website for University students to find boarding houses, homemade law budget meals and easy
transport facilities in specific areas they prefer.`,
    technologies: ["ReactJS", "Spring Boot", "MySQL", "Figma", "Postman"],
  },
  {
    title: "Academic Advisor Project",
    image: project1,
    description: `Developed a website for the University to manage the assigning of academic advisors to undergraduates.`,
    technologies: ["ReactJS", "Spring Boot", "MySQL", "Figma", "Postman","google calender"],
  },
];

export const CONTACT = {
  address: "kandy,Sri Lanka",
  phoneNo: "+94 78-7943528 ",
  email: "dilankasilva725@gmail.com",
};
