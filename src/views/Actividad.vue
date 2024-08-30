<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo agroecológico de plagas y enfermedades.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el manejo agroecológico de plagas y enfermedades?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108115.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Control de plagas mediante productos químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfoque agrícola basado en principios ecológicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de métodos biológicos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Aplicación de pesticidas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una práctica sostenible en el manejo agroecológico?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108116.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de pesticidas sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rotación de cultivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Monocultivo intensivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riego por inundación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué agente causante puede ser controlado en el manejo agroecológico de enfermedades?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108117.png'),
          opciones: [
            { id: 'a', texto: 'Insectos beneficiosos.', esCorrecta: false },
            { id: 'b', texto: 'Hongos, bacterias y virus.', esCorrecta: true },
            { id: 'c', texto: 'Contaminantes químicos.', esCorrecta: false },
            { id: 'd', texto: 'Malezas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es un método de control de plagas en el manejo integrado?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108118.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aplicación de herbicidas.', esCorrecta: false },
            { id: 'b', texto: 'Métodos mecánicos.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Uso de fertilizantes químicos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Irradiación de cultivos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué práctica no es parte del manejo agroecológico de suelos?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108115.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Uso de fertilizantes sintéticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conservación de organismos y microorganismos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Labranza mínima o cero.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Coberturas (muertas y vivas).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un ejemplo de un bioinsumo utilizado en prácticas sostenibles?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108116.png'),
          opciones: [
            { id: 'a', texto: 'Caldo de ceniza.', esCorrecta: true },
            { id: 'b', texto: 'Fertilizantes sintéticos.', esCorrecta: false },
            { id: 'c', texto: 'Pesticidas comerciales.', esCorrecta: false },
            { id: 'd', texto: 'Hormonas de crecimiento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de arvense se menciona en el manejo de arvenses?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108117.png'),
          opciones: [
            { id: 'a', texto: 'Agresivas vs nobles.', esCorrecta: true },
            { id: 'b', texto: 'Comestibles', esCorrecta: false },
            { id: 'c', texto: 'Medicinales.', esCorrecta: false },
            { id: 'd', texto: 'Ornamentales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una categoría de plagas mencionada en el manejo integrado?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108118.png'),
          opciones: [
            { id: 'a', texto: 'Plagas urbanas.', esCorrecta: false },
            { id: 'b', texto: 'Plagas mecánicas.', esCorrecta: true },
            { id: 'c', texto: 'Plagas acuáticas.', esCorrecta: false },
            { id: 'd', texto: 'Plagas aéreas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué técnica se utiliza para la prevención de enfermedades en el manejo agroecológico?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108115.png'),
          opciones: [
            { id: 'a', texto: 'Uso de insecticidas.', esCorrecta: false },
            { id: 'b', texto: 'Rotación de cultivos.', esCorrecta: true },
            { id: 'c', texto: 'Irrigación constante.', esCorrecta: false },
            { id: 'd', texto: 'Cultivo en invernaderos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué beneficio se obtiene de la fertilización agroecológica?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1108116.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Disminución de la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora de la estructura del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento de residuos químicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la actividad biológica del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
