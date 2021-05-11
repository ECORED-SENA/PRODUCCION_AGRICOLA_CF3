<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.cWhite(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-segundo.mb-5
      .h4 Actividad didáctica 1
    
    .row.mb-5.justify-content-center
      .col-3.col-md-3.mb-4.mb-md-0.TemaColor01.rounded
        figure
          img.w-100(src="@/assets/curso/actividad1/img01.svg", alt="Actividad didáctica")
      .col-9.col-md-9
        .row
          p  Afianzar algunos conceptos básicos del tema.
        .row.d-flex.h-100.align-items-end.pb-4
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
