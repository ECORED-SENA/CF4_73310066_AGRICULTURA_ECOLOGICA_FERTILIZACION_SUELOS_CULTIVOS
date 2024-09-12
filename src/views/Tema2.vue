<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-dos
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de arvenses
    p.mb-5(data-aos='fade-right')  Las malezas son especies vegetales que compiten con los cultivos por agua y nutrientes. Algunas tienen efectos alelopáticos negativos, causando detrimento en la producción e interfiriendo en el desarrollo normal de las plantas. 
    .row.justify-content-center.mb-5
      .col-lg-10
        div.tarjeta-adorno(style="background-color: #DCEEB6 ")
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
        div(style="background-color:#FAECAB ; border-radius: 10px").overflow-hidden
          .row.justify-content-center.g-3
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/10.png', alt='')
            .col-lg-9
              .p-4
                h5 Arvenses agresivas
                p.mb-0 Compiten fuertemente con los cultivos y deben ser erradicadas.

    .row.justify-content-center.mb-5
      .col-lg-8
        div(style="background-color:#FAECAB ; border-radius: 10px").overflow-hidden
          .row.justify-content-center.g-3
            .col-lg-3.col-7
              .p-lg-0.p-4.h-100: img(src='@/assets/curso/temas/11.png', alt='')
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
      .col-lg-3.mb-lg-0.mb-3 
        .tarjeta-avatar
          img(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
          .tarjeta.w-100.h-100(style="background-color: #EDF6DB")
            .p-4.text-center
              h5.text-center Diversidad
              p Fomentar la biodiversidad.
      .col-lg-4.mb-lg-0.mb-3 
        .tarjeta-avatar
          img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
          .tarjeta.w-100.h-100(style="background-color: #EDF6DB")
            .p-4.text-center
              h5.text-center Control de plagas y enfermedades
              p Facilitar el control natural.
      .col-lg-3.mb-lg-0.mb-3 
        .tarjeta-avatar
          img(src='@/assets/curso/temas/18.svg' alt='AvatarTop')
          .tarjeta.w-100.h-100(style="background-color: #EDF6DB")
            .p-4.text-center
              h5.text-center Conservación de suelos
              p Promover la conservación del suelo a través de una cobertura viva.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Tipos de arvenses
    p.mb-5(data-aos='fade-right') Las especies arvenses se clasifican de la siguiente manera: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dceeb6 ").h-100
          .row.justify-content-center.mb-3
            .col-lg-6.col-5: img(src='@/assets/curso/temas/19.png', alt='')
          .text-center
            h4 Por la intensidad de su efecto en los cultivos
            p.mb-0 Agresivas y nobles.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dceeb6 ").h-100
          .row.justify-content-center.mb-3
            .col-lg-6.col-5: img(src='@/assets/curso/temas/20.png', alt='')
          .text-center
            h4 Por su botánica
            p.mb-0 Hojas anchas, gramíneas y ciperáceas.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dceeb6 ").h-100
          .row.justify-content-center.mb-3
            .col-lg-6.col-5: img(src='@/assets/curso/temas/21.png', alt='')
          .text-center
            h4 Por su ciclo de vida
            p.mb-0 Perennes o anuales.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dceeb6 ").h-100
          .row.justify-content-center.mb-3
            .col-lg-6.col-5: img(src='@/assets/curso/temas/22.png', alt='')
          .text-center
            h4 Por la consistencia del tallo
            p.mb-0 Leñosas, semileñosas y herbáceas.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Las arvenses como indicadoras 
    p.mb-5(data-aos='fade-right') El aspecto de algunas arvenses puede constituirse en un indicador de las condiciones del suelo, en cuanto a escasez o exceso de nutrientes, condición de acidez o alcalinidad del suelo, presencia de enfermedades del suelo, entre otros. 
      br
      br
      |Estos síntomas orientan al técnico en el manejo de los problemas del suelo, sin esperar a que aparezcan en el cultivo.  
    .row.justify-content-center.mb-3
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-5.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/23.png', alt='')
            .col-lg-7
              .d-flex.align-items-center.h-100 
                .p-4
                  h5 Por ejemplo 
                  p.mb-0 el helecho es una especie tradicionalmente indicadora de acidez del suelo.
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Las arvenses como mejoradoras 
    .row.justify-content-center.mb-3
      .col-lg-10
        div(style="background-color:#faf6e0 ")
          .row.justify-content-center
            .col-lg-4.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/24.png', alt='')
            .col-lg-8
              .d-flex.align-items-center.h-100 
                .p-4
                  h5 En los sistemas agroecológicos, las arvenses son: 
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Favorecedoras de la biodiversidad. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Hospederos de predadores y parasitoides. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Materia prima para bioinsumos, tales como: bioinsecticidas, fungicidas, repelentes, biofertilizantes. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Alimentación animal e incluso humana, como algunas gramíneas y leguminosas. 

                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Especies medicinales.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Conservadoras del suelo al constituirse en cobertura. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #BDAF7F ")
                      p.mb-0 Estabilizadoras del sistema agroecológico.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Métodos de manejo de las arvenses 
    p.mb-5(data-aos='fade-right') Estos métodos son estrategias integradas utilizadas para controlar y reducir la presencia de arvenses en los cultivos. Incluyen una combinación de técnicas culturales, mecánicas, biológicas y químicas que buscan minimizar el impacto negativo de las arvenses en la producción agrícola. 
    .titulo-tres: h3 Prácticas culturales preventivas 
    p.mb-5(data-aos='fade-right') Las prácticas culturales preventivas son fundamentales para el manejo de las arvenses y se implementan antes de su aparición para minimizar su impacto. 
    .row.justify-content-center.mb-5
      .col-lg-3.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/25.svg', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--beige")
          .row(titulo="Labranza ")
            .col-lg-8.mb-4.mb-md-0
              p Remover el suelo entre las calles del cultivo. Limpiar con el rastrillo. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
          .row(titulo="Uso de cobertura ")
            .col-lg-8.mb-4.mb-md-0
              p Cubrir el suelo entre las hileras de hortalizas con algún material, como abono orgánico, pasto seco, papel periódico, hojas secas. Las malezas no pueden crecer por falta de luz y espacio. Ayudan a mantener la humedad del suelo, regulan la temperatura de este y evitan su erosión. En algunos casos, protegen las hojas y frutos al evitar el contacto directo con el suelo. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/27.png', alt='Texto que describa la imagen')
          .row(titulo="Uso de semilla sin contaminar ")
            .col-lg-8.mb-4.mb-md-0
              p Utilizar semillas que no estén mezcladas con semillas de malezas. Si aparecen malezas en el terreno, no se deben dejar hasta que florezcan, sino controlarlas antes de que esto suceda. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/28.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--beige")
          .row(titulo="Uso de estiércol descompuesto ")
            .col-lg-8.mb-4.mb-md-0
              p Utilizar estiércol descompuesto para evitar que el estiércol demasiado fresco traiga semillas viables. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/29.png', alt='Texto que describa la imagen')
          .row(titulo="Rotación de cultivos ")
            .col-lg-8.mb-4.mb-md-0
              p Practicar la rotación de cultivos para mejorar la salud del suelo y reducir la incidencia de plagas y enfermedades. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/30.png', alt='Texto que describa la imagen')
          .row(titulo="Riego descontaminado ")
            .col-lg-8.mb-4.mb-md-0
              p Usar agua sin semillas de malezas para el riego. 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/31.png', alt='Texto que describa la imagen')
      .col-lg-3.col-7: img(src='@/assets/curso/temas/32.png', alt='')      
    .titulo-tres: h3 Prácticas culturales directas
    p.mb-5(data-aos='fade-right') Son métodos implementados directamente en el campo para controlar las arvenses una vez que han aparecido. Estas prácticas incluyen técnicas manuales y mecánicas, así como el manejo adecuado del cultivo para suprimir el crecimiento de arvenses. Entre las prácticas culturales directas se encuentran: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          img(src='@/assets/curso/temas/33.png', alt='').mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 A mano
          p.text-center Arrancar manualmente las malezas que se encuentren cerca de las plantas.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          img(src='@/assets/curso/temas/34.png', alt='').mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Con herramienta
          p.text-center Entre calles de las eras se puede desyerbar con machete, dejando los residuos a manera de cobertura (si no están florecidos o con semillas).
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          img(src='@/assets/curso/temas/35.png', alt='').mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Aplicación de herbicidas
          p.text-center No se utiliza esta práctica en el manejo agroecológico.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .tarjeta.h-100.p-4(style="background-color: #f3d02c ")
          .d-flex.align-items-center
            .row.justify-content-center.align-items-center
              .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.svg', alt='')
              .col-lg-8
                h4 Pódcast
                p Están invitados a no perderse el episodio de Manejo de arvences. Evaristo, Asusena y el ingeniero explorarán el fascinante mundo del manejo de arvenses. Los oyentes aprenderán a diferenciar entre las plantas que benefician y las que compiten con sus cultivos, descubriendo cómo aprovecharlas para mejorar la productividad de sus fincas.
                TarjetaAudio.mb-3.bg-white(
                  texto="Manejo de arvenses "
                  :audio="require('../assets/curso/temas/audio1.mp3')"
                )
      .col-lg-4.col-7: img(src='@/assets/curso/temas/36.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
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
