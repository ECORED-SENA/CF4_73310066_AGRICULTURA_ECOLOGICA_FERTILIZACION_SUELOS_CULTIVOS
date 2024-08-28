<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Este componente formativo ofrece una guía completa sobre el manejo agroecológico de plagas y enfermedades en cultivos, promoviendo prácticas sostenibles y ecológicas. Se enfoca en la utilización de métodos naturales y productos bioinsumos para mantener la salud de los cultivos, minimizando el impacto ambiental y promoviendo la biodiversidad. 
        .p-4(style="background-color: #dceeb6 ")
          p.mb-0 El manejo Integrado de Plagas y Enfermedades (MIPE) es fundamental en esta guía, abordando tanto la prevención como el control mediante técnicas culturales, biológicas y mecánicas. La adopción de estas prácticas no solo mejora la resistencia de los cultivos a los ataques de plagas y enfermedades, sino que también contribuye a la conservación del ecosistema agrícola. 
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/2.svg', alt='')
      .col-lg-11(data-aos="fade-left"): p.mb-0 Además, se destaca la importancia del manejo adecuado de arvenses, que, cuando se gestionan correctamente, pueden contribuir a la salud del suelo y a la reducción de plagas y enfermedades. Este enfoque holístico asegura una producción agrícola más equilibrada y respetuosa con el medio ambiente, beneficiando tanto a los agricultores como a los consumido
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
