<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicación de Ciberseguridad

    .row.justify-content-center.align-items-center.mb-4
      .col-4
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen').img10-tema1

      .col-8.mt-5
        p En la implementación de la ciberseguridad en la organización son necesarias herramientas de hardware y software, además de cumplir con las directrices de las políticas y normas establecidas para efectos de seguridad de la información, en pro de la accesibilidad y perdurabilidad de la información digital. Para el desarrollo de este tema se presenta un ejemplo de software malicioso, una lista de recomendaciones de cómo protegerse contra el malware y cómo realizar el registro de eventos e incidentes, le invito a explorar el contenido a continuación.  

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-12.ms-10
              .cajon.bgr-tarjeta-3.p-4
                .row
                  .col-12
                    p De acuerdo a los nuevos requerimientos de la administración pública derivados de la Ley de Transparencia, Ley de Protección de Datos y Ley General de Archivos, nace la necesidad de crear una directriz que permita a las entidades garantizar la accesibilidad y perdurabilidad de la información digital. De este modo, se genera el uso de diversos formatos, medios, equipos de almacenamiento digital y surgen nuevas formas de buscar y analizar la información.

                    p En la actualidad, la mayor parte de la información reside en servidores, redes de información y almacenamientos como nube, discos extraíbles, Backups, enmarcados dentro de lo que se conoce como sistemas de información. Estos sistemas de información están sujetos a vulnerabilidades, ataques informáticos, riesgos e inseguridades dentro de la propia organización como desde fuera.

    p Ejemplo de software malicioso

    SlyderB.mb-5(:datos="datosSlyder2")


</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder2: [
      {
        texto:
          'Un ejemplo claro es el software malicioso más conocido como “malware”, éste es un software diseñado por un tercero con la única finalidad de obtener acceso no autorizado a un equipo para robar información o simplemente dañarlo. En la actualidad existen diferentes tipos de malware: spyware, registradores de pulsaciones, virus, gusanos, etc.',
        imagen: require('@/assets/curso/temas/tema2/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La creación de malware cada vez aumenta más, esto se debe a que se crean nuevos tipos de malware a diario por el uso activo de los usuarios de las redes que son vulnerables a los ataques cibernéticos. Inicialmente, el malware se creó a manera de entretenimiento, pero luego evolucionó al vandalismo y destrucción de equipos. Hoy en día, la mayoría de malware son creados para ganar dinero mediante extorsión (ransomware), publicidad forzada (publicidad no deseada), difusión de spam o pornografía por correo electrónico (equipos zombis), robo de información confidencial (spyware).',
        imagen: require('@/assets/curso/temas/tema2/img3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Diversos factores pueden hacer que un equipo sea más vulnerable a ataques de malware, como equipos de trabajo sin la licencia de un antivirus confiable, desactualización de base de datos de antivirus y sistemas operativos, defectos en el diseño del sistema operativo, equipos conectados a una red que estén ejecutando el mismo sistema operativo, etc.',
        imagen: require('@/assets/curso/temas/tema2/img4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
