<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las redes sociales ofrecen espacios para dar a conocer marcas, productos y servicios, así como para establecer contacto con públicos específicos. Para aprovecharlas con un propósito promocional, es necesario definir objetivos claros, seleccionar las audiencias pertinentes y adaptar los mensajes y formatos a cada plataforma. Estas decisiones orientan la campaña y permiten relacionar sus resultados con lo que se esperaba lograr.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          p El seguimiento de una acción promocional requiere analizar métricas como el alcance, las interacciones, las visitas al perfil, los clics, los mensajes y los registros. Cada indicador aporta información distinta: una publicación puede llegar a muchas personas sin generar contactos, mientras que otra, con menor alcance, puede atraer usuarios interesados en la oferta. Por ello, los datos deben interpretarse según el objetivo de la campaña y la calidad de las respuestas obtenidas.
          .caja-1(data-aos="fade-left")
            p.mb-0 Este documento aborda la evaluación de acciones promocionales mediante la selección de métricas, la comparación entre resultados esperados y obtenidos, y la formulación de recomendaciones para futuras campañas. También presenta un ejemplo con publicaciones de Instagram, Facebook y TikTok para aplicar estos criterios. Con ello, se busca facilitar decisiones fundamentadas que mejoren los mensajes, la experiencia del usuario y el uso de los recursos disponibles.

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
