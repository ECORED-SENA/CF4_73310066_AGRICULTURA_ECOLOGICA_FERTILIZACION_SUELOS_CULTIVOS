<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo de plagas 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Son aquellas especies animales que generan un efecto negativo en los cultivos, atacando las plantas, disminuyendo su producción y calidad, causando con ello pérdidas económicas. Las plagas más comunes en los cultivos son: insectos (dípteros, coleópteros, lepidópteros, entre otros), arácnidos (arañas, ácaros, trips), nematodos, moluscos (babosas), anfibios, reptiles, roedores y aves. 
        .p-3.mb-4(style="background-color: #faecab ")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.svg', alt='')
            .col-lg-10
              h5.mb-0 Atacan todas las partes de la planta: raíces, tallos, hojas, flores, frutos y semillas.
        p Los insectos pueden actuar como transmisores de enfermedades virales, bacterianas, fungosas y otras. Las más comunes son las relacionadas con la transmisión de virus. Cuando el insecto ataca la planta infectada con su aparato masticador o chupador, queda inoculado con la enfermedad que luego transmitirá al alimentarse en otra planta.    
      .col-lg-4.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/38.png', alt='')
    .tarjeta.h-100.p-4(style="background-color: #f3d02c ")
      .d-flex.align-items-center
        .row.justify-content-center.align-items-center
          .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.svg', alt='')
          .col-lg-8
            h4 Pódcast
            p No se pierdan el episodio Manejo de Plagas, Don Campos, Asusena y Evaristo enseñarán a los oyentes cómo combatir plagas de manera ecológica y eficiente. Se explicarán métodos mecánicos, culturales, biológicos y más para mantener los cultivos libres de plagas sin dañar el medio ambiente.  
            TarjetaAudio.mb-3.bg-white(
              texto="Manejo de Plagas"
              :audio="require('../assets/curso/temas/audio.mp3')"
            )
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Categorías de las plagas 
    p.mb-5(data-aos='fade-right') Las plagas agrícolas se clasifican en diversas categorías según el tipo de organismo y el daño que causan a los cultivos. Estas categorías incluyen: 
    .fondo-slyder.mn.p-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

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
