<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    .titulo-sexto.color-acento-botones
      h2 Técnico en Control de la Seguridad Digital 
      p Síntesis: Ciberseguridad, Generalidades y aplicaciones
    
    .row.mt-5
      p Como refuerzo se presenta a continuación la síntesis del componente formativo de una forma gráfica, así podrá repasar las diferentes temáticas tratadas en el componente.

    .row.justify-content-center
      .col-lg-10.mb-5.mt-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF_05_CONTROL_SEGURIDAD_DIGITAL.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
