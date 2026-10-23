<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Promoción en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3.color-1(data-aos="fade-right")
            p.mb-0 La #[b promoción en redes sociales] reúne las acciones comunicativas y publicitarias que difunden una marca, producto, servicio, evento o propuesta ante un público definido. Su finalidad es despertar interés y motivar una respuesta, como interactuar con una publicación, visitar un catálogo, solicitar información, registrarse o comprar.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Para que la promoción contribuya a la estrategia digital, debe partir de un #[b objetivo principal]. Este orienta la elección de la audiencia, la plataforma, el mensaje, el formato y el llamado a la acción. También permite definir la duración, el presupuesto, los resultados esperados y las métricas con las que se evaluará la acción.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 500px").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Modalidades y aplicaciones de la promoción digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p En redes sociales, la promoción puede desarrollarse mediante acciones #[b orgánicas] o #[b pagas]. Las primeras se apoyan en publicaciones, contenido de valor e interacción con la comunidad, sin inversión publicitaria directa. Las segundas emplean pauta para ampliar el alcance y dirigir anuncios a audiencias seleccionadas. Ambas modalidades pueden complementarse según el propósito de la campaña.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img4.png', alt='' style="width: 400px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La promoción puede adoptar formatos como #[b imágenes, videos, historias, #[i reels] y carruseles]. También puede conducir a formularios, mensajes directos, catálogos o sitios web. La elección del formato y del canal debe facilitar que la audiencia comprenda el beneficio comunicado y complete la acción propuesta.
          .caja-1(data-aos="fade-left")
            p Estas acciones pueden utilizarse para:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lanzar una marca, producto o servicio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Difundir una oferta comercial. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Invitar a eventos, capacitaciones o actividades. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comunicar los beneficios de una propuesta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Atraer visitas a un perfil, catálogo o sitio web. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Captar personas interesadas mediante formularios o mensajes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecer la comunidad y la recordación de marca.
      p.mb-0 Por ejemplo, si una publicación busca atraer visitantes a un catálogo, debe indicar qué encontrarán allí, por qué les puede interesar y cómo acceder. El mensaje, el público y la acción esperada deben guardar coherencia entre sí.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Finalidades de la promoción en redes sociales
      p.mb-5 La finalidad principal determina qué respuesta se espera de la audiencia y cómo se evaluará la campaña. Las finalidades más frecuentes son las siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Visibilidad
                  p.mb-0 Amplía la exposición del contenido ante personas nuevas o públicos específicos. Por ejemplo, se puede impulsar una publicación para dar a conocer una marca.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento
                  p.mb-0 Favorece que la audiencia identifique y recuerde el nombre, la identidad visual y la propuesta de valor de la marca mediante comunicaciones coherentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción
                  p.mb-0 Motiva respuestas como comentarios, reacciones, contenidos compartidos, elementos guardados o mensajes. Estas acciones indican interés y pueden fortalecer la relación con la comunidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tráfico
                  p.mb-0 Dirige a los usuarios hacia una página web, tienda, catálogo, formulario u otro canal donde puedan ampliar la información o continuar el proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Clientes potenciales
                  p.mb-0 Facilita el contacto con personas interesadas mediante formularios, registros, mensajes directos o botones de contacto. Requiere comunicar con claridad el beneficio ofrecido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conversión
                  p.mb-0 Busca que el usuario complete una acción concreta, como comprar, reservar, inscribirse, descargar un recurso o solicitar un servicio. El proceso para hacerlo debe ser claro y sencillo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Posicionamiento
                  p.mb-0 Contribuye a la percepción y recordación de la marca cuando comunica sus atributos diferenciales de forma coherente y sostenida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una campaña puede contribuir a varias de estas finalidades, pero conviene #[b definir una como principal]. Así se evita que una sola pieza acumule mensajes o llamados a la acción que dificulten su comprensión. Por ejemplo, una campaña orientada al tráfico debe indicar el destino del enlace; una dirigida a captar clientes potenciales debe facilitar un canal de contacto adecuado.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Relación entre promoción, publicidad y posicionamiento
      p.mb-5 A continuación, se presenta un pódcast que explica la relación entre la promoción, la publicidad y el posicionamiento de marca, destacando cómo la coherencia de las acciones comunicativas contribuye a fortalecer su reconocimiento y presencia en el entorno digital.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img14.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Promoción, publicidad y posicionamiento de marca&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img15.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
