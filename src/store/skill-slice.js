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
        name: "SASS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        id: ++i,
        name: "PHP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
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
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        id: ++i,
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        id: ++i,
        name: "Golang",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
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
        name: "Node JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
      },
      {
        id: ++i,
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        id: ++i,
        name: "PostgresSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
      },
      {
        id: ++i,
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
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