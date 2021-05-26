export default {
  global: {
    componenteFormativo:
      'Plan de implementación                                ',
    descripcionCurso:
      'El propósito de este componente es orientar la identificación de las actividades que se propone implementar en la unidad productiva respecto de las Buenas Prácticas Agrícolas (BPA). A su vez, presenta aspectos relevantes dentro del proceso de diagnóstico, planeación e implementación de las BPA.<br><br>Además, resalta la importancia de la capacitación a los productores rurales como una estrategia para la apropiación del conocimiento y el fortalecimiento del entorno comunitario.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Plan de implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Visitas de asesoramiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Formulación del plan de acción',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Capacitación para productores rurales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Métodos para realizar actividades de capacitación rural',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Herramientas de capacitación para productores rurales',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguimiento y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Visita de inspección interna',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Patricia Sánchez Peñaranda',
        cargo: 'Instructora',
        centro: 'AGROSENA / CAB',
      },
      {
        nombre: 'Fredy Orlando Ibáñez Morales ',
        cargo: 'Instructor ',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Yanet Bolaños Botina',
        cargo: 'Instructora',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica ',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'Eulises Orduz Amézquita',
          'Gilberto Junior Rodríguez Rodríguez',
          'Lady Adriana Ariza Luque',
          'María Carolina Tamayo López',
          'Oscar Iván Uribe Ortiz',
          'Orcar Javier Latorre Burbano',
          'Victor Raúl Cárdenas Cáceres',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción audiovisual',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculacion en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura -IICA-. (2018). Manual 5: el mercado y la comercialización. Programa de Fortalecimiento de Capacidades Agroempresariales y Asociativas, No. 5. San José, Costa Rica:',
      link:
        'https://repositorio.iica.int/bitstream/handle/11324/7088/BVE18040224e.pdf;jsessionid=F7BEFFC7C56C742FB788C8233AFBC65F?sequence=1',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura -IICA-. (2018). Manual 8: bases de la organización asociativa. Programa de Fortalecimiento de Capacidades Agroempresariales y Asociativas, No. 8. San José, Costa Rica:',
      link:
        'http://repositorio.iica.int/bitstream/handle/11324/7127/BVE18040228e.pdf;jsessionid=44104C332E8919CEFF87F18A0E1ACF08?sequence=1',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural - ASOHOFRUCOL. (2015). Guía básica para la implementación de Buenas Prácticas Agrícolas. Convenio 20150937 Ministerio de Agricultura y Desarrollo Rural - ASOHOFRUCOL. ZoE:',
      link:
        'http://www.asohofrucol.com.co/archivos/Libros/Gu%C3%ADa_B%C3%A1sica_Para_la_Implementaci%C3%B3n_de_Buenas_Pr%C3%A1cticas_Agr%C3%ADcolas_2015.pdf',
    },
    {
      referencia:
        'Resolución 030021 de 2017. [Instituto Colombiano Agropecuario ICA]. Por medio del cual se establecen los requisitos para la Certificación en Buenas Prácticas Agrícolas en producción primaria de vegetales y otras especies para consumo humano. Abril 28 de 2017.',
      link:
        'https://www.ica.gov.co/getattachment/9d8fe0fa-66d2-4feb-9513-cbba30dc4844/2017R30021.aspx#:~:text=instituto%20Colombiano%20Agropecuario-,RESOLUCI%C3%93N%20No.,otras%20especies%20para%20consumo%20humano%22.&text=Manual%20de%20Buenas%20Pr%C3%A1cticas%20Agr%C3%ADcolas.',
    },
    {
      referencia:
        'SENA – ASOHOFRUCOL. (2009). Guía para el técnico implementador de Buenas Prácticas Agrícolas. Convenio especial de cooperación Servicio Nacional de Aprendizaje SENA – Asociación Hortofrutícola de Colombia ASOHOFRUCOL No. 00305 de 2007:',
      link:
        'https://www.academia.edu/5559447/1_Gu%C3%ADa_t%C3%A9cnico_implementador_BPA?auto=download',
    },
    {
      referencia:
        'Troncoso, J. y Villalobos, P. (2004). Principios de administración de empresas agrícolas. Talca.',
      link:
        'https://docplayer.es/7597776-Principios-de-administracion-de-empresas-agricolas.html',
    },
    {
      referencia:
        'Vargas, O. G., y Fundación Chile. (2000). Manual de criterios comunes para el control de gestión en empresas agropecuarias. Programa de Gestión Agropecuaria. Fundación Chile.',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría interna',
      significado:
        'Proceso sistemático independiente y documentado para obtener evidencias que al evaluarse de manera objetiva, permiten determinar la conformidad del sistema de la calidad con los requisitos establecidos que se han implementado y se mantienen de manera eficaz, eficiente y efectiva.',
    },
    {
      termino: 'Control',
      significado:
        'Comprobación, inspección, fiscalización o intervención. También puede hacer referencia al dominio, mando y preponderancia, o a la regulación sobre un sistema.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Gráfico en el que se especifican todas las tareas que se deben hacer para poder completar un proyecto.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'El diagnóstico agrícola consiste en una herramienta de trabajo que permite tener una idea general de la unidad productiva al momento inicial del proyecto.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Es la parte de la pedagogía que se ocupa de los sistemas y métodos prácticos de enseñanza destinados a plasmar un aprendizaje auténtico y significativo.',
    },
    {
      termino: 'Estilo de aprendizaje',
      significado:
        'Se define como las distintas maneras en que un individuo puede aprender.',
    },
    {
      termino: 'Implementación',
      significado:
        'La implementación se refiere a la ejecución o puesta en acción de todas las actividades y tareas correspondientes al desarrollo de un proyecto.',
    },
    {
      termino: 'Inspección',
      significado:
        'Examen del diseño de un producto, proceso o instalación y determinación de su conformidad con requisitos específicos o sobre la base del juicio profesional con requisitos generales.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Es un recurso que permite realizar una vigilancia sobre diversas actividades, para luego poder tomar decisiones acertadas.',
    },
    {
      termino: 'Validación',
      significado:
        'Confirmación mediante el suministro de evidencia de que se han cumplido los requisitos para una utilización o aplicación específica prevista.',
    },
  ],
  complementario: [
    {
      texto:
        'Agencia de Desarrollo Rural -ADR-. (2017). Guía básica para la implementación de Buenas Prácticas Agrícolas. Convenio No. 493 de 2017 suscrito entre ADR y ASOHOFRUCOL.',
      tipo: 'Cartilla',
      link:
        'http://www.asohofrucol.com.co/archivos/Libros/Gu%C3%ADa_B%C3%A1sica_Para_La_Implementaci%C3%B3n_De_Bpa_2017.pdf',
    },
    {
      texto:
        'SENA – ASOHOFRUCOL. (2009). Guía para el técnico implementador de Buenas Prácticas Agrícolas. Convenio especial de cooperación Servicio Nacional de Aprendizaje SENA – Asociación Hortofrutícola de Colombia ASOHOFRUCOL No. 00305 de 2007.',
      tipo: 'Documento',
      descarga: '/downloads/1_Guia_tecnico_implementador_BPA.pdf',
    },
    {
      texto:
        'Corporación Colombia Internacional. (Ed.). (2009). Manual temático del facilitador en Buenas prácticas agrícolas – Anexos. Yerimpresos.',
      tipo: 'Documento',
      descarga: '/downloads/anexosManual.pdf',
    },
  ],
}
