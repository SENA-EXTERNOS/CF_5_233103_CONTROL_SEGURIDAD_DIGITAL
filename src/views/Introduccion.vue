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
        p Bienvenido al programa Técnico en Control de la Seguridad Digital, con este programa el Servicio Nacional de Aprendizaje SENA, busca capacitar a personas en el área de las tecnologías de la información, específicamente en uno de los ámbitos que actualmente tiene más relevancia en el sector, y que presenta una gran demanda de personal técnico y profesional altamente competente, el área de la seguridad informática.

        p En este componente formativo se reconocen las generalidades de la ciberseguridad, la normativa, las funciones, procesos de gestión y reportes, para que se puedan aplicar en las empresas mediante herramientas de hardware y software; de este modo es necesario estudiar los fundamentos esenciales asociados a eventos e incidentes. En el siguiente video se presenta la temática a tratar y el perfil profesional de un egresado de este programa de formación.
    
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
