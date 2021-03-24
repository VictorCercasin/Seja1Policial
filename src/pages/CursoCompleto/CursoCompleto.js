import React from "react";
//import { Link } from 'react-router-dom';

import CursoLista from "../../components/CursoItem/CursoLista";
import "./CursoCompleto.css";
import C1 from "../../assets/images/c1.png";
import C2 from "../../assets/images/c2.png";
import C3 from "../../assets/images/c3.png";
import C4 from "../../assets/images/c4.png";
import C5 from "../../assets/images/c5.png";
import C6 from "../../assets/images/c6.png";
import C7 from "../../assets/images/c7.png";
import C8 from "../../assets/images/c8.png";
import C9 from "../../assets/images/c9.png";
import C10 from "../../assets/images/c10.png";
import C11 from "../../assets/images/c11.png";
import C12 from "../../assets/images/c12.png";
import C13 from "../../assets/images/c13.png";
import C14 from "../../assets/images/c14.png";
import C15 from "../../assets/images/c15.png";
import C16 from "../../assets/images/c16.png";

const DUMMY_COURSES = [
  {
    name: "PMPA 2021",
    subject: "Policia Militar",
    description: "+ 650 Questões Gabaritadas PMPA",
    costNormal: "99,90",
    costPromo: "69,90",
    imgSrc: C1,
    imgAlt: "PMPA 2021",
  },
  {
    name: "PMTO 2021",
    subject: "Policia Militar",
    description: "+ 700 Questões Gabaritadas PMTO",
    costNormal: "99,90",
    costPromo: "59,90",
    imgSrc: C2,
    imgAlt: "PMTO 2021",
  },
  {
    name: "PCPR 2021",
    subject: "Policia Civil",
    description: "+ 450 Questões Gabaritadas PCPR",
    costNormal: "89,90",
    costPromo: "59,90",
    imgSrc: C3,
    imgAlt: "PCPR 2021",
  },
  {
    name: "PMPR 2021",
    subject: "Policia Militar",
    description: "+ 550 Questões Gabaritadas PMPR",
    costNormal: "99,90",
    costPromo: "59,90",
    imgSrc: C4,
    imgAlt: "PMPR 2021",
  },
  {
    name: "PRF 2021",
    subject: "Policia Rodoviária Federal",
    description: "+ 1500 Questões Gabaritadas PRF",
    costNormal: "119,90",
    costPromo: "69,90",
    imgSrc: C5,
    imgAlt: "PRF 2021",
  },
  {
    name: "PF 2021",
    subject: "Policia Federal",
    description: "+ 1500 Questões Gabaritadas PF",
    costNormal: "109,90",
    costPromo: "59,90",
    imgSrc: C6,
    imgAlt: "PF 2021",
  },
  {
    name: "GCM 2021",
    subject: "Guarda Civil Municipal",
    description: "+ 600 Questões Diversas Bancas GCM",
    costNormal: "89,90",
    costPromo: "47,90",
    imgSrc: C7,
    imgAlt: "PF 2021",
  },
  {
    name: "PMSP 2021",
    subject: "Policia Militar",
    description: "+ 550 Questões Gabaritadas Vunesp",
    costNormal: "99,90",
    costPromo: "59,90",
    imgSrc: C8,
    imgAlt: "PMSP 2021",
  },
  {
    name: "DEPEN 2021",
    subject: "Departamento Penitenciário",
    description: "+ 1500 Questões Gabaritadas DEPEN",
    costNormal: "119,90",
    costPromo: "59,90",
    imgSrc: C9,
    imgAlt: "DEPEN 2021",
  },
  {
    name: "ESA 2021",
    subject: "Escola de Sargento das Armas",
    description: "+ 550 Questões Gabaritadas ESA",
    costNormal: "99,90",
    costPromo: "49,90",
    imgSrc: C10,
    imgAlt: "ESA 2021",
  },
  {
    name: "PMAL 2021",
    subject: "Policia Militar",
    description: "+ 750 Questões Gabaritadas PMAL",
    costNormal: "99,90",
    costPromo: "59,90",
    imgSrc: C11,
    imgAlt: "PMAL 2021",
  },
  {
    name: "PCPA",
    subject: "Policia Civil",
    description: "+ 930 Questões Gabaritadas PCPA",
    costNormal: "119,90",
    costPromo: "79,90",
    imgSrc: C12,
    imgAlt: "PCPA",
  },
  {
    name: "PCDF 2021",
    subject: "Policia Civil",
    description: "+ 1350 Questões Gabaritadas PCDF",
    costNormal: "109,90",
    costPromo: "59,90",
    imgSrc: C13,
    imgAlt: "PCDF",
  },
  {
    name: "PCRN 2021",
    subject: "EM BREVE",
    description: "+ 800 Questões Gabaritadas PCRN",
    costNormal: "109,90",
    costPromo: "59,90",
    imgSrc: C14,
    imgAlt: "PCRN",
  },
  {
    name: "PCSP 2021",
    subject: "Policia Civil",
    description: "+ 600 Questões Gabaritadas PCSP",
    costNormal: "109,90",
    costPromo: "59,90",
    imgSrc: C15,
    imgAlt: "PCRN",
  },
  {
    name: "PCRJ 2021",
    subject: "EM BREVE",
    description: "+ 800 Questões Gabaritadas PCRJ",
    costNormal: "109,90",
    costPromo: "59,90",
    imgSrc: C16,
    imgAlt: "PCRJ",
  },
];

const CursoCompleto = () => {
  return (
    <div className="page-curso">
      <CursoLista cursoLista={DUMMY_COURSES}></CursoLista>
    </div>
  );
};

export default CursoCompleto;
