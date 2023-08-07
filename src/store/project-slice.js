import { createSlice } from "@reduxjs/toolkit";

let i = 0;

const initialProject = [
  {
    id: ++i,
    name: "SIPHA",
    image: "/projects/sipha.png",
    technology: "Laravel, Tailwind CSS, Spatie",
    link: "https://sipha.polihasnur.ac.id/",
  },
  {
    id: ++i,
    name: "Guru Inovatif V2",
    image: "/projects/gi_v2.png",
    technology: "Laravel, Bootstrap, Jquery",
    link: "https://v2.guruinovatif.id/",
  },
  {
    id: ++i,
    name: "PMB Politeknik Hasnur",
    image: "/projects/pmb_polhas.png",
    technology: "Laravel, Bootstrap, Jquery",
    link: "https://pmb.polihasnur.ac.id/",
  },
  {
    id: ++i,
    name: "Bakti Bersama",
    image: "/projects/bakti_bersama.png",
    technology: "Laravel, Bootstrap, Jquery",
    link: "https://baktibersama.id/",
  },
  {
    id: ++i,
    name: "Sipha V1",
    image: "/projects/sipha_v1.png",
    technology: "Codeingniter 3, Bootstrap",
    link: "https://v1.sipha.polihasnur.ac.id/",
  },
  {
    id: ++i,
    name: "Compre",
    image: "/projects/compre.png",
    technology: "Laravel, Bootstrap, Jquery, Spatie",
    link: "https://compre.id/",
  },
  {
    id: ++i,
    name: "Siswa Inovatif",
    image: "/projects/siswa_inovatif.png",
    technology: "Laravel, Bootstrap, Jquery, Spatie",
    link: "https://siswainovatif.id/",
  },
  {
    id: ++i,
    name: "Web Profile Polhas",
    image: "/projects/profile_polhas.png",
    technology: "Laravel, Bootstrap, Jquery",
    link: "https://polihasnur.ac.id/",
  },
  {
    id: ++i,
    name: "Bae Klinik",
    image: "/projects/bae_klinik.png",
    technology: "Laravel, Bootstrap, Jquery, Spatie",
    link: "https://service.bae-clinic.com",
  },
  {
    id: ++i,
    name: "Klinik Dr. Lidya",
    image: "/projects/klinik_dr_lidya.png",
    technology: "Laravel, Bootstrap, Jquery, Spatie",
    link: "https://drlidyaclinic.com",
  },
];

const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: initialProject,
  },
  reducers: {
    searchProject(state, action) {
        const search = action.payload;
        const filteredProject = initialProject.filter((project) => {
            return project.name.toLowerCase().includes(search.toLowerCase());
        });
        state.project = filteredProject;
    }
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
