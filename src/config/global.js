export default {
  global: {
    Name: 'Promoción y posicionamiento en redes sociales',
    Description:
      'Este componente aborda la implementación de acciones promocionales en redes sociales, considerando pauta digital, configuración básica de campañas, crecimiento de audiencias, posicionamiento de marca, pruebas publicitarias, optimización de anuncios, evaluación de resultados y formulación de recomendaciones para fortalecer la presencia digital.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Promoción en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modalidades y aplicaciones de la promoción digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Finalidades de la promoción en redes sociales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre promoción, publicidad y posicionamiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pauta digital y campañas promocionadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de la pauta digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos básicos de una campaña promocionada',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación entre la pauta y los objetivos publicitarios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Configuración básica de acciones promocionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Selección del objetivo de promoción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Selección de audiencias publicitarias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Asignación de presupuesto, duración y ubicación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Crecimiento de audiencias en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Seguimiento del crecimiento de audiencias',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estrategias orgánicas de crecimiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estrategias pagas de crecimiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Posicionamiento de marca en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Enfoques de posicionamiento digital',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Visibilidad, reconocimiento e interacción',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estrategias para fortalecer la presencia digital',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Pruebas publicitarias y comparación de anuncios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Preparación de una prueba publicitaria',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Elementos que pueden compararse',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Interpretación de los resultados de una prueba',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Optimización básica de anuncios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Ajustes de los elementos del anuncio',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Priorización de oportunidades de mejora',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicación y seguimiento de los ajustes',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado: 'número de personas a las que llegó una publicación o un anuncio.',
    },
    {
      termino: 'Audiencia objetivo',
      significado: 'grupo de personas al que una marca busca llegar mediante sus contenidos y acciones promocionales.',
    },
    {
      termino: 'Campaña promocionada',
      significado: 'conjunto de anuncios organizados en torno a un objetivo, una audiencia, un presupuesto y un período de difusión.',
    },
    {
      termino: 'Cliente potencial',
      significado: 'persona que manifiesta interés en una oferta, por ejemplo, al dejar sus datos o completar un formulario.',
    },
    {
      termino: 'Conversión',
      significado: 'acción prevista que completa un usuario, como una compra, inscripción, reserva o solicitud de información.',
    },
    {
      termino: 'Costo por resultado',
      significado: 'valor invertido para obtener una acción específica, como un clic, un mensaje o una conversión.',
    },
    {
      termino: 'Impresiones',
      significado: 'número de veces que se presentó una publicación o un anuncio; una misma persona puede generar varias impresiones.',
    },
    {
      termino: 'Interacciones',
      significado: 'acciones de participación de la audiencia, como reacciones, comentarios, contenido compartido o elementos guardados.',
    },
    {
      termino: 'Llamado a la acción',
      significado: 'indicación que orienta al usuario a realizar una acción concreta, como enviar un mensaje, visitar un enlace o completar un registro.',
    },
    {
      termino: 'Optimización publicitaria',
      significado: 'ajuste de los elementos de una campaña a partir del análisis de sus resultados para mejorar su desempeño.',
    },
    {
      termino: 'Pauta digital',
      significado: 'inversión destinada a distribuir anuncios o publicaciones promocionadas en plataformas digitales para alcanzar públicos y objetivos definidos.',
    },
    {
      termino: 'Posicionamiento digital',
      significado: 'percepción y reconocimiento que una marca construye entre sus públicos mediante su presencia y comunicación en canales digitales.',
    },
    {
      termino: 'Prueba publicitaria',
      significado: 'comparación de versiones de un anuncio para identificar cómo influyen los cambios en la audiencia, el formato o el mensaje sobre sus resultados.',
    },
    {
      termino: 'Segmentación',
      significado: 'selección de personas a las que se dirige un anuncio según características relacionadas con la oferta, como ubicación, intereses o comportamiento.',
    }
  ],
  referencias: [
    {
      referencia: 'Camacho, K. (2026, 30 de marzo). Qué son las audiencias en marketing + ejemplos reales. DesignPlus.',
      link: 'https://designplus.co/blog/marketing-digital/que-son-audiencias-marketing/',
    },
    {
      referencia: 'Glushko, R. J. (2022, 30 de octubre). 1.8: El concepto de “interacciones”. LibreTexts Español.',
      link: 'https://espanol.libretexts.org/Bookshelves/Humanidades/Investigacion_y_Alfabetizacion_Informacional/La_Disciplina_de_Organizar_-_4ed._(Glushko)/01:_Fundamentos_para_Organizar_Sistemas/01.8:_El_concepto_de_interacciones',
    },
    {
      referencia: 'MSMK. (2024, 11 de septiembre). ¿Qué es el alcance? MSMK University.',
      link: 'https://msmk.university/que-es-el-alcance/',
    },
    {
      referencia: 'Theriault, A. (2024, 10 de octubre). What is audience development? Lotame.',
      link: 'https://www.lotame.com/resources/what-is-audience-development/',
    }
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
