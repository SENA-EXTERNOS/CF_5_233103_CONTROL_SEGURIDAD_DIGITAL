<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicación de Ciberseguridad

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen').img10-tema1

      .col-10.col-lg-8.mt-5
        p En la implementación de la ciberseguridad en la organización son necesarias herramientas de #[i hardware] y #[i software], además de cumplir con las directrices de las políticas y normas establecidas para efectos de seguridad de la información, en pro de la accesibilidad y perdurabilidad de la información digital. Para el desarrollo de este tema se presenta un ejemplo de #[i software] malicioso, una lista de recomendaciones de cómo protegerse contra el #[i malware] y cómo realizar el registro de eventos e incidentes, le invito a explorar el contenido a continuación.  

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-12.ms-10
              .cajon.bgr-tarjeta-3.p-4
                .row
                  .col-12
                    p De acuerdo a los nuevos requerimientos de la administración pública derivados de la Ley de Transparencia, Ley de Protección de Datos y Ley General de Archivos, nace la necesidad de crear una directriz que permita a las entidades garantizar la accesibilidad y perdurabilidad de la información digital. De este modo, se genera el uso de diversos formatos, medios, equipos de almacenamiento digital y surgen nuevas formas de buscar y analizar la información.

                    p En la actualidad, la mayor parte de la información reside en servidores, redes de información y almacenamientos como nube, discos extraíbles, #[i Backups], enmarcados dentro de lo que se conoce como sistemas de información. Estos sistemas de información están sujetos a vulnerabilidades, ataques informáticos, riesgos e inseguridades dentro de la propia organización como desde fuera.

    p Ejemplo de #[i software] malicioso

    SlyderB.mb-5(:datos="datosSlyder2")

    .row.mt-5
      p Cómo protegerse contra el #[i malware]

    ImagenInfografica.mt-5.mb-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').tarjeta-tema2

      .tarjeta.color-primario.p-3(x="56%" y="15%" numero="")
        .row.justify-content-center
          .col-10.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center No confiar en correos de remitentes no conocidos.

      .tarjeta.color-primario.p-3(x="64%" y="36%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Ejecutar archivos adjuntos de correos electrónicos no deseados.

      .tarjeta.color-primario.p-3(x="64%" y="66%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Mantener actualizado el antivirus.

      .tarjeta.color-primario.p-3(x="56%" y="87%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center No navegar por páginas poco confiables.

      .tarjeta.color-primario.p-3(x="44%" y="87%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Descargar los programas que serán instalados en el computador de sitios confiables.

      .tarjeta.color-primario.p-3(x="36%" y="64%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Mantener actualizadas las bases de datos y las mejoras del sistema operativo.
    
    ImagenInfografica.mt-5.mb-5.d-block.d-md-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').tarjeta-tema2

      .tarjeta.color-primario.p-3(x="63%" y="14%" numero="")
        .row.justify-content-center
          .col-10.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center No confiar en correos de remitentes no conocidos.

      .tarjeta.color-primario.p-3(x="80%" y="36%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Ejecutar archivos adjuntos de correos electrónicos no deseados.

      .tarjeta.color-primario.p-3(x="80%" y="66%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Mantener actualizado el antivirus.

      .tarjeta.color-primario.p-3(x="63%" y="87%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center No navegar por páginas poco confiables.

      .tarjeta.color-primario.p-3(x="40%" y="87%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Descargar los programas que serán instalados en el computador de sitios confiables.

      .tarjeta.color-primario.p-3(x="24%" y="66%" numero="")
        .row.justify-content-center
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen').img-tarjeta-tema2

            p.text-center Mantener actualizadas las bases de datos y las mejoras del sistema operativo.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.1  Herramientas de #[i hardware] y #[i software]


    .row.justify-content-center.mt-5
      .col-10.col-lg-8
        p Para prevenir estos ataques informáticos se hace necesario el uso de una poderosa infraestructura de TI que ayude a detectar y frenar amenazas. En este ítem se describen algunos elementos que son parte de la infraestructura de TI para detectar y frenar amenaza.
        p.mt-5 La seguridad informática y la seguridad de la información están encargadas de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos. Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta, se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información. Mediante la norma ISO 27001, la implementación del SGSI sigue el modelo Planificar – Hacer – Verificar – Actuar, para la mejora continua de los procesos.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p Sin embargo, la seguridad para las empresas es un tema cada vez más crítico y de preocupación constante, debido a que los ciberataques pueden ser tan catastróficos como un robo, explosión o un incendio..
      p.mt-4 Algunos elementos que son parte de la infraestructura de TI para detectar y frenar amenazas son:

    
    SlyderB.mb-5.mt-5(:datos="datosSlyder3")

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.2  Eventos e incidentes

    .row
      p Para finalizar el tema de estudio en este componente, es necesario definir los eventos e incidentes que permiten documentar los diferentes casos asociados a riesgos, amenazas detectadas o daños causados en el sistema de información de la empresa, cómo se describe a continuación. 

    .tarjeta.border.mt-4
      .row.justify-content-center
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')
        .col-10.col-lg-8.justify-content-center.mt-5
          p Las normas y los sistemas de gestión relacionan la “gestión de incidencias” como medida a las interrupciones que se puedan presentar en los procesos de negocio; los términos más utilizados son los #[b eventos y los incidentes].
          p Por evento se entiende como un cambio que no genera resultados negativos, es decir, el evento no trae implicaciones negativas, de este modo, puede ser usado como una expresión neutral, por el contrario, el incidente si representa resultados negativos, y pueden verse como las interrupciones o desmejoramiento en la calidad de los servicios prestados a los usuarios. Los incidentes deben atenderse mediante la estructura de gestión de incidencias.

    .row.mt-5
      p Según la norma ISO 27001 el incidente genera un impacto de las operaciones de la seguridad de la información, según el nivel de afectación se pueden clasificar los incidentes según el impacto generado como:
    

    .row.mt-4.justify-content-center.mb-5
      .col-7.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-center.mt-5 Confidencial:
              p.text-center.mt-3.mb-5 Reserva de la información. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img19.png')})`}")

      .col-7.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-center.mt-5 Integridad:
              p.text-center.mt-3.mb-5 Información completa sin alteraciones.

      .col-7.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img21.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3.text-center.mt-5 Disponibilidad:
              p.text-center.mt-3 Garantizar el acceso a las personas con los permisos o credenciales requeridas.


    .row
      .col-lg-2
      .col-lg-8
        .cajon.bgr-tarjeta-2.p-4.mt-3
          .row.justify-content-center
            .col-lg-12
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.
        
      .col-lg-2
    
          
    

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder2: [
      {
        texto:
          'Un ejemplo claro es el <i>software</i> malicioso más conocido como “<i>malware</i>”, éste es un <i>software</i> diseñado por un tercero con la única finalidad de obtener acceso no autorizado a un equipo para robar información o simplemente dañarlo. En la actualidad existen diferentes tipos de <i>malware</i>: <i>spyware</i>, registradores de pulsaciones, virus, gusanos, etc.',
        imagen: require('@/assets/curso/temas/tema2/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La creación de <i>malware</i> cada vez aumenta más, esto se debe a que se crean nuevos tipos de <i>malware</i> a diario por el uso activo de los usuarios de las redes que son vulnerables a los ataques cibernéticos. Inicialmente, el <i>malware</i> se creó a manera de entretenimiento, pero luego evolucionó al vandalismo y destrucción de equipos. Hoy en día, la mayoría de <i>malware</i> son creados para ganar dinero mediante extorsión (<i>ransomware</i>), publicidad forzada (publicidad no deseada), difusión de spam o pornografía por correo electrónico (equipos zombis), robo de información confidencial (<i>spyware</i>).',
        imagen: require('@/assets/curso/temas/tema2/img3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Diversos factores pueden hacer que un equipo sea más vulnerable a ataques de <i>malware</i>, como equipos de trabajo sin la licencia de un antivirus confiable, desactualización de base de datos de antivirus y sistemas operativos, defectos en el diseño del sistema operativo, equipos conectados a una red que estén ejecutando el mismo sistema operativo, etc.',
        imagen: require('@/assets/curso/temas/tema2/img4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder3: [
      {
        texto:
          '<b><i>Software</i> antivirus</b><br><br>En cualquier caso, todos los computadores que estén conectados a una red interna o internet, deben contar con un antivirus gratuito o pago pero que sea confiable. Estos programas permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuesto a <i>software</i> malicioso o cualquier otro tipo de <i>malware</i>; Estos programas ofrecen la oportunidad de eliminarlo por completo o poner en estado de cuarentena.<br><br>Kaspersky, Avast, Nod32, McAfee, son algunas de las posibilidades que se pueden encontrar en el mercado actual, lo más importante es que cualquier solución de antivirus en la que el usuario quiera confiar, debe tener la certeza que se adapte a las necesidades de seguridad y cuentan con actualizaciones constantes, debido a que los <i>malware</i> están en continua evolución.',
        imagen: require('@/assets/curso/temas/tema2/img13.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Firewall perimetral de red</b><br><br>Como su nombre lo indica, hace la función de una pared de bloqueo. Es un sistema cuya función es prevenir y proteger la privada de ataques de otras redes. Su funcionamiento es sencillo: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.',
        imagen: require('@/assets/curso/temas/tema2/img14.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Servidor proxy</b><br><br>Un proxy es un es un servidor, puede ser un programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e internet, filtrando todos los paquetes entre ambos. Así mismo, establece un sistema de autentificación, que limita el acceso a la red externa, por lo cual, se puede generar los registros sobre sitios, visitas, y demás datos de navegación.',
        imagen: require('@/assets/curso/temas/tema2/img15.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Cifrado de punto final o end point disk encryption</b><br><br>Contiene el proceso para codificación de datos, de tal forma que no puedan ser leídos por agentes externos que no cuenten con la clave para decodificarlos. Es decir, genera protección de los sistemas operativos ante cualquier instalación o ejecución de agentes corruptos, logrando bloquear todos los archivos almacenados en el servidor, o cualquier otro punto final.',
        imagen: require('@/assets/curso/temas/tema2/img16.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Escáner de vulnerabilidades</b><br><br>Es un <i>software</i> que detecta puntos frágiles en los sistemas informáticos de las empresas, con el objetivo de analizarlos y gestionarlos, dando respuesta oportuna a cualquier evento desafortunado. Con este sistema se puede controlar las amenazas y consecuencias en los activos digitales, además de generar alertas en tiempo real, ayudando a solucionar incidentes sin que se llegue a comprometer el normal desarrollo de los procesos en las empresas.',
        imagen: require('@/assets/curso/temas/tema2/img17.svg'),
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
