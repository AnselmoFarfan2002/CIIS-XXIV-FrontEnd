const cronogramaData = [
  {
    day: "Lunes",
    date: new Date("11/13/2023"),
    activities: [
      {
        start: "09:00am",
        end: "13:00hrs",
        type: "rest",
        name: `Inscripciones`,
        speaker: "Anfitrión",
        country: "Perú",
      },
      {
        start: "15:00hrs",
        end: "16:00hrs",
        type: "rest",
        name: `Inscripciones`,
        speaker: "Anfitrión",
        country: "Perú",
      },
      {
        start: "16:00hrs",
        end: "17:00hrs",
        type: "Ponencia",
        name: `Más allá de la Visión Humana: Técnicas para estudiar Fenómenos Biológicos basados en IA`,
        speaker: "Ph.D. Daniel Ochoa (ESPOL)",
        country: "Ecuador",
      },
      {
        start: "17:00hrs",
        end: "18:00hrs",
        type: "Ponencia",
        name: `La Inteligencia Artificial mejora la Realidad de Brasil`,
        speaker: "Ph.D. Arlindo Galvão (CEIA)",
        country: "Brasil",
      },
      {
        start: "18:00hrs",
        end: "19:00hrs",
        type: "rest",
        name: `Inauguración: El comienzo de una semana maravillosa`,
        speaker: "Anfitrión",
        country: "Perú",
      },
    ],
  },
  {
    day: "Martes",
    date: new Date("11/14/2023"),
    activities: [
      {
        start: "09:00am",
        end: "10:00am",
        type: "Ponencia",
        name: "Detección de Neoantígenos mediante Transformadores y Aprendizaje por Transferencia",
        speaker: "MSc. Vicente Machaca (USALLE)",
        country: "Perú",
      },
      {
        start: "10:00am",
        end: "11:00am",
        type: "Ponencia",
        name: "Grounded Theory como Complemento para Obtener y Validar Requerimientos de Software",
        speaker: "Ítalo Donoso (UCN)",
        country: "Chile",
      },
      {
        start: "11:30am",
        end: "13:00hrs",
        type: "Taller",
        name: "",
        speaker: "Ph.D. Arlindo Galvão (CEIA)",
        country: "Brasil",
      },
      {
        start: "13:00hrs",
        end: "14:00hrs",
        type: "rest",
        name: "Almuerzo",
        speaker: null,
        country: null,
      },
      {
        start: "14:00hrs",
        end: "16:00hrs",
        type: "contest",
        name: "Concurso de robótica",
        speaker: null,
        country: null,
      },
      {
        start: "16:00hrs",
        end: "17:00hrs",
        type: "Ponencia",
        name: "Fake news en las Redes Sociales: Análisis de su Relación con las Emociones y las Intenciones",
        speaker: "Ph.D. Claudio Meneses (UCN)",
        country: "Chile",
      },
      {
        start: "17:00hrs",
        end: "18:00hrs",
        type: "Ponencia",
        name: "Experiencias y Herramientas de DevOps",
        speaker: "MSc. Diego Urrutia (UCN)",
        country: "Chile",
      },
    ],
  },
  {
    day: "Miércoles",
    date: new Date("11/15/2023"),
    activities: [
      {
        start: "09:00am",
        end: "10:00am",
        type: "Ponencia",
        name: "Más allá de la Caja Negra: Inteligencia Artificial Responsable y Explicabilidad",
        speaker: "MSc. Rosa Paccotacya (UNICAMP)",
        country: "Brasil",
      },
      {
        start: "10:00am",
        end: "11:00am",
        type: "Ponencia",
        name: "¿Cómo Investigar en Ciencia de la Computación?",
        speaker: "Ph.D. Yvan Tupac (UCSP)",
        country: "Perú",
      },
      {
        start: "11:30am",
        end: "13:00hrs",
        type: "Taller",
        name: "Revisiones Sistemáticas en Ciencia de la Computación",
        speaker: "Ph.D. Yvan Tupac (UCSP)",
        country: "Perú",
      },
      {
        start: "13:00hrs",
        end: "14:00hrs",
        type: "rest",
        name: "Almuerzo",
        speaker: null,
        country: null,
      },
      {
        start: "14:00hrs",
        end: "16:00hrs",
        type: "contest",
        name: "Feria Tecnológica",
        speaker: null,
        country: null,
      },
      {
        start: "16:00hrs",
        end: "17:00hrs",
        type: "Ponencia",
        name: "ITS & Smart City of  Necessity",
        speaker: "Ph.D. Yeon Soo Kim",
        country: "Corea del sur",
      },
      {
        start: "17:00hrs",
        end: "18:00hrs",
        type: "Ponencia",
        name: "Aprendizaje Profundo en Visión Computacional en Dispositivos con Recursos Computacionales Limitados",
        speaker: "Ph.D. Arlindo Galvão (CEIA)",
        country: "Brasil",
      },
    ],
  },
  {
    day: "Jueves",
    date: new Date("11/16/2023"),
    activities: [
      {
        start: "09:00am",
        end: "10:00am",
        type: "Ponencia",
        name: "Desarrollo de Software Guiado por Dominio",
        speaker: "Dr. Edgar Sarmiento (UNSA)",
        country: "Perú",
      },
      {
        start: "10:00am",
        end: "11:00am",
        type: "Ponencia",
        name: "Ajuste de Hiperparametros en la Selección de un Modelo de Aprendizaje Automático",
        speaker: "Dr. Roberto Espinosa (UTA)",
        country: "Chile",
      },
      {
        start: "11:30am",
        end: "13:00hrs",
        type: "Taller",
        name: "Análisis Automático de Código Fuente",
        speaker: "Dr. Edgar Sarmiento (UNSA)",
        country: "Perú",
      },
      {
        start: "13:00hrs",
        end: "14:00hrs",
        type: "rest",
        name: "Almuerzo",
        speaker: null,
        country: null,
      },
      {
        start: "14:00hrs",
        end: "16:00hrs",
        type: "contest",
        name: "Concurso de Programación",
        speaker: null,
        country: null,
      },
      {
        start: "16:00hrs",
        end: "17:00hrs",
        type: "Ponencia",
        name: "Identificación Automática de Defectos en Software",
        speaker: "Ph.D. Jesús Bellido (UTEC)",
        country: "Perú",
      },
      {
        start: "17:00hrs",
        end: "18:00hrs",
        type: "Ponencia",
        name: "Inteligencia Artificial Generativa y Multimodalidad",
        speaker: "Dr. Cesar Beltran (PUCP)",
        country: "Perú",
      },
    ],
  },
  {
    day: "Viernes",
    date: new Date("11/17/2023"),
    activities: [
      {
        start: "09:00am",
        end: "10:00am",
        type: "Ponencia",
        name: "Serverless Computing: Retos y Líneas de Investigación",
        speaker: "Dr. Alvaro Mamani (UNSA)",
        country: "Perú",
      },
      {
        start: "10:00am",
        end: "11:00am",
        type: "Ponencia",
        name: "Inteligencia Artificial y Ciberseguridad",
        speaker: "Dr. Julio Santisteban (UCSP)",
        country: "Perú",
      },
      {
        start: "11:30am",
        end: "13:00hrs",
        type: "Taller",
        name: "AWS Academy Cloud Foundations",
        speaker: "Dr. Alvaro Mamani (UNSA)",
        country: "Perú",
      },
      {
        start: "13:00hrs",
        end: "14:00hrs",
        type: "rest",
        name: "Almuerzo",
        speaker: null,
        country: null,
      },
      {
        start: "14:00hrs",
        end: "16:00hrs",
        type: "contest",
        name: "Concurso de Conocimientos",
        speaker: null,
        country: null,
      },
      {
        start: "16:00hrs",
        end: "17:00hrs",
        type: "Ponencia",
        name: "Programación de Restricciones",
        speaker: "Dr. Ricardo Valdivia (UTA)",
        country: "Chile",
      },
      {
        start: "17:00hrs",
        end: "18:00hrs",
        type: "Ponencia",
        name: "Mejora de la Seguridad de las Imágenes en Color con Técnicas de Marca de Agua Robustas contra los Ataques de Ambigüedad",
        speaker: "Ph.D. Joshi Sandeep",
        country: "India",
      },
      {
        start: "18:00hrs",
        end: "19:00hrs",
        type: "rest",
        name: "Clausura: Una pausa hasta el próximo año",
        speaker: "Anfitrión",
        country: "Perú",
      },
    ],
  },
];

export default cronogramaData;
