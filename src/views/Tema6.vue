<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Pruebas publicitarias y comparación de anuncios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las #[b pruebas publicitarias] permiten comparar versiones de un anuncio para identificar cuál responde mejor al objetivo de campaña. Su utilidad está en contrastar la respuesta real de la audiencia con la decisión que motivó cada versión.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Una prueba puede centrarse en el público, el formato, el mensaje, la oferta, la ubicación o el llamado a la acción. Para que la comparación sea interpretable, se modifica #[b una variable principal] y se mantienen las demás condiciones lo más similares posible.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.png', alt='' style="width: 500px").m-auto
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Preparación de una prueba publicitaria
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b prueba A/B] compara dos versiones que se diferencian en un elemento. Por ejemplo, ambos anuncios pueden conservar la misma imagen, audiencia y presupuesto, pero utilizar llamados a la acción distintos. Si cambian al mismo tiempo el diseño, el texto y el público, no será posible atribuir la diferencia de resultados a uno de ellos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Una prueba organizada sigue esta secuencia:
          .caja-1(data-aos="fade-right")
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span a
                | 
                p.mb-0 Formular una pregunta concreta, como «¿qué mensaje genera más solicitudes de información?». 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | 
                p.mb-0 Seleccionar la variable que se comparará y crear las versiones. 
              li 
                .lista-ol--cuadro__vineta
                  span c
                | 
                p.mb-0 Mantener condiciones similares de presupuesto, duración y demás elementos. 
              li
                .lista-ol--cuadro__vineta
                  span d
                | 
                p.mb-0 Definir una métrica principal relacionada con el objetivo. 
              li.mb-0
                .lista-ol--cuadro__vineta
                  span e
                | 
                p.mb-0 Registrar los resultados de cada versión y analizar la diferencia.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img3.png', alt='' style="width: 480px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La duración debe permitir obtener información útil para la comparación. También conviene registrar el contexto de circulación, pues una oferta, un evento o una temporada pueden influir en la respuesta de la audiencia.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Elementos que pueden compararse
      p.mb-5 Cada prueba debe responder a una pregunta específica. Los siguientes ejemplos relacionan el elemento modificado con una comparación posible:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Audiencia
                  p.mb-0 Se dirige el mismo anuncio a dos públicos distintos, por ejemplo, personas nuevas y usuarios que ya interactuaron con la marca. La comparación ayuda a identificar cuál responde mejor a la oferta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formato
                  p.mb-0 Se contrasta una imagen con un video, un carrusel u otra pieza adecuada para la plataforma. La métrica elegida debe corresponder al objetivo, como clics para tráfico o interacciones para participación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mensaje
                  p.mb-0 Se mantienen la oferta y los demás elementos, pero cambia el argumento principal. En la promoción de un curso, por ejemplo, una versión puede centrarse en lo que se aprenderá y otra en su aplicación laboral.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Llamado a la acción
                  p.mb-0 Se comparan instrucciones como «Escríbenos» y «Solicita información», manteniendo el resto de la pieza. La respuesta permite establecer cuál orienta mejor la acción esperada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ubicación
                  p.mb-0 Se utiliza una pieza adaptable en distintos espacios, como la sección de publicaciones e historias. La comparación ayuda a identificar dónde responde mejor la audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Oferta o beneficio
                  p.mb-0 Se prueban distintas formas de destacar el beneficio, descuento o solución comunicada. El análisis debe considerar tanto la cantidad de respuestas como su pertinencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La versión preferible no siempre es la que obtiene mayor alcance. Si el objetivo es captar clientes potenciales, puede ser más útil un anuncio con menos impresiones y más formularios completos.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Interpretación de los resultados de una prueba
      p.mb-5 La interpretación comienza por la #[b métrica principal definida antes de publicar]. Luego se examinan otros datos para comprender la calidad de la respuesta y evitar conclusiones basadas en una sola cifra. Estas situaciones orientan la lectura inicial de los resultados:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img10.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Una audiencia responde mejor que otra").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si ambas recibieron anuncios comparables, la diferencia puede indicar mayor afinidad de un público con la oferta. Conviene revisar también la pertinencia de los mensajes o registros obtenidos antes de priorizarlo.
            .row(titulo="Un formato genera más respuestas que otro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La diferencia puede orientar la elección de próximas piezas. Antes de atribuir el resultado solo al formato, se comprueba que el mensaje y las condiciones de circulación hayan sido comparables.
            .row(titulo="Hay muchos clics y pocas acciones finales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El anuncio despierta interés, pero la respuesta disminuye después del clic. Es necesario revisar si el destino, el formulario o la oferta corresponden con lo anunciado.
            .row(titulo="Hay participación, pero pocos contactos directos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los comentarios o reacciones indican interés, aunque la audiencia no avance hacia la conversación esperada. Se puede comprobar si el llamado a la acción comunica con claridad cómo contactar a la marca.
            .row(titulo="El costo por resultado difiere entre versiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Además del número de respuestas, se compara cuánto costó obtener cada una. Esta relación ayuda a decidir qué versión utiliza mejor el presupuesto para alcanzar el objetivo.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los resultados deben conservarse en un registro que identifique #[b la versión del anuncio, la variable probada, la audiencia, el presupuesto, la duración y la respuesta obtenida]. Este registro permite fundamentar ajustes posteriores y aprovechar lo aprendido en otras campañas.

</template>

<script>
export default {
  name: 'Tema6',
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
