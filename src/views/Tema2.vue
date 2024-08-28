<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de arvenses
    p.mb-5(data-aos='fade-right')  Las malezas son especies vegetales que compiten con los cultivos por agua y nutrientes. Algunas tienen efectos alelopáticos negativos, causando detrimento en la producción e interfiriendo en el desarrollo normal de las plantas. 
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #DCEEB6 ")
          .row.justify-content-center.align-items-center
            .col-lg-9
              .p-4
                .row.justify-content-center.align-items-center
                  .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.svg', alt='')
                  .col-lg-10
                    h4 De "maleza" a "arvense"
                    p.mb-0 El término "maleza" propició su destrucción total en los cultivos, sin tener en cuenta sus beneficios. Se cambió al término “arvense” para referirse a aquellas especies que invaden cultivos sin necesariamente causar un perjuicio.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/9.png', alt='')
    p #[b Los tipos de arvenses son:  ]
    .row.justify-content-center.mb-3
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/10.png', alt='')
            .col-lg-9
              .p-4
                h5 Arvenses agresivas
                p.mb-0 Compiten fuertemente con los cultivos y deben ser erradicadas.

    .row.justify-content-center.mb-5
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/11.png', alt='')
            .col-lg-9
              .p-4
                h5 Arvenses nobles
                p.mb-0 Menos agresivas e indispensables en la conservación de suelos. Proporcionan una cobertura viva que evita la erosión y facilita el almacenamiento de humedad.
    .titulo-tres: h3 Buenas prácticas de manejo de arvenses
    p.mb-5(data-aos='fade-right')  El favorecimiento de arvenses nobles se da: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/12.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Selección y eliminación
          p.text-center Favorecer las nobles mediante la selección y eliminación de las agresivas.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/13.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Descartar
          p.text-center Especies con sistema radicular profundo y pivotante.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/14.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Favorecer
          p.text-center Especies de malezas con sistema radicular superficial y fasciculado.
    p.mb-5 #[b El objetivo del manejo integrado de arvenses es:  ]
    .row.justify-content-center.mb-3
      .col-lg-10
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/15.png', alt='')
            .col-lg-9
              .p-4
                h5 Equilibrio en las poblaciones 
                p.mb-0  Mantener un equilibrio que permita la coexistencia de las arvenses en los cultivos sin afectar los rendimientos. 
    p.mb-5 #[b Algunos beneficios adicionales son: ]
    .row.justify-content-center.mb-5
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/16.svg' alt='AvatarTop' style="width: 73px ")
          .tarjeta.w-100(style="background-color: #EDF6DB")
            .text-white.p-4
              h5.text-center 
              p


</template>

<script>
export default {
  name: 'Tema2',
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
