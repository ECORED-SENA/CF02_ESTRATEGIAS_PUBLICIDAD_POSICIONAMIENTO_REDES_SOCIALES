<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Configuración básica de acciones promocionales
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una vez definidos los elementos de la campaña, se configuran en la plataforma seleccionada. En esta etapa se concreta #[b qué resultado se busca, a quién se dirigirá el anuncio, cuánto se invertirá, durante qué periodo circulará y en qué espacios aparecerá]. Registrar estas decisiones facilita el seguimiento y la interpretación posterior de los resultados.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Selección del objetivo de promoción
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El primer paso es asociar la necesidad de la marca con #[b un objetivo principal de campaña]. Las finalidades de reconocimiento, interacción, tráfico, clientes potenciales y conversión ya se describieron; al configurar la pauta, corresponde elegir la opción que mejor represente la respuesta esperada. En la plataforma, esta elección debe relacionarse con el canal por el que la persona completará la acción:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Recibir mensajes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Recibir mensajes
              p.mb-0 Si se esperan consultas, solicitudes de información o cotizaciones, se selecciona una opción orientada a conversaciones. El anuncio debe invitar a escribir y el canal debe estar activo.
        .py-3.py-md-4(titulo="Captar datos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Captar datos
              p.mb-0 Si se busca identificar personas interesadas, el anuncio debe conducir a un formulario o registro funcional. Este debe explicar el beneficio de dejar los datos y solicitar la información necesaria.
        .py-3.py-md-4(titulo="Dirigir visitas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dirigir visitas
              p.mb-0 Si se pretende llevar personas a un catálogo o sitio web, el anuncio debe incluir un enlace funcional. La página de destino debe contener la información anunciada.
        .py-3.py-md-4(titulo="Lograr una acción final")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Lograr una acción final
              p.mb-0 Si se esperan compras, reservas o inscripciones, la pieza debe presentar la oferta con claridad y conducir a un proceso que permita completar esa acción.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p La denominación de los objetivos y las opciones disponibles pueden variar entre plataformas. Antes de activar la campaña, se debe comprobar que #[b el objetivo seleccionado, el llamado a la acción y el destino del anuncio] conduzcan al mismo resultado.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Selección de audiencias publicitarias
      p.mb-5 La #[b segmentación] define a qué personas podrá llegar el anuncio. Se establece según la oferta, la zona de atención y el conocimiento previo que la audiencia tiene de la marca. Los criterios disponibles dependen de cada plataforma y pueden combinarse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ubicación geográfica
                  p.mb-0 Delimita el territorio donde se ofrece el producto o servicio, como un país, ciudad, municipio o zona de cobertura. Evita invertir en personas que se encuentran fuera del área de atención.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Características demográficas
                  p.mb-0 Incluyen rangos de edad y otras características generales pertinentes para la campaña, según las opciones disponibles en la plataforma. Deben seleccionarse por su relación con la oferta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Intereses
                  p.mb-0 Relacionan el anuncio con temas que pueden atraer a la audiencia, como educación, deporte, tecnología o gastronomía. Su pertinencia se evalúa frente al producto o servicio promocionado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comportamientos digitales
                  p.mb-0 Consideran acciones relevantes realizadas por los usuarios en entornos digitales, de acuerdo con los criterios que permita la plataforma. Pueden ayudar a identificar públicos con mayor afinidad con la campaña.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Audiencias personalizadas
                  p.mb-0 Agrupan personas que ya han tenido contacto con la marca, por ejemplo, al interactuar con sus contenidos, visitar un sitio web, escribir un mensaje o completar un formulario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Audiencias similares
                  p.mb-0 Permiten buscar personas nuevas con características semejantes a las de un público existente, cuando la plataforma dispone de esta función y se cuenta con una audiencia de referencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img14.png')})` }")
        .bloque-texto-g__texto.p-4
          p La selección debe equilibrar #[b pertinencia y tamaño]. Una audiencia muy amplia puede incluir personas poco relacionadas con la oferta; una demasiado reducida puede limitar la distribución del anuncio. El mensaje también debe responder al vínculo previo del público con la marca: quien acaba de conocerla puede necesitar información introductoria, mientras que alguien que ya consultó un catálogo puede responder a una oferta más concreta.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Para configurar la audiencia, se sigue esta secuencia:
          .caja-1.color-1(data-aos="fade-right")
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span a
                | 
                p.mb-0 Delimitar la zona donde la oferta está disponible. 
              li 
                .lista-ol--cuadro__vineta
                  span b
                | 
                p.mb-0 Definir las características e intereses pertinentes. 
              li 
                .lista-ol--cuadro__vineta
                  span c
                | 
                p.mb-0 Decidir si la campaña se dirigirá a personas nuevas, a quienes ya interactuaron con la marca o a una audiencia similar. 
              li
                .lista-ol--cuadro__vineta
                  span d
                | 
                p.mb-0 Revisar el tamaño estimado de la audiencia frente al presupuesto disponible. 
              li.mb-0
                .lista-ol--cuadro__vineta
                  span e
                | 
                p.mb-0 Adaptar el mensaje y el formato al público seleccionado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 470px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Por ejemplo, una campaña local orientada a recibir solicitudes de información debe priorizar personas ubicadas en la zona de atención. Una campaña dirigida a impulsar ventas puede considerar a quienes ya visitaron el catálogo o manifestaron interés, si esa información está disponible para su configuración.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Asignación de presupuesto, duración y ubicación
      p.mb-5 Estas decisiones se toman de forma conjunta, porque afectan la distribución del anuncio y el uso de la inversión:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Presupuesto diario
                  p.mb-0.text-center Establece cuánto se destinará aproximadamente cada día. Permite distribuir la inversión a lo largo de la campaña y debe guardar relación con el tamaño de la audiencia y el resultado esperado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Presupuesto total
                  p.mb-0.text-center Fija el monto disponible para toda la campaña. Su distribución depende del periodo de circulación y de las opciones de configuración de la plataforma.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Duración
                  p.mb-0.text-center Define el número de días o las fechas en que circulará el anuncio. Una oferta asociada a un evento tiene un plazo específico; una campaña de reconocimiento puede requerir más tiempo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ubicación
                  p.mb-0.text-center Determina los espacios en los que aparecerá la pieza, como la sección de publicaciones, historias, reels, videos o mensajes. El contenido debe conservar su claridad y funcionalidad en cada espacio seleccionado.
      p.mb-5 Una vez establecidas estas condiciones, se revisa la coherencia de la configuración antes de activar el anuncio:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inversión y periodo
                  p.mb-0 El presupuesto debe permitir sostener la circulación durante el tiempo elegido. Si la inversión es baja para un periodo muy largo, la distribución diaria puede resultar limitada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inversión y audiencia
                  p.mb-0 El tamaño del público debe ser adecuado para el presupuesto. Si la audiencia es muy pequeña en relación con la inversión, las mismas personas pueden recibir el anuncio repetidamente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formato y ubicación
                  p.mb-0 La pieza debe adaptarse a los espacios seleccionados. Por ejemplo, un video vertical puede aprovechar historias o reels, mientras que una imagen informativa puede necesitar otra disposición.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acción y destino
                  p.mb-0 El llamado a la acción debe funcionar en la ubicación elegida. También se comprueba que el enlace, formulario o canal de contacto esté disponible y corresponda con lo anunciado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguimiento
                  p.mb-0 La campaña debe revisarse mientras esté activa. Según sus resultados, puede ser necesario ajustar la audiencia, la inversión, la duración o las ubicaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Esta revisión permite activar una campaña cuyas decisiones de configuración respondan al objetivo definido y puedan evaluarse durante su ejecución.

</template>

<script>
export default {
  name: 'Tema3',
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
