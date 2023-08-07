import { createSlice } from '@reduxjs/toolkit';

let i = 0;

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skill: [
      {
        id: ++i,
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      },
      {
        id: ++i,
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
      {
        id: ++i,
        name: "Javascript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      },
      {
        id: ++i,
        name: "PHP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
      },
      {
        id: ++i,
        name: "Jquery",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },
      {
        id: ++i,
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      },
      {
        id: ++i,
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        id: ++i,
        name: "Codeigniter 3",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      },
      {
        id: ++i,
        name: "Laravel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      },
      {
        id: ++i,
        name: "Inertia Js",
        image: "/skill/inertia.png",
      },
      {
        id: ++i,
        name: "React Js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        id: ++i,
        name: "Redux",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        id: ++i,
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
      },
      {
        id: ++i,
        name: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        id: ++i,
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      },
      {
        id: ++i,
        name: "Github",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        id: ++i,
        name: "VS Code",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        id: ++i,
        name: "FileZilla",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
      },
    ],
  },
  reducers: {},
});

export const skillActions = skillSlice.actions;

export default skillSlice;