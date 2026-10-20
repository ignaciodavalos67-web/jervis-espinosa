export interface PracticeService { title: string; description?: string; }
export interface PracticeArea { id: string; number: string; title: string; description: string[]; services: PracticeService[]; }

export const practiceAreas: PracticeArea[] = [
  {
    "id": "tributario",
    "number": "01",
    "title": "Tributario e inversiones",
    "description": [
      "Asesoramos a nuestros clientes de forma oportuna, sofisticada y creativa para reducir el impacto fiscal que puedan tener sus actividades económicas.",
      "Nos enfocamos en prevenir contingencias tributarias y mitigar aquellas que se hayan materializado. Asimismo, nos enfocamos en defender los intereses de nuestros clientes de forma eficiente y eficaz en litigios administrativos y judiciales contencioso-tributarios."
    ],
    "services": [
      {
        "title": "Asesoría tributaria y planificación fiscal",
        "description": "Diseñamos estrategias personalizadas para optimizar la carga fiscal de sociedades y personas naturales, cumpliendo con la normativa vigente y aprovechando beneficios tributarios."
      },
      {
        "title": "Private Wealth",
        "description": "Brindamos soluciones integrales para la gestión y protección del patrimonio de nuestros clientes, asegurando su crecimiento y transferencia eficiente a futuras generaciones."
      },
      {
        "title": "Inversiones",
        "description": "Ofrecemos asesoría especializada en estructuras fiscales que potencian la rentabilidad fiscal, ajustándolas a un cumplimiento normativo de inversiones nacionales e internacionales."
      },
      {
        "title": "Resolución de controversias tributarias y aduaneras",
        "description": "Representamos a nuestros clientes en procesos administrativos y judiciales, resolviendo conflictos fiscales y aduaneros con soluciones efectivas y estratégicas."
      },
      {
        "title": "Planificación sucesoria",
        "description": "Diseñamos estructuras legales para una transición patrimonial ordenada y eficiente."
      }
    ]
  },
  {
    "id": "corporativo",
    "number": "02",
    "title": "Corporativo y comercial",
    "description": [
      "Asesoramos a sofisticadas y complejas operaciones y grupos económicos en sus necesidades societarias y comerciales en cuatro aristas principales: (i) Asesoría en el aterrizaje de sus operaciones en Ecuador, adaptando sus operaciones al régimen jurídico ecuatoriano; (ii) Identificación preventiva de potenciales contingentes y construcción de estrategias de mitigación; (iii) Viabilización jurídica de las estrategias comerciales del cliente a través de sofisticadas y creativas soluciones; (iv) Ejecución de nuestros servicios con estándares de calidad y tiempos de respuesta acordes a las mejores prácticas del mercado jurídico."
    ],
    "services": [
      {
        "title": "Representación en conflictos societarios."
      },
      {
        "title": "Reestructuraciones de grupos económicos."
      },
      {
        "title": "Adaptación de operaciones al régimen jurídico ecuatoriano."
      },
      {
        "title": "Asuntos societarios, fiduciarios y comerciales."
      },
      {
        "title": "Acompañamiento en procesos de compra o venta de activos, fusiones y reestructuraciones corporativas."
      },
      {
        "title": "Acuerdos de accionistas."
      },
      {
        "title": "Implementación de prácticas de ESG."
      }
    ]
  },
  {
    "id": "litigio",
    "number": "03",
    "title": "Resolución de conflictos",
    "description": [
      "Nuestro equipo cuenta con amplia experiencia en materia de solución de conflictos complejos, apoyando a nuestros clientes en la defensa de sus intereses al sustanciar desafiantes casos en sede judicial, arbitral, administrativa y constitucional."
    ],
    "services": [
      {
        "title": "Lideramos la negociación de nuestros clientes para defender sus intereses encaminados en alcanzar sus objetivos sin entrar en conflicto."
      },
      {
        "title": "Desarrollamos estrategias integrales para enfrentar un conflicto en donde el patrimonio de nuestros clientes esté directa o indirectamente en juego."
      },
      {
        "title": "Defendemos los intereses de nuestros clientes en procesos sustanciados a través de métodos alternativos como el arbitraje, mediación, negociación o transacción."
      },
      {
        "title": "Representamos a nuestros clientes en procedimientos judiciales, administrativos y constitucionales."
      },
      {
        "title": "Defendemos los intereses de nuestros clientes en conflictos societarios."
      }
    ]
  },
  {
    "id": "legal-family-office",
    "number": "04",
    "title": "Legal Family Office",
    "description": [
      "Nuestra práctica de Legal Family Office está diseñada para brindar soluciones jurídicas integrales que ordenen, protejan y garanticen la sostenibilidad en el tiempo y en las generaciones del patrimonio familiar. Nos especializamos en atender las necesidades legales de familias y high net worth individuals, asegurando que sus activos y operaciones estén protegidos y alineados con sus objetivos a largo plazo."
    ],
    "services": [
      {
        "title": "Diseñamos estructuras jurídicas encaminadas a proteger el patrimonio y las operaciones de nuestros clientes así como en reducir los riesgos de factores propios o externos a la operación."
      },
      {
        "title": "Planificamos procesos hereditarios a través de la redacción de estrategias hereditarias que incluyen protocolos de sucesión y resolución de conflictos y su implementación."
      },
      {
        "title": "Asesoramos en la planificación y elaboración de reglas, instrumentos, órganos y protocolos de gobernanza familiar."
      },
      {
        "title": "Elaboramos planificaciones fiscales familiares e individuales con el objetivo de reducir el impacto fiscal, maximizar la eficiencia en el manejo de activos y optimizar las estructuras corporativas tenedoras de activos."
      },
      {
        "title": "Representamos los intereses de nuestros clientes en conflictos relacionados con el patrimonio u operaciones familiares."
      }
    ]
  }
];
