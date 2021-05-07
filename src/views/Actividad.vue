<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.cWhite(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-segundo
      .h4 Actividad didáctica 1
    
    .row.mb-5.justify-content-center
      .col-8.col-md-3.mb-4.mb-md-0.TemaColor01.rounded.d-flex.align-items-center
        figure
          img.w-25.mx-auto.m-4(src="@/assets/curso/img14.svg", alt="Actividad didáctica")
      .col-12.col-md-9
        p.mb-4  Afianzar algunos conceptos básicos del tema.
        .tarjeta.tarjeta--morada.p-3
          .row.justify-content-around.align-items-center            
            .col.mb-3.mb-sm-0
              p.fw-bold.mb-0 Actividad 1. Completar los espacios. 
            .col-sm-auto
              a.boton.boton--a(:href="obtenerLink('/actividades/actividad_01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    globalData: global,
  }),
}
</script>
<style lang="sass" scoped></style>
