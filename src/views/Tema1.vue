<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de la Ciberseguridad

    figure
      img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen')

    p.mt-5 Para iniciar con el estudio de este componente formativo, es importante reconocer los aspectos relevantes que enmarcan la ciberseguridad en el entorno empresarial. En este primer tema se abordarán los elementos asociados a la normatividad, las funciones y perfiles del personal encargado de la seguridad digital, los procesos de gestión, reportes de incidentes y documentación respectiva; en primer lugar es necesario reconocer las medidas que debe una empresa adoptar en temas de ciberseguridad.

    p.mt-5 Reconocer los objetivos asociados a la medidas que se deben adoptar para consolidar la ciberseguridad es el comienzo hacía la implementación de un sistema de seguridad digital, algunas medias son:

    .row.mt-5.justify-content-center
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Accesos no autorizados
              p.text-center Evitar los accesos no autorizados a los equipos y a la información
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}")
      
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mt-5 No tocar
              p.text-center Evitar la manipulación de los equipos y de la información por medio de terceros no autorizados
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.png')})`}")
      
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mt-5 No destruir la información
              p.text-center Evitar la destrucción de la información
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img4.png')})`}")
    
    .row.mt-4.justify-content-center
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Prohibido
              p.text-center Evitar los usos indebidos de la información
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img5.png')})`}")
      
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Claves y contraseñas confidenciales
              p.text-center Evitar el suministro de información a personas no autorizadas o claves de accesos a equipos que tengan el control de la red
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img6.png')})`}")

    .row.mt-5.justify-content-center
      .col-10.col-lg-9
        p Cuando las medidas siguen estos objetivos se puede establecer un tratamiento optimizado de los equipos y datos personales desde cualquier perspectiva o naturaleza.

        p En el  desarrollo de las tecnologías, software y algoritmo del sistema de información se presentan unos riesgos que influyen sobre la planificación en la protección de la red y el tratamiento de los datos o sistemas de información, por ejemplo: dentro de la operación de algoritmos se pueden producir sesgos humanos o fallas técnicas en la implementación, sólo a través de estas medidas se podrán controlar y evaluar los riesgos desde la normativa para que no afecten la seguridad de la información y no se vulneren los derechos de los titulares de los datos.

      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Normativa

    .row
      p En Colombia, las normas asociadas a la explotación de datos, protección y denuncia surgen por diferentes necesidades y objetivos, que requieren un alcance que no está directamente relacionado con la aplicabilidad de Big Data. Sin embargo, es importante conocer que existen normas, decretos, leyes que respaldan y protegen la explotación de datos.

    .tarjeta.border.mt-4
      .row.justify-content-center
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')
        .col-10.col-lg-8.justify-content-center.mt-5
          p En el CONPES 3920 - Marco de la Política Nacional de Explotación de datos (2018), el desarrollo de marcos normativos y políticas públicas se adaptan a todos los avances tecnológicos y responden de manera pertinente a los requerimientos de la sociedad; es por ello, que se ha convertido en una necesidad imperiosa el aprovechamiento óptimo y eficiente de los datos, que generan beneficios para todas las entidades cumpliendo con los requisitos de transparencia, divulgación de información y toma de decisiones.
          p Del mismo modo, en el CONPES 3995 (2022) describe la política nacional cuyo objetivo es establecer medidas en búsqueda de ampliar la confianza digital, mejorando la seguridad digital de manera que Colombia se define como sociedad incluyente, además de competitiva en el mundo digital.



    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-6.ms-10
          .cajon.bgr-tarjeta-2.p-4
            .row.justify-content-center
              .col-4.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-10.mt-3
                p Constitución Política de Colombia 1991: Artículo 15 mediante el cual se establece el derecho que tienen las personas a conocer, actualizar y ratificar la información personal.

          .cajon.bgr-tarjeta-2.p-4.mt-3
            .row.justify-content-center
              .col-4.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-10.mt-3
                p Ley 1273 de 2009: Modifica el código penal y crea como bien jurídico tutelado la protección de la información y de los datos.

          .cajon.bgr-tarjeta-2.p-4.mt-3
            .row.justify-content-center
              .col-4.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-10.mt-3
                p Ley 1581 de 2012: Principios y disposiciones que definen los derechos sobre los datos personales y denuncia de las violaciones de seguridad.

          .cajon.bgr-tarjeta-2.p-4.mt-3
            .row.justify-content-center
              .col-4.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-10.mt-3
                p Ley 1266 de 2008: Por medio de la cual se dictan las disposiciones generales de habeas data.

          .cajon.bgr-tarjeta-2.p-4.mt-3
            .row.justify-content-center
              .col-4.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-10.mt-3
                p ⮚	Decreto 1377 de 2012: Reglamentó aspectos relacionados con la titularidad del uso de la información para el tratamiento de sus datos personales.

        .col-10.col-lg-6
          figure
            img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen').img10-tema1

    .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img11.png")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normatividad y marco legal
                  p.text-small Para ampliar la información respecto a la normatividad y marco jurídico asociado a la recolección de datos puede acceder a los documentos anexos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexos_Normatifvidad_Marco_Legal.zip')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-8.ms-10
          .cajon.bgr-tarjeta-3.p-4
            .row.justify-content-center
              .col-6.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
              .col-10.col-lg-9.mt-3
                p La cantidad de datos que las entidades públicas recolectan y/o generan requieren la implementación de una adecuada gestión de la información para asegurar la protección, almacenamiento y acceso de los datos. Para ello es importante que las entidades públicas consideren el diseño e implementación de una arquitectura de almacenamiento de datos, que respalde la confidencialidad, integridad y disponibilidad de éstos.

    .row.justify-content-center
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen').img10-tema1
      .col-10.col-lg-7.mt-5
        p Además de la normativa legal en la empresa se deben establecer unas políticas de usuario que permitan el desarrollo de un sistema de Gestión de Seguridad de la Información, que debe iniciar con la documentación de procesos y conociendo cómo opera la organización, también revisar el manual de funciones de cada empleado cómo paso fundamental para aplicar el ciclo Planear-Hacer-Verificar-Actuar PHVA, y en la acción, para planear es necesario conocer los procesos digitales críticos en la organización, que luego detalladamente se deben analizar para implementar controles que puedan proteger los procesos implementados ante amenazas cibernéticas.

        p En la fase planear es posible detectar las amenazas internas, que parecieran ser externas porque vienen del internet, y que en realidad no son a causa de un ser humano con intenciones maliciosas, sino de los mismos empleados que al no estar capacitados descargan programas que vienen con virus tipo troyanos o sin intención maliciosa que puede mover un directorio o archivo, también se deben revisar las políticas que tengan contempladas el departamento de Tecnologías de la Información (TI) de la organización.

    p.mt-5 Algunas recomendaciones de prevención de amenazas son:

    .row.justify-content-center.align-items-top
      
      .col-lg-10.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Proteger los equipos:")
            .col-12.mb-4.mb-md-0
              p.text-small Mantener actualizado el sistema operativo y el antivirus es fundamental porque corrigen agujeros de seguridad.
          
          .row(numero="2" titulo="Contraseñas fuertes: ")
            .col-12.mb-4.mb-md-0
              p.text-small Números consecutivos, fechas de cumpleaños, nombre de nuestros hijos, equipo de fútbol favorito, son ejemplos de contraseñas poco seguras. Se recomienda usar contraseñas cambiando letras mayúsculas y minúsculas, números y caracteres especiales, ejemplo: AbgDho-9823*#.

          .row(numero="3" titulo="Utilizar protocolos de seguridad:")
            .col-12.mb-4.mb-md-0
              p.text-small Clave de acceso al computador o servidor, generar cuentas de usuario con contraseñas para equipos compartidos, bloquear el equipo cuando no se esté en frente de él, son buenos protocolos de seguridad.

          .row(numero="4" titulo="Evitar dar datos personales:")
            .col-12.mb-4.mb-md-0
              p.text-small Mantener la cautela y desconfianza en redes sociales, no compartir datos con contactos o perfiles sospechosos, no aceptar sugerencias o amigos no conocidos.

          .row(numero="5" titulo="No descargar contenido pirata:")
            .col-12.mb-4.mb-md-0
              p.text-small Descargar música, libros, películas, videos, software de sitios recomendables, siempre tener cuidado de páginas poco conocidas.

          .row(numero="6" titulo="Realizar una copia de seguridad:")
            .col-12.mb-4.mb-md-0
              p.text-small Es importante evitar depender de una sola fuente de información, es recomendable tener copia de respaldo de nuestro equipo en algún disco duro externo o en la nube.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.2  Perfil profesional y funciones

    figure
      img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-10.col-lg-12
        p.mt-5 De acuerdo a las normativas de seguridad de la información ISO/IEC 27001 y la ISO/IEC 27002, a través de la generación de instrumentos e informes para el proceso de auditoría de los SGSI existen dos perfiles de profesionales para la implementación de la normatividad: director de seguridad y profesional de seguridad. A continuación, se describe cada perfil, según las acciones y funciones.

        p Para iniciar con la descripción de perfiles, es necesario conocer las funciones propias del #[b director de seguridad] quien lidera el proceso. Algunas de las acciones son:

    .row.justify-content-center.align-items-top.mt-5
      
      .col-lg-10.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Identificación de procesos y activos")
            .col-12.mb-4.mb-md-0
              p.text-small Junto con cada uno de los departamentos de la organización se identifican los procesos y activos, para determinar cuáles son los de nivel crítico, que al darse un ataque podrían afectar la operación e incluso la continuidad del negocio.
          
          .row(numero="2" titulo="Identificar Amenazas")
            .col-12.mb-4.mb-md-0
              p.text-small Luego de realizar el inventario de activos, se procede a identificar cada una de las amenazas a los que estos están expuestos. Para esto se pueden aplicar metodológicas establecidas como Magerit, octave, cobit, etc.

          .row(numero="3" titulo="Establecer controles de seguridad")
            .col-12.mb-4.mb-md-0
              p.text-small Se definen medidas de seguridad para implementar en la organización y mitigar el riesgo de que las amenazas se materialicen y se genere un incidente informático.

          .row(numero="4" titulo="Priorización en la implementación de controles")
            .col-12.mb-4.mb-md-0
              p.text-small Con base en los objetivos estratégicos, se determina cuáles son las primeras medidas para implementar, categorizando según el tiempo en corto, mediano y largo plazo, ya que no se pueden implementar todas las medidas de inmediato.

          .row(numero="5" titulo="Revisión posterior")
            .col-12.mb-4.mb-md-0
              p.text-small Al terminar la ejecución del plan de seguridad se debe hacer un análisis total de procesos y activos, para determinar las novedades.

    p.mt-5 #[b Profesionales de seguridad informática]

    p Los siguientes perfiles están asociados a los profesionales de seguridad informática, de acuerdo a las funciones se asigna un nombre específico, a continuación la descripción de algunos:

    .row.justify-content-center.align-items-top.mt-5
      .col-lg-8.mb-5.mb-md-0

        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bgr-tarjeta-4")
          .row(titulo="Administrador de seguridad de red")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Encargado de la seguridad del hardware y software de toda la red, elementos como routers, switches, firewalls, IDS, IPS, DNS etc.

          .row(titulo="Jefe de sistemas -CIO")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Principal responsable del área TI , encargado de idear las estrategias tecnológicas de la organización.

          .row(titulo="Administrador de seguridad perimetral ")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Entre sus funciones principales se encuentra manejar los elementos que protegen a los activos críticos de acceso físico no autorizado. Esto a través de elementos como sensores de movimiento, alarmas, dispositivos biométricos, entre otros. 

          .row(titulo="Director de la seguridad de información-CISO ")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Su perfil es a nivel ejecutivo alineando la seguridad de la información con los objetivos estratégicos del negocio. Entre sus funciones están implementar las políticas de seguridad y supervisar la respuesta ante incidentes informáticos.

          .row(titulo="Arquitecto de seguridad")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Aplicar un método para describir la estructura y los procesos de seguridad de la organización, diseñar la arquitectura de seguridad informática, análisis de requerimientos relacionados con la seguridad.

          .row(titulo="Jefe de seguridad - CSO")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Responsable de la seguridad corporativa, se diferencia del CISO porque está más centrado en la seguridad de la información. Mientras que el CSO gestiona los planes de continuidad de negocio, riesgos y las normativas vigentes.

          .row(titulo="Consultor de seguridad y hacking ético")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Puede ser interno o externo, teniendo grandes conocimientos en seguridad ofensiva  y se encarga de realizar test de penetración y pruebas en general para determinar el estado de seguridad informática de los ciberactivos críticos, detectando amenazas y vulnerabilidades que puedan materializarse con el ataque de delincuentes informáticos.

          .row(titulo="Auditor de seguridad de la información")
            .col-12
              .row.justify-content-center
                .col-8.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')
                .col-lg-8.mt-3
                  p Personal con amplios conocimientos en normativas vigentes respecto a la seguridad de la información como por ejemplo ISO27001:2013, el cual realiza una evaluación sobre el cumplimiento del sistema de gestión de seguridad de la información en la organización, levantando no conformidades frente a los objetivos trazados que se estén incumpliendo y sugiriendo la manera de que estos se lleven a cabo de forma exitosa.

    separador  

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.3  Proceso para la gestión de seguridad digital

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img23.png', alt='Texto que describa la imagen')

      .col-10.col-lg-8.mt-5
        p Para implementar un proceso de gestión de seguridad digital, se deben conocer  las buenas prácticas y el concepto de Gestión en Sistemas de Seguridad Informática y de la Información (SGSI), siendo necesario la identificación de las fuentes de riesgos, seleccionar las herramientas para la valoración del riesgo, clasificar el impacto de las amenazas para realizar la gestión que permita proteger la empresa ante las posibles consecuencias, temáticas que se estudiarán en este item. 

        .row.justify-content-around.align-items-center.mt-5.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-12.ms-10
              .cajon.bgr-tarjeta-3.p-4
                .row
                  .col-12
                    p La ciberseguridad ha cobrado importancia en los últimos años; en el tema de calidad de la información se han estandarizado los procesos y en la seguridad informática se han implementado algunos controles y planes.  Con la llegada de la norma ISO 27000 aparecen los conceptos y buenas prácticas de Gestión en Sistemas de Seguridad Informática y de la Información (SGSI), que gracias a las nuevas tecnologías y los sistemas de información se alinean en estándares que hasta el momento habían sido aplicados al análisis de riesgos informáticos y que posteriormente han sido usados para la gestión de riesgos de ciberseguridad.
    
    .row.justify-content-center.mt-5
      .col-12.col-lg-10
        .bloque-texto-g.img24-bgr.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img24(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.png')})`}"
          )
          
          .bloque-texto-g__texto_img24.p-4
            p.mb-0 El concepto clave de un SGSI es el diseño, implantación y mantenimiento de un conjunto de procesos para gestionar eficientemente la accesibilidad de la información y de los equipos que operan en la red, buscando asegurar los activos de información que son el valor más importante en una organización; minimizando a la vez los riesgos de seguridad de la información: Integridad, confidencialidad y disponibilidad.
    
    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='Texto que describa la imagen')

      .col-10.col-lg-6.mt-5
        p La valoración del riesgo asegura que el SGSI logre los efectos previstos, y con las mismas herramientas se puede prevenir o reducir efectos indeseados, logrando la mejora progresiva, integrando e implementando acciones en los procesos del sistema de gestión de la seguridad de la información. Existen empresas en el mundo que ofrecen una gran cantidad de herramientas para la valoración del riesgo como:

        .row.mb-5
          .col-lg-12.order-2.order-lg-1
            .tarjeta.clr--gris.p-4
              ul.lista-ul.mb-0
                li
                  i.fas.fa-angle-right.txt--orange-2
                  | SpiraPlan de inflectra
                li
                  i.fas.fa-angle-right.txt--orange-2
                  | Rastreados a 1
                li
                  i.fas.fa-angle-right.txt--orange-2
                  | IsoMetriz   
                li
                  i.fas.fa-angle-right.txt--orange-2
                  | Entre otras  

    p En la identificación de riesgos se debe recordar que la inseguridad se enuncia en procesos de la composición de los resultados de un suceso y la probabilidad de ocurrencia asociada.  

    SlyderB.mt-5.mb-5(:datos="datosSlyder")   

    h2.text-center EL SGSI y la gestión del riesgo
    p.text-center Guía Icontec internacional educación

    ImagenInfografica.mt-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen').width-img30

      .tarjeta.color-primario.p-3(x="35%" y="15%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Mantener y mejorar el proceso de gestión del riesgo
        

      .tarjeta.color-primario.p-3(x="63%" y="15%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Establecer el contexto
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Evaluar el riesgo
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Planificar el tratamiento
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Aceptación

      .tarjeta.color-primario.p-3(x="63%" y="84%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Implementar el plan de tratamiento del riesgo

      .tarjeta.color-primario.p-3(x="35%" y="84%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Implementar el plan de tratamiento del riesgo

    ImagenInfografica.mt-5.d-block.d-md-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen').width-img30

      .tarjeta.color-primario.p-3(x="19%" y="15%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Mantener y mejorar el proceso de gestión del riesgo
        

      .tarjeta.color-primario.p-3(x="80%" y="15%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Establecer el contexto
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Evaluar el riesgo
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Planificar el tratamiento
        br
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Aceptación

      .tarjeta.color-primario.p-3(x="81%" y="84%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Implementar el plan de tratamiento del riesgo

      .tarjeta.color-primario.p-3(x="19%" y="84%" numero="")
        <i class="fas fa-angle-right" STYLE="Color: orange"></i> Implementar el plan de tratamiento del riesgo

    .row.justify-content-center
      .col-11
        .tarjeta.tarjeta--gris.p-3.mt-3
          p.text-center.mt-3 El SGSI y la gestión del riesgo-Guía Icontec internacional de educación. Fuente: Guía de Gestión de riesgos de seguridad de la información, 2021


    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.4  Documentación y reporte de procesos

    p Para iniciar con el estudio de este tema, se realiza un recorrido en línea de tiempo sobre la evolución de la tecnología para luego describir las partes que componen el documento con la información y los reportes de procesos. 

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video 

    p.mt-5 El documento con la información y los reportes de procesos se divide en las siguientes partes:


    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/temas/tema1/img31.png')")
        .row
          .col-md-6
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Portada.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Resumen.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Índice.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Glosario de signos, símbolos, unidades, abreviaturas, términos técnicos.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Prefacio.
          .row.justify-content-center.mt-5
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/temas/tema1/img32.png')")
        .row
          .col-md-6
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Introducción.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Núcleo del informe con tablas, imágenes y demás material complementarios.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Conclusiones y recomendaciones.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Agradecimientos.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Listas de referencia.
          .row.justify-content-center.mt-5
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/temas/tema1/img33.png')")
        .row
          .col-md-6
              p Los anexos se consideran separadamente de la parte final, porque, aunque en muchas ocasiones no se requiere, en otras, forman parte esencial y complemento de información de algunos informes. Se usan para presentar material que complementa el texto, éstos pueden ser: tablas, imágenes, material especial, bibliografía, descripción de equipos, software, etc.
          .row.justify-content-center.mt-5
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/temas/tema1/img34.png')")
        .row
          .col-md-6
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Hojas de datos del documento.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Lista de distribución y disponibilidad.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Cubierta posterior, si se requiere.
          .row.justify-content-center.mt-5
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Las fuentes de riesgos pueden ser:<br><br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Legales<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Comportamiento humano (interno y externo)<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Comerciales<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Economía y mercado.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Circunstancias políticas.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Tecnología<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Eventos naturales.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Organizacionales',
        imagen: require('@/assets/curso/temas/tema1/img26.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'En la gestión del riesgo de ciberseguridad se debe proteger la empresa ante las posibles consecuencias, como:<br><br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Pérdidas de confidencialidad.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Integridad.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Disponibilidad.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>No-repudio.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Autenticidad.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Confiablidad de los activos.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Incumplimiento de la legislación.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Pérdidas financieras.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Impacto de orden público.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i>Impacto de orden internacional.',
        imagen: require('@/assets/curso/temas/tema1/img27.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Es importante el impacto luego de conocer el estado real de seguridad de un activo antes y después de materializar las amenazas. En un SGSI, al concretarse una amenaza, el activo cambia de estado, es decir, antes de producirse la amenaza se tiene un valor al activo y después que se efectúe la amenaza se tiene la diferencia entre el estado anterior y el posterior a la amenaza.',
        imagen: require('@/assets/curso/temas/tema1/img28.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Clasificación según el tipo de impacto como:<br><br><i class="fas fa-chevron-right" STYLE="Color: orange"></i> Extremo.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i> Importante.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i> Moderado.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i> Menor.<br><i class="fas fa-chevron-right" STYLE="Color: orange"></i> Incidental.<br><br>Cada clasificación se puede crear o diseñar dependiendo del tamaño de la organización y el valor podría darse en un rango de 0 a 5.',
        imagen: require('@/assets/curso/temas/tema1/img29.png'),
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
