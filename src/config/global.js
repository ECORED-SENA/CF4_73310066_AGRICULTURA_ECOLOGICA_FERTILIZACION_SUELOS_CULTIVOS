export default {
  global: {
    componenteFormativo: 'Manejo agroecológico de plagas y enfermedades ',
    descripcionCurso:
      'Este componente formativo en el manejo agroecológico de plagas y enfermedades en cultivos, abordando prácticas preventivas y de control basadas en métodos naturales. Incluye estrategias para el manejo de arvenses, plagas y enfermedades, así como la preparación de bioinsumos. Promueve la sostenibilidad, la biodiversidad y la salud del ecosistema agrícola mediante técnicas limpias y ecológicas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/temas/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/temas/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/temas/a3.svg'),
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
        titulo: 'Generalidades',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de arvenses',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de arvenses',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Las arvenses como indicadoras',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Las arvenses como mejoradoras',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Métodos de manejo de las arvenses',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de plagas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Categorías de las plagas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Formas en que las plagas dañan los cultivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Las plagas y sus interacciones en el sistema agroecológico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos y estrategias de manejo de plagas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Prevención de plagas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Control de plagas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo de enfermedades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procedimiento para obtener bioinsumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Preparación de caldo de ceniza',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Preparación de purín de helecho',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Preparación de purín con base en ajo y ají',
            hash: 't_6_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/73310066_CF04_DU.pdf',
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
  complementario: [
    {
      tema: 'Generalidades',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). Clasificacion de las Plagas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/gS80Wl3iQPA?si=Cb2ekT6OoBJldOlP',
    },
    {
      tema: 'Manejo de arvenses',
      referencia:
        'Córdoba O. (2023). Manejo ecológico de plagas y enfermedades. Editorial Agrosavia.',
      tipo: 'Capítulo 5',
      link:
        'https://editorial.agrosavia.co/index.php/publicaciones/catalog/download/162/149/1124-1?inline=1',
    },
    {
      tema: 'Manejo de plagas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). Buenas Prácticas de Manejo de Plagas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/RaOwSSnJCss?si=xFbYsgiJ77m5dUV8',
    },
    {
      tema: 'Métodos y estrategias de manejo de plagas',
      referencia:
        'Agro Energy México. (2022).Control Biológico de plagas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=N6ts2tUrtCQ',
    },
    {
      tema: 'Manejo de enfermedades',
      referencia:
        'FAO. (2010). Manejo integrado de enfermedades. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).',
      tipo: 'Documento',
      link: 'https://www.fao.org/4/a1374s/a1374s05.pdf',
    },
    {
      tema: 'Preparación de caldo de ceniza',
      referencia:
        'Vida en el Campo (2023). CÓMO preparar Caldo de CENIZA (INSECTICIDA, FUNGICIDA y FERTILIZANTE) [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=68XPKDlIH5g',
    },
    {
      tema: 'Preparación de purín de helecho',
      referencia:
        'La Huerta de Iván (2016). Como Hacer Purin de Helecho | Insecticida Natural | La Huerta de Ivan. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/kTvu4Vxe1Aw?si=IH--6e1f44QJ_jUU',
    },
    {
      tema: 'Preparación de purín con base en ajo y ají',
      referencia:
        'Urban Crops Project. (2016). Cómo hacer un INSECTICIDA CASERO para plantas con AJO Y AJÍ SUPER EFECTIVO Moscas, áfidos, minadores. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/RIyBEsgOves?si=gkdp7czhb6imoRtA',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'enfoque agrícola que utiliza principios ecológicos para la producción sostenible y la conservación de recursos.',
    },
    {
      termino: 'Biopreparados',
      significado:
        'productos naturales utilizados para el control de plagas y enfermedades en la agricultura.',
    },
    {
      termino: 'Cobertura',
      significado:
        'uso de plantas o materiales orgánicos para proteger el suelo y mejorar su salud.',
    },
    {
      termino: 'Compostaje',
      significado:
        'proceso de descomposición de materia orgánica para producir abono rico en nutrientes.',
    },
    {
      termino: 'Control biológico',
      significado: 'método de control de plagas utilizando organismos vivos.',
    },
    {
      termino: 'Lombricompuesto',
      significado:
        'abono producido a partir de la descomposición de materia orgánica por lombrices.',
    },
    {
      termino: 'Plagas',
      significado:
        'organismos que causan daño a los cultivos y afectan la productividad agrícola.',
    },
    {
      termino: 'Prácticas sostenibles',
      significado:
        'técnicas agrícolas que buscan mantener y mejorar la salud del suelo y la productividad a largo plazo.',
    },
    {
      termino: 'Rotación de cultivos',
      significado:
        'práctica de alternar diferentes cultivos en el mismo terreno para mejorar la fertilidad del suelo y reducir plagas.',
    },
    {
      termino: 'Sistemas silvopastoriles',
      significado:
        'integración de árboles, pastos y animales en un mismo sistema de producción agrícola.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco, Y. (2016). El rol de las arvenses como componente en la biodiversidad de los agroecosistemas. Cultivos Tropicales, 37(4).',
      link: 'http://dx.doi.org/10.13140/RG.2.2.10964.19844',
    },
    {
      referencia:
        'Esqueda-Esquivel, V. A., Montero-Lagunes, M., & Juárez-Lagunes, F. I. (2010). El control de arvenses en la productividad y calidad del pasto Llanero. agronomía mesoamericana, 21(1), 145-157.',
      link:
        'https://www.scielo.sa.cr/scielo.php?pid=S1659-13212010000100015&script=sci_arttext',
    },
    {
      referencia:
        'IPES-Promoción del Desarrollo Sostenible / FAO-Oficina Sub Regional para América del Sur. (2010). Biopreparados para el manejo sostenible de plagas y enfermedades en la agricultura urbana y periurbana. Recuperado de',
      link: 'http://www.fao.org/3/a-as435s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2014). Una huerta para todos. Manual de auto-instrucción. Recuperado de',
      link: 'http://www.fao.org/3/a-i3846s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) e Instituto Colombiano de Desarrollo Rural (INCODER). (2016). Guía para la Implementación de Centros Demostrativos de Capacitación CDC con enfoque agroecológico. Recuperado de',
      link: 'http://www.fao.org/3/a-i6041s.pdf',
    },
    {
      referencia:
        'Ruiz, I. G., Mora, I. D., del Sol González, F., & Cruz, F. A. H. (2024). Control preemergente de arvenses con sustancias alternativas a los herbicidas de síntesis. Revista Científica Agroecosistemas, 12(1), 90-97.',
      link: 'https://aes.ucf.edu.cu/index.php/aes/article/download/688/644',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nina Elvira Rocha Nieto',
          cargo: 'Experta temática',
          centro:
            'Centro de Atención al Sector Agropecuario - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gissela Del Carmen Alvis Ladino ',
          cargo: 'Diseñadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez  ',
          cargo: 'Diseñadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benites',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza ',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos ',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Productor pódcast ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero  ',
          cargo: 'Productor pódcast ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Adolfo Contreras Barranco ',
          cargo: 'Guionista validador ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres ',
          cargo: 'Guionista validador ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
