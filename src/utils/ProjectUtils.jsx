import chatAppImage from "../assets/chatapp.png";
import typeTestImage from "../assets/your_typo.png";
import ytCloneImage from "../assets/yt_clone.png";

export const projects = [
  {
    id: 1,
    name: "Typing Test",
    imageSrc: typeTestImage,
    description:
      "A typing test web application where users can take typing tests in different time modes. User test results, result analysis are stored and fetch from db with the help of firebase.",
    teckStack: "ReactJS, ChartJS, Firebase, Styled Components, Toastify",
    githubLink: "https://github.com/saivaraprasad195/Your_Typo.git",
    liveWebLink: "https://yourtypo.netlify.app",
  },
  {
    id: 2,
    name: "CHAT APP",
    imageSrc: chatAppImage,
    description:
      "A chatting application where users can Create Accout, Chat and share images with other users. User authentication, database and storing images is handled with Firebase .",
    teckStack: "ReactJS, Firebase, Zustand, Toastify",
    githubLink: "https://github.com/saivaraprasad195/React_Chat_App.git",
    liveWebLink: "https://chatapp195.netlify.app/",
  },
  {
    id: 3,
    name: "Youtube Clone",
    imageSrc: ytCloneImage,
    description:
      "A completely responsive YouTube-like UI that fetches and displays videos using the YouTube V3 API.Implemented search functionality to find videos dynamically.",
    teckStack: "HTML, CSS, JavaScript, API",
    githubLink: "https://github.com/saivaraprasad195/Youtube_Clone.git",
    liveWebLink: "https://saivaraprasad195.github.io/Youtube_Clone/",
  },
];
