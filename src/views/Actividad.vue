<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Promoción y posicionamiento en redes sociales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de la pauta digital, la configuración de campañas, el crecimiento de audiencias, el posicionamiento, las pruebas publicitarias y la evaluación de acciones promocionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
{
          id: 1,
          texto: '¿Qué caracteriza a la pauta digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Invertir recursos para distribuir anuncios a audiencias seleccionadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar únicamente contenido sin inversión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Responder mensajes sin definir una campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar seguidores sin revisar el público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué decisión debe orientar una campaña promocionada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir un objetivo principal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elegir primero todos los formatos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el presupuesto sin una meta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar el mismo anuncio en todos los espacios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Si una campaña busca atraer personas a un catálogo, ¿qué debe comprobar usted?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el enlace conduzca al catálogo anunciado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que el anuncio tenga varias llamadas a la acción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que solo se midan las impresiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el perfil reciba seguidores nuevos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué indicador corresponde mejor a una campaña orientada a captar clientes potenciales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registros de personas interesadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de colores del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de publicaciones anteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frecuencia de actualización del logotipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué debe considerar usted al seleccionar la audiencia de una campaña local?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La zona donde se ofrece el servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Todos los usuarios de la plataforma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente el formato del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El mayor alcance posible sin segmentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué problema puede generar una audiencia demasiado amplia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluir personas poco relacionadas con la oferta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impedir que se establezca un presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la posibilidad de medir clics.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obligar a usar un único formato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué define el presupuesto total de una campaña?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El monto disponible para toda su duración.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El gasto exacto de cada publicación orgánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de seguidores que se obtendrá.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La respuesta de cada persona alcanzada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Por qué debe adaptar usted el formato a la ubicación del anuncio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para conservar la claridad y funcionalidad de la pieza.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para evitar seleccionar un objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reemplazar el seguimiento de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para garantizar compras sin revisar el mensaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué indica un crecimiento de audiencia pertinente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llegan personas interesadas que mantienen su participación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentan seguidores sin relación con la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se acumulan impresiones sin respuesta posterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se publican más piezas sin revisar su calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es una estrategia orgánica de crecimiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar contenido útil y responder a la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pagar anuncios para ampliar la distribución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el presupuesto diario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seleccionar ubicaciones pagas del anuncio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuándo puede resultar útil la pauta para crecer?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al impulsar una publicación con buena respuesta orgánica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Al sustituir toda interacción con la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Al omitir la revisión del perfil de destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Al atraer seguidores sin atender su interés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué constituye el posicionamiento de marca?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La percepción que la audiencia construye y recuerda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de anuncios publicados en un día.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto asignado a una pieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de plataformas abiertas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Si una marca comunica cercanía, ¿qué acción respalda ese atributo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder oportunamente las consultas de sus usuarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Desactivar el canal de mensajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar de tono en cada publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir únicamente las impresiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué diferencia una prueba A/B interpretable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar una variable principal y mantener condiciones comparables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambiar a la vez audiencia, imagen y presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar anuncios con objetivos diferentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elegir la versión de mayor alcance siempre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Para comparar anuncios orientados al tráfico, ¿qué métrica es pertinente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clics hacia el destino previsto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de tipografías empleadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de publicaciones del perfil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamaño del archivo audiovisual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'Si un anuncio recibe muchos clics y pocas acciones finales, ¿qué debe revisar usted?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El enlace, formulario o destino posterior al clic.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el alcance del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el color de la identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cifra de seguidores históricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué permite comparar el costo por resultado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuánto se invirtió para obtener cada acción prevista.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de colores de cada anuncio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La extensión del texto de la publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número total de perfiles seguidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué debe hacer usted antes de aumentar la inversión si el formulario no funciona?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corregir el formulario y comprobar su funcionamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ampliar primero todas las audiencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la duración de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repetir el anuncio sin ningún cambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cómo debe valorar usted los resultados de una campaña?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compararlos con el objetivo y los resultados esperados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Atender solamente al alcance obtenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar siempre las ventas como único criterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elegir el anuncio con más impresiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué ajuste corresponde a contactos procedentes de zonas sin cobertura?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar y precisar la segmentación geográfica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Duplicar el presupuesto sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Retirar toda información sobre la oferta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir únicamente las reproducciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        }
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
