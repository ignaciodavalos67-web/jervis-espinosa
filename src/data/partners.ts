export interface Partner { id: string; name: string; position: string; image: string; imageWidth: number; imageHeight: number; portrait?: { src: string; width: number; height: number }; email: string; linkedin: string; groups: { title: string; paragraphs: string[] }[]; }

// Biographies and professional contacts preserved from https://jervisespinosa.com/.
// image stores the archived circular source; only portrait may be displayed.
// portrait references the supplied original PNGs without resampling or recompression.
export const partners: Partner[] = [
  {
    "id": "jose-maria-espinosa",
    "portrait": { "src": "/assets/jose-maria-espinosa-original.png", "width": 1214, "height": 1296 },
    "name": "José María Espinosa Sevilla",
    "position": "Socio",
    "image": "/assets/Grupo-35841_018601861_2391.png",
    "imageWidth": 220,
    "imageHeight": 220,
    "email": "jespinosa@jervisespinosa.com",
    "linkedin": "https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-espinosa-sevilla-75922615a",
    "groups": [
      {
        "title": "Biografía",
        "paragraphs": [
          "José María concentra su práctica en asesoría tributaria e inversiones. Representa a clientes locales e internacionales con soluciones estratégicas y personalizadas. Es experto en la resolución de disputas en procedimientos administrativos y judiciales tributarios y aduaneros. Además, asesora a individuos y empresas en planificación fiscal y gestión patrimonial con enfoque tributario, brindando estrategias integrales que optimizan la carga fiscal. Su asesoría a personas naturales y familias se enfoca en la toma de decisiones de inversión, reestructuración y sucesión patrimonial."
        ]
      },
      {
        "title": "Actividad profesional y reconocimientos",
        "paragraphs": [
          "En el ámbito de inversiones, acompaña a sus clientes en la estructuración de proyectos y en la negociación de contratos de inversión con el Estado. Actualmente, se desempeña como vicepresidente del Comité Directivo de la Comisión de Young Ecuadorian Attorneys de la ICC. Ha sido reconocido internacionalmente al ser incluido en el prestigioso ranking ITR World Tax 2025 como “Rising Star” en asesoría tributaria a compañías."
        ]
      }
    ]
  },
  {
    "id": "enrique-jervis",
    "portrait": { "src": "/assets/enrique-jervis-original.png", "width": 518, "height": 482 },
    "name": "Enrique Jervis Dávalos",
    "position": "Socio",
    "image": "/assets/Grupo-35842_018601861_2392.png",
    "imageWidth": 220,
    "imageHeight": 220,
    "email": "ejervis@jervisespinosa.com",
    "linkedin": "https://www.linkedin.com/in/enrique-jervis-davalos",
    "groups": [
      {
        "title": "Biografía",
        "paragraphs": [
          "Enrique concentra su ejercicio profesional asesorando clientes en complejos asuntos corporativos y comerciales, tanto preventivos como contenciosos. Enrique tiene amplia experiencia en la adaptación de complejas operaciones locales y extranjeras al marco regulatorio local, apoyando en la reestructuración corporativa de grupos económicos, defendiendo los intereses de sus clientes en sofisticados conflictos societarios y litigios tanto en sede arbitral como judicial."
        ]
      },
      {
        "title": "Experiencia profesional",
        "paragraphs": [
          "Enrique además domina los marcos regulatorios de telecomunicaciones, financiero y seguros, apoyado a varios de los principales actores de estas industrias en Ecuador."
        ]
      },
      {
        "title": "Actividad profesional y reconocimientos",
        "paragraphs": [
          "Actualmente es presidente de la mesa de derecho corporativo de la comisión de Young Ecuadorian Attorneys de la International Chamber of Commerce y coach del equipo de arbitraje de la Universidad de las Américas."
        ]
      }
    ]
  }
];
