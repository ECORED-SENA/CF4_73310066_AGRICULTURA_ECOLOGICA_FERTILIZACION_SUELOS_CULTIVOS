<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-uno
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades
    p.mb-5(data-aos='fade-right') En la implementación de un cultivo se presentan las siguientes situaciones: 
    .row.justify-content-center.mb-5.g-3
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.h-100
          img(src='@/assets/curso/temas/3.png', alt='')
          .d-flex.justify-content-center.p-4(style="background-color: #bdaf7f; border-radius: 0px 0px 20px 20px")
            .d-inline-block.bg-white.p-2: h5.mb-0  Presencia de malezas
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.h-100
          img(src='@/assets/curso/temas/4.png', alt='')
          .d-flex.justify-content-center.p-4(style="background-color: #bdaf7f ; border-radius: 0px 0px 20px 20px ")
            .d-inline-block.bg-white.p-2: h5.mb-0  Presencia de plagas
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.h-100
          img(src='@/assets/curso/temas/5.png', alt='')
          .d-flex.justify-content-center.p-4(style="background-color: #bdaf7f ; border-radius: 0px 0px 20px 20px ")
            .d-inline-block.bg-white.p-2: h5.mb-0  Presencia de enfermedades
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-3.h-100(style="background-color: #faecab")
          p.mb-0 Se pueden realizar prácticas de prevención (antes) y control (después) para evitar que estas malezas, plagas y enfermedades afecten la producción de los cultivos. Desde #[b el manejo agroecológico, las opciones de prevención y control son totalmente limpias], basándose en el manejo de los cultivos y en la aplicación de productos naturales para su control. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se parte del concepto de que un cultivo sano y bien nutrido es más resistente al ataque de estos agentes. El manejo integrado, también llamado #[b MIPE (Manejo Integrado de Plagas y Enfermedades)], consiste en un conjunto de prácticas para la prevención y control de malezas, plagas y enfermedades. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-lg-0.mb-3: p.mb-0 El MIPE surgió de la necesidad de mitigar el impacto ambiental causado por el uso indiscriminado de plaguicidas y sus efectos sobre la salud de los agricultores y consumidores. También busca reducir el aumento en los costos de producción, la perturbación de las poblaciones de insectos y microorganismos benéficos, así como las resistencias causadas por el uso continuo de plaguicidas. 
      .col-lg-2.col-5: img(src='@/assets/curso/temas/7.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
