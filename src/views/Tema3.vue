<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-tres
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
    .fondo-slyder.mn.p-5.mb-4
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Plagas potenciales 
              p Especies que habitan de manera natural los cultivos sin dañarlos, pero que, si se afectan sus controladores naturales o cambian las condiciones de diversidad del cultivo a monocultivo, podrían crecer sus poblaciones sin control y convertirse en especies dañinas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/37.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Plagas ocasionales 
              p Especies que aumentan su población causando daño al cultivo solo en ciertas épocas, permaneciendo el resto del tiempo en niveles de infestación que no afectan la producción ni la calidad. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/39.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Plagas claves 
              p Especies que de manera permanente causan daño a los cultivos. En estas especies se enfoca el manejo integrado. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/40.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Plagas migrantes 
              p Especies que no se encuentran en los cultivos, pero que eventualmente pueden migrar y causar daños. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/41.png', alt='Texto que describa la imagen')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Formas en que las plagas dañan los cultivos 
    p.mb-5(data-aos='fade-right') Las plagas pueden dañar los cultivos de diversas maneras, incluyendo la destrucción de hojas, tallos y raíces, la succión de savia, la transmisión de enfermedades, la competencia por nutrientes y el consumo de frutos y semillas. 
    .row.justify-content-center.mb-3
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Masticadores 
          p.text-center Causan daño mordiendo las hojas, raíces, tubérculos, entre otros.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Minadores de hojas 
          p.text-center Causan daño cuando las larvas construyen minas o galerías en las hojas y los insectos adultos las pican para alimentarse. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Enrolladores y pegadores de hojas 
          p.text-center Insectos que enrollan las hojas, las pegan y arman allí su refugio. 
    .row.justify-content-center.mb-3
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Perforadores de botones florales y frutos 
          p.text-center Insectos que causan perforaciones a las flores y frutos. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Barrenadores de tallos 
          p.text-center Insectos perforadores de tallos. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Cortadoras de plantas tiernas 
          p.text-center Llamados trozadores, se alimentan de plántulas de emergencia reciente.
    .row.justify-content-center.mb-3
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Con daños múltiples 
          p.text-center Plagas que, según el ciclo en que se encuentren, causan diversos daños. En estado de larva generan un deterioro, y ese mismo insecto causa un daño diferente cuando es adulto. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover(style="background-color: #BDAF7F").h-100
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white.text-center.mb-4
              h4.mb-0 Insectos picadores/chupadores 
          p.text-center Insectos que cuentan con un órgano chupador que succiona la savia de las plantas y, a la vez, segregan una sustancia azucarada que propicia el crecimiento de algunos hongos como la fumagina. 
    .p-2.rounded-pill.d-inline-block.mb-4(style="background-color: #faecab ")
      h5.mb-0.mx-3 Algunos ejemplos 
    p.mb-5(data-aos='fade-right') Las orugas devoran las hojas, los pulgones chupan savia y excretan melaza, los ácaros causan clorosis y deformaciones, y los nematodos provocan agallas en las raíces. 
    .row.justify-content-center.mb-3
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/42.png', alt='')
            .col-lg-9
              .p-4
                h5 Ácaros
                p.mb-0 Organismos chupadores de savia que afectan hojas, tallos y frutos.
    .row.justify-content-center.mb-3
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/43.png', alt='')
            .col-lg-9
              .p-4
                h5 Nematodos
                p.mb-0 Organismos del suelo que atacan raíces formando nódulos y tumores, haciendo que la capacidad de absorción disminuya o cese por completo.
    .row.justify-content-center.mb-3
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/44.png', alt='')
            .col-lg-9
              .p-4
                h5 Moluscos
                p.mb-0 Babosas y caracoles que son comedores de hojas.
    .row.justify-content-center.mb-5
      .col-lg-8
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/45.png', alt='')
            .col-lg-9
              .p-4
                h5 Hormigas
                p.mb-0 Comedoras de hojas que defolian los cultivos.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Las plagas y sus interacciones en el sistema agroecológico
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/46.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las plagas pueden alterar el equilibrio natural del agroecosistema, afectando la biodiversidad, las relaciones entre especies y la salud general del cultivo, lo que requiere un manejo integrado y sostenible. 
    p.mb-5(data-aos='fade-right') #[b Incidencia de factores climáticos en las plagas son: ]
    .fondo-slyder.mn.p-5.mb-4
      .tarjeta.bg-white.p-5
          LineaTiempoC.color-acento-botones(text-small)
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-6.mb-4.mb-md-0
                h5 Temperatura 
                p Las temperaturas externas inciden en los niveles de infestación. Las temperaturas óptimas favorecen la proliferación de plagas. 
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/47.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(titulo="Humedad ")
              .col-lg-6.mb-4.mb-md-0
                h5 Humedad 
                p Dependiendo de la especie, la mayor o menor humedad incide en el desarrollo e incidencia de las plagas. 
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/48.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(titulo="Lluvia")
              .col-lg-6.mb-4.mb-md-0
                h5 Lluvia
                p Además del efecto de humedad, el efecto mecánico de la lluvia sobre ciertas plagas podría afectar su población.  
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/49.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(titulo="Viento ")
              .col-lg-6.mb-4.mb-md-0
                h5 Viento 
                p  Podría tener efecto mecánico sobre ciertas plagas.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/50.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(titulo="Radiación solar ")
              .col-lg-6.mb-4.mb-md-0
                h5 Radiación solar 
                p Relacionado especialmente con la temperatura.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/51.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center(titulo="Fotoperiodo ")
              .col-lg-6.mb-4.mb-md-0
                h5 Fotoperiodo 
                p  En ambientes controlados, se manipula el fotoperiodo para alterar los comportamientos dañinos de algunas plagas. 
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/52.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') #[b Incidencia de los factores biológicos en las plagas: ]
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/53.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Planta hospedera
          p.text-center Especie vegetal que sirve de alimento a la plaga.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/54.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Enemigos naturales
          p.text-center Depredadores y parasitoides dela especie plaga.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #BDAF7F").h-100
          .row.justify-content-center.mb-3
            .col-4: img(src='@/assets/curso/temas/55.svg', alt='')
          .d-flex.justify-content-center
            .d-inline-block.p-3.bg-white.text-center.mb-4
              h4.mb-0 Otras plagas
          p.text-center Poblaciones de otras plagas inciden en los niveles de infestación de la plaga.
              
      


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
