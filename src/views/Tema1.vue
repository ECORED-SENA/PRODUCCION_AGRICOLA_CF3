<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Plan de implementación

    figure.mb-5
      .video
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/BWdNqm_QeQM?list=PLkc5n6npRWkh1DUiFmvAVdvaWFj2p0IZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
      
    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between                
        .col-lg-4.mb-4.mb-lg-0
          .h4.mb-0 Métodos y herramientas para realizar las capacitaciones en el sector rural.
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En este apartado se tratan los elementos que definen el plan de implementación, las visitas de asesoramiento, la formulación del plan de implementación, capacitación para productores rurales, los métodos y herramientas para realizar las capacitaciones en el sector rural.        

    #t_1_1.titulo-segundo
      .h4 1.1 Definición
    
    .row.mb-5.justify-content-center      
      .col-md-7
        p.mb-4 
          | Consiste en un documento que incluye las fases macro de la estructura de trabajo, teniendo como base las condiciones exigidas al predio con respecto a los requisitos establecidos para la certificación en        
          strong Buenas Prácticas Agrícolas.
          br 
          br
          | Las fases corresponden a los diferentes momentos en que se actuará a lo largo y durante el proceso de aplicación de los requisitos propuestos en la normatividad. Las fases se pueden definir una vez se realice el diagnóstico de la unidad productiva o de acuerdo con el conocimiento que se tenga del proceso de producción y del cultivo. Al interior de cada fase se determinan las actividades generales a realizar y que posteriormente se puntualizan en el plan de acción. 
      .col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema1/img01.svg", alt="Definición")      
              

    .h5.mb-4 Un ejemplo de modelo de fases para el desarrollo del proceso puede ser:
    .row.mb-5
      .col-sm-1.mb-5.mb-sm-0        
      .col-sm-11.mb-5.mb-sm-0        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p
              strong.pe-1 Fase de inicio:
              | en la cual se socializa al productor el objetivo y condiciones del proyecto de implementación.  
          li 
            .lista-ol--cuadro__vineta
              span 2
            p
              strong.pe-1 Fase de planeación: 
              | en la cual se realiza el diagnóstico de la unidad productiva y se propone el plan de acción.  
          li 
            .lista-ol--cuadro__vineta
              span 3
            p
              strong.pe-1 Fase de implementación:
              | en la cual se ponen en marcha las actividades propuestas en el plan de acción.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p
              strong.pe-1 Fase de seguimiento y control:
              | en la cual se revisa el estado de la implementación y se proponen acciones de mejora.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p
              strong.pe-1 Fase de cierre:
              | en la cual se solicita la visita de auditoría para la certificación.

    #t_1_2.titulo-segundo
      .h4 1.2 Visitas de asesoramiento

    p.mb-4 Las visitas de asesoramiento corresponden a todas las visitas que se propone realizar al predio desde el diagnóstico y durante el proceso de aplicación de las actividades propuestas en la implementación. Estas visitas se dividen en dos: la(s) visita(s) de diagnóstico y las visitas de implementación.  

    TabsC.mb-5.tabs-c__tab-custom
      .py-3.py-md-4(titulo="Visita de diagnóstico")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='Visita de diagnóstico')              
          .col-md-1.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p Es aquella primera visita al predio, que busca de forma general evaluar el estado inicial en que se encuentra la unidad productiva frente a los criterios de evaluación de la norma en buenas prácticas agrícolas. El diagnóstico producto de esta visita (y otras que se deben realizar de ser necesario) serán el insumo para la elaboración del plan de acción dentro del proceso de implementación. Allí se deben plantear las actividades a realizar en el corto, largo y mediano plazo, incluyendo tiempos y responsables para cada actividad.
          .col-md-1.mb-4.mb-md-0
      .py-3.py-md-4(titulo="Visita de implementación")
        .row          
          .col-md-1.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
            p Corresponden a todas y cada una de las visitas que se deben realizar al predio a medida que se avanza en el desarrollo de las actividades propuestas. El objetivo de estas es acompañar al productor en el proceso de implementación, verificar los avances, proponer acciones de mejora y ayudar a generar alternativas de solución a los diferentes problemas que se puedan presentar al interior de la unidad productiva.
          .col-md-1.mb-4.mb-md-0
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img03.svg', alt='Visita de implementación')                    
          

    #t_1_3.titulo-segundo
      .h4 1.3 Formulación del plan de acción

    p.mb-4 En el plan de acción se detalla de manera puntual cada una de las actividades que el productor debe realizar a medida que avanza en el proceso de implementación. Se debe incluir los tiempos para su ejecución y las tareas específicas que el productor debe realizar en la unidad productiva.

    .h4 Actividades a realizar.

    p.mb-4 Son todas las tareas específicas que el productor debe desarrollar durante el proceso de implementación para dar cumplimiento a los requisitos fundamentales, mayores y menores indicados en la normatividad. Estos requisitos se evalúan a través de criterios de cumplimiento que se convierten en actividades concretas y verificables para el proceso de certificación. 
      br 
      br
      | Algunos ejemplos de actividades que se propone llevar a cabo son:

    .row.mb-5          
      .col-md-1.mb-4.mb-md-0
      .col-md-7.mb-4.mb-md-0.d-flex.align-items-center        
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Adecuaciones en infraestructura.
          li 
            i.fas.fa-circle
            |	Diligenciar el formato de diagnóstico de la unidad productiva.            
          li 
            i.fas.fa-circle
            |	Elaboración del mapa de la finca en un tamaño de fácil observación y comprensión.            
          li 
            i.fas.fa-circle
            |	Establecer los parámetros relevantes para el cultivo.            
          li 
            i.fas.fa-circle
            |	Realizar la evaluación de riesgos.            
          li 
            i.fas.fa-circle
            |	Adecuar y organizar bodegas de insumos, plaguicidas y herramientas.          
          li 
            i.fas.fa-circle
            |	Elaborar avisos informativos del predio.            
          li 
            i.fas.fa-circle
            |	Elaborar formatos para registro de actividades.          
          li 
            i.fas.fa-circle
            |	Elaborar planes y procedimientos de acuerdo con la norma.            
          li 
            i.fas.fa-circle
            |	Otros, de acuerdo con la norma y el estado de la unidad productiva.          
      .col-md-3
        figure
          img(src='@/assets/curso/tema1/img04.svg', alt='Visita de implementación')
      .col-md-1.mb-4.mb-md-0

    .h4 Cronograma de actividades.
    .cajon--azul.p-4.mb-5    
      .row
        .col-1
        .col-10
          p El cronograma de actividades del proyecto de implementación corresponde al espacio en donde se identifican las actividades, se estima la duración en días y se crea la secuencia nombrando las actividades predecesoras y posteriores. Es importante, en la medida de lo posible, que ese cronograma permita incluir el nombre de los responsables de ejecutar las actividades y que además se pueda evidenciar el avance en el desarrollo de dichas actividades. 
        .col-1

    #t_1_4.titulo-segundo
      .h4 1.4 Capacitación para productores rurales

    p.mb-4 La capacitación a los agricultores juega un rol importante en el proceso de diagnóstico e implementación de las buenas prácticas agrícolas en la unidad productiva, así como en su sostenibilidad en el tiempo. Existe una gran variedad de métodos y estrategias; sin embargo, ninguno es bueno en sí mismo, ni es bueno para todo, y aunque se reconoce por los profesionales del agro que los métodos que facilitan la participación, la observación, la práctica y la reflexión generan mejores resultados que aquellos que generan una actitud pasiva por parte del participante, es necesario tener en cuenta que no existe ningún escenario “ideal” que asegure resultados positivos en todos los casos.      
    .row.mb-5                
      .col-md-5
        figure
          img(src='@/assets/curso/tema1/img05.svg', alt='Capacitación para productores rurales')
      .col-md-7.mb-4.mb-md-0.d-flex.align-items-center        
        p La metodología más comúnmente usada para la capacitación de personas del sector rural es la de “
          strong Aprender haciendo
          | ”, a través de la aplicación de métodos de enseñanza que le posibilitan al agricultor empoderarse del conocimiento, aprendiendo a solucionar situaciones problema, buscando la mejor solución. Esta metodología promueve el libre pensamiento con la finalidad de que el agricultor desarrolle las habilidades para ser el generador de sus propias soluciones. Si se permite que el agricultor piense y desarrolle la solución, él se empodera de sus actividades.
          br 
          br
          | El capacitador es la figura que planifica las actividades de capacitación, coordina el proceso de enseñanza y aprendizaje, y evalúa los resultados obtenidos. Su papel es crucial, y de su adecuada participación depende el cumplimiento de las metas planeadas, sus actividades influyen directamente no solo en los resultados obtenidos, sino en el bienestar y desarrollo individual de los participantes
            
    #t_1_5.titulo-segundo
      .h4 1.5 Métodos para realizar actividades de capacitación rural

    p.mb-4 Existe una gran variedad de métodos y técnicas que buscan el aprendizaje significativo de las personas sujeto de conocimiento. Dentro de los métodos de capacitación se pueden mencionar: 
    
    figure.mb-4
      img(src='@/assets/curso/tema1/img06.svg', alt='Métodos para realizar actividades de capacitación rural')
    
    p.mb-5 Cada uno de estos presenta características propias, ventajas y desventajas frente al tipo de población que se requiere impactar. Por tal motivo, es importante conocer la comunidad o el tipo de agricultor con el que se pretende trabajar, a fin de seleccionar el método que más cumpla con las expectativas de capacitación.

    #t_1_6.titulo-segundo
      .h4 1.6 Herramientas de capacitación para productores rurales

    figure.mb-4
      .video
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/PZJfJq_uDbw?list=PLkc5n6npRWkh1DUiFmvAVdvaWFj2p0IZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

    p.mb-4 Las herramientas de capacitación son ayudas o medios didácticos que el facilitador puede emplear para que la información sea transmitida de manera adecuada a los productores. Las herramientas de capacitación facilitan el aprendizaje, ya que permiten que el mensaje que se quiere transmitir estimule los sentidos y el aprendizaje sea significativo. En una sesión de capacitación es recomendable utilizar diversas herramientas que estimulen los diferentes sentidos, esta condición es especialmente útil porque:

    .row.mb-4
      .col-md-1.mb-4.mb-md-0
      .col-md-11.mb-4.mb-md-0.d-flex.align-items-center        
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Cada persona responde a un estilo de aprendizaje (algunos aprenden mejor escuchando la información, otros viendo la forma de hacer algo, a otros les interesa más la práctica, a otros les gusta interactuar exponiendo sus puntos de vista, etc.). Al usar múltiples herramientas aumenta la posibilidad de que la información transmitida sea entendida y apropiada por la mayoría de integrantes del grupo.
          li 
            i.fas.fa-circle
            |	Hace más variadas y agradables las sesiones de capacitación.

    p.mb-4 Algunas herramientas de capacitación son:

    .row.mb-4
      .col-md-1.mb-4.mb-md-0
      .col-md-11.mb-4.mb-md-0.d-flex.align-items-center        
        ul.lista-ul--color
          li 
            i.fas.fa-circle            
            |	Documentos escritos para que el grupo lea y profundice en el tema.
          li 
            i.fas.fa-circle            
            |	Metáforas y analogías.
          li 
            i.fas.fa-circle            
            |	Presentación de videos y películas que estimulen el aprendizaje a través de la visión y el oído.
          li 
            i.fas.fa-circle            
            |	Presentación de dibujos, mapas, gráficos, fotografías.
          li 
            i.fas.fa-circle            
            |	Empleo de la música y habilidades artísticas del grupo (coplas, trovas, versos).
          li 
            i.fas.fa-circle            
            |	Aplicación de juegos que amplíen el marco de referencia del grupo y ofrezcan posibilidades de vivir diferentes experiencias.





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
