<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Seguimiento y control

    .row.mb-5.justify-content-center      
      .col-md-7.d-flex.align-items-center
        p.mb-4 En la implementación de 
          strong Buenas Prácticas Agrícolas 
          | se deben adelantar diferentes actividades que permitan establecer el grado de cumplimiento frente a los requisitos según la normatividad vigente; para ello, es importante realizar el seguimiento y control de lo establecido en el plan de implementación en cada producción agrícola o unidad productiva.  
          br 
          br
          | El seguimiento y control consiste, entonces, en un conjunto de acciones que se llevan a cabo para la validación en cuanto a la realización de las actividades establecidas en el plan de implementación y su cronograma. El propósito principal es el de proporcionar una claridad frente al proceso de ejecución y progreso de la implementación de las BPA en la producción agrícola, que permitan tomar acciones correctivas cuando se desvíe significativamente el plan de implementación.            
      .col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema2/img01.svg", alt="Definición")
    

    #t_2_1.titulo-segundo
      .h4 2.1. Visita de inspección interna
    
    p.mb-4 Es aquella visita donde se evalúan y verifican los procesos y actividades que se han realizado respecto al plan de implementación de BPA en la producción o unidad productiva. Se busca evidenciar el cumplimiento de dichas actividades y lograr identificar las causas del incumplimiento, para así formular acciones y ser registradas en un formato de acciones correctivas y realizar el seguimiento.  
    
    .cajon--azul.p-4.mb-4
      .row
        .col-1
        .col-10
          p A través de esta visita de inspección interna se hace el seguimiento del alcance, planificación y riesgos de la producción agrícola frente al plan de la implementación de BPA. Además, permite en casos que sea necesario, comunicar modificaciones de las actividades que permitan cumplir con los requisitos de la normatividad vigente.
        .col-1      

    .row.mb-5                
      .col-md-5
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Visitas de asesoramiento')
      .col-md-7.mb-4.mb-md-0.d-flex.align-items-center              
        div
          .titulo-segundo
            .h4 Objetivo        
          
          p.mb-4 A través de la inspección interna se analizan y evalúan los riesgos, con el fin de determinar las condiciones que permiten la implementación del Plan de Buenas Prácticas Agrícolas de acuerdo con los objetivos, procesos y actividades planteadas. 
            br
            br
            | En la inspección interna, el técnico o inspector debe diligenciar la lista de verificación e incluir observaciones y justificaciones en todos los niveles (fundamental, mayor o menor) que corresponda al resultado de No cumple (NC) o No aplica (NA). También, se debe realizar el informe de inspección que incluya la documentación de No conformidades halladas y diligenciamiento de formatos de registro de acciones correctivas. 

    
    .titulo-segundo
      .h4 Áreas a evaluar

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
        
    p.mb-4 Para evaluar el cumplimiento de las condiciones exigidas a la producción o unidad productiva con respecto a los requisitos establecidos se utilizará una lista de chequeo según la normatividad vigente, en la cual se incluyen las siguientes áreas: 

    .row.mb-5
      .col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Áreas e instalaciones")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2
              p Debidamente identificadas y señaladas:                                
              br
              ul.lista-ul
                li 
                  i.lista-ul__vineta Áreas de instalaciones sanitarias. 
                li 
                  i.lista-ul__vineta Área para almacenamiento de insumos agrícolas. 
                li 
                  i.lista-ul__vineta Área de dosificación y preparación de mezclas. 
                li 
                  i.lista-ul__vineta Área de almacenamiento de equipos, utensilios y herramientas. 
                li 
                  i.lista-ul__vineta Área de acopio transitorio de productos cosechados. 
                li 
                  i.lista-ul__vineta Área destinada al bienestar de los trabajadores.                 
            .col-1.mb-4.mb-md-0
          .row(titulo="Equipos, utensilios y herramientas")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2              
              p Deben ser mantenidos en buenas condiciones de operación, limpieza y desinfección en todas y cada una de las labores, desde la producción hasta los procesos de postcosecha.
            .col-1.mb-4.mb-md-0
          .row(titulo="Componente ambiental")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2              
              p Donde se identifican los recursos asociados a suelos y fuentes de agua directamente relacionados con la productividad y calidad de las cosechas. 
              br 
              ul.lista-ul
                li 
                  i.lista-ul__vineta Agua.
                li 
                  i.lista-ul__vineta Manejo de residuos sólidos y líquidos.                
            .col-1.mb-4.mb-md-0
          .row(titulo="Manejo de protección de suelos")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2              
              p Plan de prácticas que permita la conservación de los suelos y aporte a la prevención de su erosión a través de coberturas, rotación de cultivos, entre otras. 
            .col-1.mb-4.mb-md-0
                        
      .col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Material de propagación")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2            
              p Se puede obtener de la producción de su propia finca o adquirirlo en viveros certificados. 
            .col-1.mb-4.mb-md-0
          .row(titulo="Nutrición de plantas")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2            
              p De acuerdo con los resultados del análisis de suelo y los requerimientos nutricionales de los cultivos establecidos, se debe enfocar el plan de fertilización.
            .col-1.mb-4.mb-md-0
          .row(titulo="Protección de cultivo")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2            
              p Se debe tener con un plan de manejo integrado de plagas, en el que se priorice el uso de los diferentes métodos de control para las plagas que se presenten.
            .col-1.mb-4.mb-md-0
          .row(titulo="Personal")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2            
              p De acuerdo con el desempeño de los trabajadores y las condiciones de trabajo que deben suministrarse, además del plan de capacitación.
            .col-1.mb-4.mb-md-0
          .row(titulo="Trazabilidad")
            .col-1.mb-4.mb-md-0
            .col-10.mb-4.mb-md-0.ms-2            
              p Contar con la trazabilidad del proceso de la producción que permite identificar en la cadena de suministro todas y cada una de las características a través de los registros.
            .col-1.mb-4.mb-md-0
            
    .titulo-segundo
      .h4 Presentación de resultados
    
    p.mb-4 Finalizadas las etapas de seguimiento, control, inspección interna y establecidas las acciones correctivas para el plan de implementación de BPA en la producción agrícola se procede a presentar al productor o grupo de productores los hallazgos encontrados, con el fin de establecer las acciones correctivas, antes de la solicitud de la inspección externa por parte del ente competente o certificador acreditado. Además, también se dan a conocer los registros, formatos, documentos que se presentarán en el momento de la visita por el organismo certificador.  
      br
      br
      | Dentro de la documentación que se debe contar se encuentra la siguiente: 

    .row
      .col-1
      .col-md-5.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema2/img03.svg' alt='Diligenciamiento')
          .tarjeta.tarjeta--morada.p-4            
            p.mx-4 Diligenciamiento y envío del formulario para el organismo certificador en el que se consignan los datos de la unidad o productos a certificar.

      .col-md-5.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema2/img04.svg' alt='Registro del productor')
          .tarjeta.tarjeta--morada.p-4            
            p.mx-4 Registro del productor por parte del organismo certificador en la base de datos del ente regulador del protocolo.
      .col-1
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
