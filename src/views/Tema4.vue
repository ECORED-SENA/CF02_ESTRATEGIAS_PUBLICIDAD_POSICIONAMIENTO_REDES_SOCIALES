<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Crecimiento de audiencias en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3.color-1(data-aos="fade-right")
            p.mb-0 El #[b crecimiento de audiencias] consiste en ampliar y fortalecer el grupo de personas que conoce una marca, sigue sus canales, interactúa con sus contenidos o mantiene contacto con ella. Su valor no depende únicamente del número de seguidores: también importa que las personas atraídas tengan interés en la propuesta y participen de manera sostenida.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Una comunidad pequeña y activa puede contribuir más a los objetivos de la marca que una audiencia numerosa sin relación con sus contenidos. Por ello, las acciones de crecimiento deben atraer públicos pertinentes y ofrecerles razones para permanecer vinculados.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 500px").m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Seguimiento del crecimiento de audiencias
      p.mb-5 El crecimiento puede reflejarse en distintas respuestas de los usuarios. Para interpretarlas, conviene relacionar cada indicador con el objetivo de la estrategia:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img2.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Seguidores y visitas al perfil").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indican cuántas personas comienzan a seguir la cuenta o se acercan a ella para conocer la marca. Su aumento adquiere mayor valor cuando esas personas pertenecen al público de interés.
            .row(titulo="Alcance y reproducciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Señalan la difusión de las publicaciones y los videos. Ayudan a identificar qué contenidos atraen públicos nuevos, aunque por sí solos no indican que se haya construido una relación con ellos.
            .row(titulo="Interacciones y contenidos compartidos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen comentarios, reacciones, elementos guardados y publicaciones compartidas. Permiten reconocer qué temas generan participación y cuáles pueden circular entre otras personas.
            .row(titulo="Mensajes, clics y registros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reflejan acciones posteriores al contacto inicial con el contenido. Pueden indicar que una parte de la audiencia desea obtener información, visitar otro canal o mantener una relación más directa con la marca.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p Estos datos deben analizarse en conjunto. Atraer personas nuevas es solo una parte del proceso; #[b mantener su interés y facilitar su participación] permite que el crecimiento tenga continuidad. Por la misma razón, conviene evitar acciones que aumenten seguidores sin atraer a personas relacionadas con la propuesta de la marca.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t4/img4.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de análisis de resultados en redes sociales
      p.mb-5 La siguiente tabla presenta los resultados de seis publicaciones difundidas en Instagram, Facebook y TikTok. Los datos permiten comparar el alcance, la respuesta de la audiencia y las acciones generadas por cada formato.
      .bg-1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Ejemplo resultados de publicaciones en redes sociales
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Publicación
                  th.ajuste-border-tabla.texto-left Seguidores nuevos
                  th.ajuste-border-tabla.texto-left Visitas al perfil
                  th.ajuste-border-tabla.texto-left Alcance
                  th.ajuste-border-tabla.texto-left Reproducciones
                  th.ajuste-border-tabla.texto-left Interacciones*
                  th.ajuste-border-tabla.texto-left Mensajes
                  th.ajuste-border-tabla.texto-left Clics
                  th.texto-left Registros
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Instagram · Carrusel
                  td.ajuste-border-tabla.texto-left 18
                  td.ajuste-border-tabla.texto-left 145
                  td.ajuste-border-tabla.texto-left 2.300
                  td.ajuste-border-tabla.texto-left —
                  td.ajuste-border-tabla.texto-left 184
                  td.ajuste-border-tabla.texto-left 9
                  td.ajuste-border-tabla.texto-left 43
                  td.texto-left 6
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Facebook · Imagen
                  td.ajuste-border-tabla.texto-left 7
                  td.ajuste-border-tabla.texto-left 64
                  td.ajuste-border-tabla.texto-left 1.120
                  td.ajuste-border-tabla.texto-left —
                  td.ajuste-border-tabla.texto-left 87
                  td.ajuste-border-tabla.texto-left 5
                  td.ajuste-border-tabla.texto-left 17
                  td.texto-left 3
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold TikTok · Video 1
                  td.ajuste-border-tabla.texto-left 42
                  td.ajuste-border-tabla.texto-left 310
                  td.ajuste-border-tabla.texto-left 6.800
                  td.ajuste-border-tabla.texto-left 9.100
                  td.ajuste-border-tabla.texto-left 581
                  td.ajuste-border-tabla.texto-left 19
                  td.ajuste-border-tabla.texto-left 98
                  td.texto-left 12
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Instagram · Reel
                  td.ajuste-border-tabla.texto-left 25
                  td.ajuste-border-tabla.texto-left 204
                  td.ajuste-border-tabla.texto-left 4.100
                  td.ajuste-border-tabla.texto-left 5.400
                  td.ajuste-border-tabla.texto-left 366
                  td.ajuste-border-tabla.texto-left 16
                  td.ajuste-border-tabla.texto-left 71
                  td.texto-left 9
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Facebook · Video
                  td.ajuste-border-tabla.texto-left 11
                  td.ajuste-border-tabla.texto-left 91
                  td.ajuste-border-tabla.texto-left 1.760
                  td.ajuste-border-tabla.texto-left 2.300
                  td.ajuste-border-tabla.texto-left 152
                  td.ajuste-border-tabla.texto-left 8
                  td.ajuste-border-tabla.texto-left 32
                  td.texto-left 5
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold TikTok · Video 2
                  td.ajuste-border-tabla.texto-left 31
                  td.ajuste-border-tabla.texto-left 250
                  td.ajuste-border-tabla.texto-left 5.300
                  td.ajuste-border-tabla.texto-left 7.100
                  td.ajuste-border-tabla.texto-left 450
                  td.ajuste-border-tabla.texto-left 14
                  td.ajuste-border-tabla.texto-left 82
                  td.texto-left 10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img5.png')})` }")
            .bloque-texto-g__texto.p-4
              p Los videos de TikTok registraron los mayores resultados individuales. El primero alcanzó a 6.800 personas y generó 12 registros; el segundo alcanzó a 5.300 personas y produjo 10 registros. En conjunto, las seis publicaciones generaron #[b 45 registros], por lo que este indicador permite comparar su aporte al objetivo de captación. La imagen de Facebook obtuvo el menor número de registros, aunque para valorar su desempeño también habría que considerar el presupuesto invertido y la audiencia a la que se dirigió.
          Separador
          #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.2 Estrategias orgánicas de crecimiento
          p.mb-5 Las #[b estrategias orgánicas] se desarrollan sin inversión publicitaria directa. Se apoyan en contenidos pertinentes, publicaciones organizadas y una relación activa con la comunidad. Las acciones principales pueden organizarse así:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contenido de valor
                  p.mb-0 Responde a necesidades e intereses de la audiencia mediante consejos, explicaciones, demostraciones, experiencias, respuestas a preguntas frecuentes o información relacionada con la marca. Su utilidad favorece que las personas regresen e interactúen.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Constancia de publicación
                  p.mb-0 Mantiene una presencia reconocible mediante una frecuencia que la marca pueda sostener. La planificación debe cuidar la calidad y la intención de cada contenido, sin publicar únicamente para aumentar la cantidad de piezas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción con la comunidad
                  p.mb-0 Comprende atender mensajes, responder comentarios, agradecer aportes y promover conversaciones. La continuidad de estas respuestas fortalece la relación con quienes ya siguen la cuenta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formatos pertinentes
                  p.mb-0 Utiliza videos cortos, carruseles, historias, encuestas, transmisiones o publicaciones informativas según el contenido y las preferencias de la audiencia. Cada formato debe cumplir una función comunicativa concreta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Perfil completo y claro
                  p.mb-0 Reúne un nombre identificable, descripción comprensible, identidad de marca, enlaces funcionales y datos de contacto. Así, quien llega al perfil puede entender qué ofrece la marca y cómo comunicarse con ella.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Participación de los usuarios
                  p.mb-0 Puede incorporar experiencias, recomendaciones o contenidos creados por la comunidad cuando sean pertinentes. Las series y secciones temáticas también ayudan a dar continuidad a la conversación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis de contenidos
                  p.mb-0 Consiste en identificar qué publicaciones reciben comentarios, se guardan, se comparten o generan consultas. Estos resultados orientan los temas y formatos de próximas publicaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 El crecimiento orgánico requiere tiempo y consistencia. Su aporte principal es sostener una comunidad interesada mediante contenidos y respuestas acordes con la identidad de la marca.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Estrategias pagas de crecimiento
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las #[b estrategias pagas] permiten ampliar la distribución de contenidos y llegar a personas que aún no forman parte de la comunidad. La configuración de objetivos, audiencias, presupuesto y ubicaciones se desarrolló en los apartados anteriores; aquí interesa decidir #[b qué papel cumple la pauta en el crecimiento]. La inversión puede aplicarse en estos casos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Llegar a públicos nuevos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Llegar a públicos nuevos
              p.mb-0 Una campaña puede difundir la marca entre personas con características o intereses relacionados con su propuesta. El crecimiento será pertinente si quienes llegan encuentran contenidos acordes con el anuncio.
        .py-3.py-md-4(titulo="Impulsar contenidos que generan interés")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Impulsar contenidos que generan interés
              p.mb-0 Las publicaciones con buena respuesta orgánica pueden promocionarse para ampliar su difusión. Su desempeño previo ofrece una referencia útil para seleccionar las piezas.
        .py-3.py-md-4(titulo="Atraer visitas al perfil o a otros canales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Atraer visitas al perfil o a otros canales
              p.mb-0 La pauta puede dirigir personas hacia la cuenta, el sitio web o un catálogo. Antes de invertir, estos espacios deben ofrecer información clara, enlaces funcionales y una forma de continuar la interacción.
        .py-3.py-md-4(titulo="Retomar el contacto con públicos interesados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Retomar el contacto con públicos interesados
              p.mb-0 Cuando la plataforma y los datos disponibles lo permiten, una campaña puede dirigirse a personas que ya interactuaron con la marca. El mensaje debe corresponder a esa relación previa.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 La pauta puede atraer atención con mayor rapidez, pero el contenido posterior y la atención a los usuarios influyen en que esa audiencia permanezca. Por ejemplo, una marca puede publicar contenidos educativos, impulsar aquellos que reciben mejor respuesta y mantener el interés de las personas nuevas mediante publicaciones constantes y respuestas oportunas.
          p.mb-0 La articulación de acciones orgánicas y pagas permite ampliar la audiencia y fortalecer la relación con ella. Su seguimiento debe considerar tanto la llegada de personas nuevas como la pertinencia de sus interacciones y su continuidad en la comunidad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img17.png', alt='' style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
