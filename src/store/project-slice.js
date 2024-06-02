import { createSlice } from "@reduxjs/toolkit";

let i = 0;

const initialProject = [
  {
    id: ++i,
    name: "Guru Inovatif",
    image: "/projects/gi_v3.png",
    technology: "Laravel, Bootstrap, Tailwind CSS, Spatie",
    link: "https://guruinovatif.id/",
  },
  {
    id: ++i,
    name: "BLK Kalimantan Selatan",
    image: "/projects/blk_kalsel.png",
    technology: "Laravel, Bootstrap, Sass, Spatie",
    link: "#",
  },
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
    technology: "Laravel, Bootstrap, Sass, Jquery, Spatie",
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
  {
    id: ++i,
    name: "Purchase Addon (Odoo 14)",
    image: "/projects/odoo_purchase_addon.png",
    technology: "Odoo 14",
    link: "https://github.com/ArdiRizqiansyah/odoo_autodidak_purchase",
  },
  {
    id: ++i,
    name: "Real Estate Ads (Odoo 16)",
    image: "/projects/odoo_real_estate_ads.png",
    technology: "Odoo 16",
    link: "https://github.com/ArdiRizqiansyah/odoo_real_estate_ads",
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
