<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      .video
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/Fbnhf0Sau3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
        
    p.mb-5 El proceso de implementación en Buenas Prácticas Agrícolas BPA en las unidades productivas o producciones agrícolas tiene por objetivo mejorar los diferentes procesos desde la producción hasta la comercialización, fomentando una agricultura limpia y sostenible, buscando el beneficio tanto del productor como el de su entorno. Es importante recordar que las Buenas Prácticas Agrícolas BPA son una herramienta para cumplir con éxito las condiciones actuales del mercado, buscando hacer las cosas bien, dando garantía de ello.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
