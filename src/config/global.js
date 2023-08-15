export default {
  global: {
    componenteFormativo: 'Ciberseguridad, Generalidades y aplicaciones',
    descripcionCurso:
      'Clasificar y almacenar los datos es cada vez más importante, se deben considerar diversas técnicas, análisis y normas que aporten al crecimiento de la organización. La manipulación de volúmenes de datos trae consigo un alto grado de responsabilidad en seguridad, clasificación, conservación y no duplicación de los datos recolectados, exigiendo que se respeten y monitoreen los riesgos que pueden presentarse.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de la ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aplicación de Ciberseguridad',
        desarrolloContenidos: true,
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
      tema:
        'Gestión del riesgo: orientación para la implementación de la NTC-ISO 31000 = Risk management: guidance for the implementation of ISO 31000',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2016). Gestión Del Riesgo: Orientación Para La Implementación De La NTC-ISO 31000 = Risk Management: Guidance for the Implementation of ISO 31000. Bogotá: Icontec.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000012244',
    },
    {
      tema:
        'Tecnología de la información: técnicas de seguridad. Gestión de incidentes de seguridad de la información',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2014). Tecnología De La Información: Técnicas De Seguridad. Gestión De Incidentes De Seguridad De La Información. Bogotá: ICONTEC.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000075887',
    },
    {
      tema: 'The rise of “malware”: Bibliometric analysis of malware study',
      referencia:
        'Razak, M. F. A. Nor Badrul Anuar, N.B. Salleh, R. and Ahmad, F. (2016) "The Rise of “malware”: Bibliometric Analysis of Malware Study." Journal of Network and Computer Applications 75 (2016): 58-76. Web.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracacademiconefile_A518245030',
    },
  ],
  glosario: [
    {
      termino: 'Antivirus',
      significado:
        'programas que permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuesto a software malicioso o cualquier otro tipo de malware; Estos programas ofrecen la oportunidad de eliminarlo por completo o poner en estado de cuarentena.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'consiste en la protección y confidencialidad de sistemas e información.',
    },
    {
      termino: 'Escáner de vulnerabilidades',
      significado:
        'software que detecta puntos frágiles en los sistemas informáticos de las empresas, con el objetivo de analizarlos y gestionarlos, dando respuesta oportuna a cualquier evento desafortunado.',
    },
    {
      termino: 'Evento',
      significado:
        'cambio que no genera resultados negativos, un evento no trae implicaciones negativas, de este modo, puede ser usado como una expresión neutral.',
    },
    {
      termino: 'Firewall',
      significado:
        'sistema cuya función es prevenir y proteger la red privada de ataques de otras redes. Su funcionamiento es sencillo: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.',
    },
    {
      termino: 'Hardware',
      significado:
        'componentes físicos del computador, es decir, todo lo que se puede ver y tocar.',
    },
    {
      termino: 'Incidente',
      significado:
        'representa resultados negativos. Pueden verse como las interrupciones o desmejoramiento en la calidad de los servicios prestados a los usuarios. Los incidentes deben atenderse mediante la estructura de gestión de incidencias.',
    },
    {
      termino: 'Proxy',
      significado:
        'programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e internet, filtrando todos los paquetes entre ambos. Así mismo, establece un sistema de autentificación, que limita el acceso a la red externa, por lo cual, se puede generar los registros sobre sitios, visitas, y demás datos de navegación.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad que un evento desafortunado ocurra y genere consecuencias a una persona, entidad o cosa.',
    },
    {
      termino: 'Seguridad de la Información',
      significado:
        'se encarga de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos.',
    },
    {
      termino: 'Software',
      significado:
        'todos los programas que contribuyen al funcionamiento de un conjunto de procesamiento de datos. (Sistemas operativos, aplicaciones, etc.)',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia. Artículo 15 del 13 de junio de 1991 (Colombia). ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/Constitucion-Politica-Colombia-1991.pdf',
    },
    {
      referencia:
        'Bsi group. (2022). Gestión de Seguridad de la Información ISO/IEC 27001. ',
      link:
        'https://www.bsigroup.com/es-CO/seguridad-de-la-informacion-isoiec-27001-/',
    },
    {
      referencia:
        'Política nacional de explotación de datos (Big Data). CONPES 3920 del 2018 (Colombia).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3920.pdf',
    },
    {
      referencia:
        'Política nacional de confianza y seguridad digital. CONPES 3995 del 2022. (Colombia).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3995.pdf',
    },
    {
      referencia:
        'Consulting Informático. (2016). Seguridad de la Información y Ciberseguridad ¿es lo mismo? ',
      link:
        'https://www.cic.es/seguridad-de-la-informacion-y-ciberseguridad-es-lo-mismo/',
    },
    {
      referencia:
        'DNP. Guía normativa aplicable a la explotación de datos del 2020. (Colombia).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Desarrollo%20Digital/Documentos/Modelo%20Explotacion%20de%20datos/2.3%20Gu%C3%ADa%20normativa%20explotaci%C3%B3n%20de%20datos_VF.pdf',
    },
    {
      referencia:
        'Gobierno de España. (2021). Las herramientas de análisis de datos más populares. ',
      link:
        'https://datos.gob.es/es/blog/las-herramientas-de-analisis-de-datos-mas-populares',
    },
    {
      referencia:
        'Guía de Gestión de riesgos de seguridad de la información. (2021). El SGSI y la gestión del riesgo-Guía Icontec internacional de educación. Recuperado de ',
      link: 'https://www.icontec.org',
    },
    {
      referencia:
        'Hopkin, P. (2010). Fundamentals of risk management: understanding, evaluating, and implementing effective risk management. Londres, Reino Unido: Kogan Page Limited.',
      link:
        'https://handoutset.com/wp-content/uploads/2022/05/Fundamentals-of-Risk-Management-Understanding-evaluating-and-implementing-effective-risk-management-Paul-Hopkin.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2014). Tecnología De La Información: Técnicas De Seguridad. Gestión De Incidentes De Seguridad De La Información. Bogotá: ICONTEC. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000075887',
    },
    {
      referencia:
        'Ley 1266. (2008). Por medio de la cual se dictan las disposiciones generales de habeas data (31 de diciembre de 2008). ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1266_2008.html',
    },
    {
      referencia:
        'Ley 1273. (2009). Modifica el código penal y crea como bien jurídico tutelado la protección de la información y de los datos (5 de enero de 2009). ',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia:
        'Reglamentó aspectos relacionados con la titularidad del uso de la información para el tratamiento de sus datos personales. (2012). Decreto 1377.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646#0',
    },
    {
      referencia:
        'Razak,. M. F. Nor Badrul Anuar, R. S. and Ahmad, F. (2016). "The Rise of “malware”: Bibliometric Analysis of Malware Study." Journal of Network and Computer Applications 75 (2016): 58-76. Web.',
      link: '',
    },
    {
      referencia:
        'Bogotá: ICONTEC. (2014). Tecnología De La Información: Técnicas De Seguridad. Gestión De Incidentes De Seguridad De La Información. Print',
      link: '',
    },
    {
      referencia:
        'Toro, R. (2019). Estructura de la Norma ISO 27001:2013. [online] PMG SSI - ISO 27001. ',
      link: 'https://www.pmg-ssi.com/2015/08/norma-iso-27001-2013-estructura',
    },
    {
      referencia:
        'Xataka Basics. (2017). Qué es un proxy y cómo puedes utilizarlo para navegar de forma más anónima. ',
      link:
        'https://www.xataka.com/basics/que-es-un-proxy-y-como-puedes-utilizarlo-para-navegar-de-forma-mas-anonima ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2016). Gestión Del Riesgo: Orientación Para La Implementación De La NTC-ISO 31000 = Risk Management: Guidance for the Implementation of ISO 31000. Bogotá: Icontec.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000012244',
    },
    {
      referencia:
        'Ley 1581 de 2012. Principios y disposiciones que definen los derechos sobre los datos personales y denuncia de las violaciones de seguridad del 17 de octubre del 2012.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
  ],
  // creditos: {
  //   liderEquipo: [
  //     {
  //       nombre: 'Maria Camila Garcia Santamaria',
  //       cargo: 'Líder del equipo',
  //       centro: 'Dirección General',
  //     },
  //   ],
  //   contenidoInstruccional: [
  //     {
  //       nombre: 'Rafael Neftalí Lizcano Reyes',
  //       cargo: 'Asesor metodológico y pedagógico',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //   ],
  //   desarrolloProducto: [
  //     {
  //       nombre: 'Francisco José Lizcano Reyes',
  //       cargo: 'Responsable del equipo',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //     {
  //       nombre: 'Nombre',
  //       cargo: 'Diseño web',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //     {
  //       nombre: 'Nombre',
  //       cargo: 'Producción audiovisual',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //     {
  //       nombre: 'Nombre',
  //       cargo: 'Desarrollo front-end',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //     {
  //       nombre: 'Nombre',
  //       cargo: 'Validación de diseño y contenido',
  //       centro:
  //         'Centro Industrial del Diseño y la Manufactura - Regional Santander',
  //     },
  //   ],
  //   gestoresRepositorio: [
  //     {
  //       nombre: 'Álvaro Andrés Angarita Ramirez',
  //       cargo: 'Validación y vinculación en plataforma LMS',
  //       centro: 'Centro de Comercio y Servicios - Regional Tolima',
  //     },
  //     {
  //       nombre: 'Daniel Felipe Varón Molina',
  //       cargo: 'Validación y vinculación en plataforma LMS',
  //       centro: 'Centro de Comercio y Servicios - Regional Tolima',
  //     },
  //     {
  //       nombre: 'Milady Tatiana Villamil Castellanos',
  //       cargo: 'Validación y vinculación en plataforma LMS',
  //       centro: 'Centro de Comercio y Servicios - Regional Tolima',
  //     },
  //   ],
  // },
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
