<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Pauta digital y campañas promocionadas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b pauta digital] consiste en invertir recursos publicitarios para distribuir anuncios o contenidos entre audiencias seleccionadas. Permite llegar a personas que no siguen la cuenta de una marca y controlar aspectos de la campaña, como el presupuesto, el periodo de circulación y los espacios de publicación.
          .caja-1(data-aos="fade-right")
            p.mb-0 Una #[b campaña promocionada] organiza esa inversión alrededor de un objetivo. Puede partir de una publicación existente o de una pieza creada para la campaña. En ambos casos, la elección del contenido y su configuración deben responder al resultado que se espera obtener.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Características de la pauta digital
      p.mb-5 Frente a la difusión orgánica, la pauta ofrece posibilidades de configuración y seguimiento que ayudan a administrar la inversión:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Segmentación
                  p.mb-0.text-center Permite seleccionar audiencias según características relacionadas con la oferta, para dirigir la campaña a personas con mayor probabilidad de interés.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Medición
                  p.mb-0.text-center Facilita el seguimiento de resultados como alcance, clics, interacciones, mensajes o registros, de acuerdo con el objetivo de la campaña.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Flexibilidad
                  p.mb-0.text-center Permite ajustar la audiencia, el presupuesto, la duración o el contenido durante la campaña, a partir de los resultados obtenidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Adaptación
                  p.mb-0.text-center Permite aplicar la acción promocional en distintas plataformas, formatos y espacios de publicación, según el público y el propósito definidos.
      .caja-2(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Estas posibilidades facilitan la toma de decisiones, pero la inversión por sí sola no garantiza una respuesta favorable. El anuncio debe comunicar con claridad la oferta y llegar a una audiencia pertinente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Elementos básicos de una campaña promocionada
      p.mb-5 Cada elemento cumple una función en la configuración de la campaña. La siguiente organización permite relacionar las decisiones publicitarias con su aplicación:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img8.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el resultado principal que se busca alcanzar, como reconocimiento, interacción, tráfico, mensajes, captación de clientes potenciales o conversiones. Orienta las demás decisiones de configuración.
            .row(titulo="Audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica a las personas a quienes se dirigirá el anuncio. Puede seleccionarse según ubicación, características demográficas, intereses, comportamientos o relación previa con la marca.
            .row(titulo="Contenido promocional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la pieza que recibirá la audiencia: una imagen, un video, un carrusel, una historia, un #[i reel], un formulario o una publicación existente. Debe comunicar el mensaje con claridad y adecuarse al formato elegido.
            .row(titulo="Presupuesto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece cuánto se invertirá. Puede fijarse como presupuesto diario o total y debe guardar relación con la duración, la audiencia y el resultado esperado.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Duración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina las fechas o los días durante los cuales circulará el anuncio. Una oferta puntual puede requerir un periodo breve; una campaña de reconocimiento puede necesitar más tiempo.
            .row(titulo="Ubicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define los espacios donde aparecerá el anuncio, como la sección de publicaciones, historias, reels, videos, mensajes u otras ubicaciones disponibles en la plataforma. La pieza debe adaptarse al espacio seleccionado.
            .row(titulo="Llamado a la acción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica al usuario qué hacer después de recibir el mensaje: escribir, visitar un enlace, registrarse, reservar o comprar. Debe conducir a una acción coherente con el objetivo.
            .row(titulo="Resultado esperado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Precisa la respuesta con la que se evaluará la campaña, como alcance, interacciones, clics, mensajes, registros o conversiones. Permite comparar lo obtenido con lo planeado.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img9.png", alt="" style="width: 300px").m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p Antes de activar la campaña, es necesario comprobar que el anuncio y la experiencia posterior coincidan. Si la pieza invita a consultar una oferta, el enlace debe conducir a ella; si propone un registro, el formulario debe funcionar; y, si solicita un mensaje, el canal de contacto debe estar disponible.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Relación entre la pauta y los objetivos publicitarios
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 A continuación, se presenta un video  que explica cómo los objetivos de una campaña publicitaria orientan la inversión, la distribución del presupuesto, la duración y la selección de métricas, destacando la importancia de evaluar los resultados de acuerdo con el propósito definido para cada campaña.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Objetivos y evaluación de campañas publicitarias

</template>

<script>
export default {
  name: 'Tema2',
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
