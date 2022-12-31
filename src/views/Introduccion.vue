<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-5.col-xs-12
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')
      .col-lg-7.col-xs-12
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se reconocen las generalidades de la ciberseguridad, la normativa, las funciones, procesos de gestión y reportes, para que se puedan aplicar en las empresas mediante herramientas de hardware y software; de este modo es necesario estudiar los fundamentos esenciales asociados a eventos e incidentes.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sk9dJtwZtlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: La Ciberseguridad 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
