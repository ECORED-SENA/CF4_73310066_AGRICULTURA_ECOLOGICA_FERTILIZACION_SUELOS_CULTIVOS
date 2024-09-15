<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-cinco
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo de enfermedades
    p.mb-5(data-aos='fade-right') Enfermedad es el efecto negativo del ataque de microorganismos a los cultivos, atacando a las plantas, disminuyendo su producción y calidad, generando pérdidas económicas. 
      br
      br
      | #[b Los tipos de enfermedades son:]  
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        div(style="background-color:#dceeb6 ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/70.png', alt='')
            .col-lg-9
              .p-4
                h5 Bióticas o infecciosas
                p.mb-0 Causadas por microorganismos.
      .col-lg-6.mb-lg-0.mb-3
        div(style="background-color:#dceeb6 ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/71.png', alt='')
            .col-lg-9
              .p-4
                h5 Abióticas o fisiológicas
                p.mb-0 Causadas por alteraciones metabólicas.
    p.mb-5(data-aos='fade-right') #[b Agentes causantes de enfermedades son:  ]
    .row.justify-content-center.mb-5
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-2.h-100(style="background-color: #65802c ")
          .row.justify-content-center.mb-3
            .col-lg-8.col-4: img(src='@/assets/curso/temas/72.svg', alt='')
          h4.text-center.text-white Hongos
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-2.h-100(style="background-color: #65802c ")
          .row.justify-content-center.mb-3
            .col-lg-8.col-4: img(src='@/assets/curso/temas/73.svg', alt='')
          h4.text-center.text-white Bacterias
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-2.h-100(style="background-color: #65802c ")
          .row.justify-content-center.mb-3
            .col-lg-8.col-4: img(src='@/assets/curso/temas/74.svg', alt='')
          h4.text-center.text-white Virus
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-2.h-100(style="background-color: #65802c ")
          .row.justify-content-center.mb-3
            .col-lg-8.col-4: img(src='@/assets/curso/temas/75.svg', alt='')
          h4.text-center.text-white Otros microorganismos
    p.mb-5(data-aos='fade-right') Las enfermedades de las plantas son causadas mayormente por hongos, bacterias y virus. Estos microorganismos colonizan las plantas y las afectan a tal punto que se disminuye o se daña la producción. Las plantas enfermas se ven amarillas, marchitas, con hojas "dormidas", débiles y con frutos en pudrición. 
      br
      br
      | #[b Para que una planta se enferme se necesita que:] 
    .row.justify-content-center.mb-3
      .col-lg-10
        div(style="background-color:#FAECAB ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img.mb-0(src='@/assets/curso/temas/76.png', alt='')
            .col-lg-9
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #BDAF7F ")
                    p.mb-0 El agente patógeno (hongo, bacteria o virus) se encuentre en el ambiente. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #BDAF7F ")
                    p.mb-0 El huésped (cultivo) sea susceptible a ese patógeno. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #BDAF7F ")
                    p.mb-0 El medio ambiente sea propicio para la propagación de la enfermedad. 
    p.mb-5(data-aos='fade-right') Para determinar de manera general cuándo una planta se encuentra enferma, se pueden identificar los siguientes síntomas: 
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Tabla 2. 
          span Síntomas de una planta enferma 
        .tabla-a.color-acento-contenido.mb-5
          table
            thead(style="background-color: #ecdb9f")
              tr
                th Síntoma 
                th Descripción 
            tbody
              tr
                td Falta de desarrollo y crecimiento de órganos de la planta
                td Deformación en partes de la planta, entrenudos cortos, desarrollo pobre de las raíces, malformación de las hojas, falta de desarrollo de frutos y flores.
              tr
                td Marchitamiento y muerte
                td Quemazones, manchas, pudriciones, entre otros.
              tr
                td Cambios en la apariencia y color de hojas y otros órganos
                td Mosaicos, clorosis.
              tr
                td Disminución de producción
                td Frutos más pequeños y de calidad deficiente.
    p.mb-5(data-aos='fade-right') Para distinguir mediante los síntomas el agente causal de la enfermedad, de manera general se puede tener en cuenta: 
    .fondo-slyder.mn.p-5.mb-4
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Hongo en las plantas 
              p Micelio, esporas y/o #[em conidias] visibles en las raíces, haz o envés de hojas, tallos y demás órganos. Forman algodones y colonizaciones de diferentes colores, generalmente secas. También #[em mildeos] polvosos. Esporas blancas, negras y anaranjadas. Manchas anilladas en hojas y tallos. Necrosis apical de hojas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/77.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Bacteria en las plantas 
              p Pudriciones húmedas, algunas veces con mal olor. Al sumergir el tejido infectado en un vaso con agua se observa una baba o mucílago que es el tejido infectado por la bacteria. Manchas cercanas a las nervaduras de formas angulares, en hojas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/79.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Virus en las plantas
              p Enanismo en la planta, encrespamiento de órganos como las hojas, deformación de frutos. En el cultivo generalmente se da en plantas aisladas. Mosaicos, verrugas, deformaciones y manchas anulares. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/78.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') #[b La prevención de enfermedades se puede dar con:]  
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/80.png', alt='') 
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--beige")
          div(titulo="Rotación de cultivos ")
            .px-4
              p.mb-0 Cada cultivo tiene sus propias enfermedades. Si se mantiene el mismo cultivo de un año a otro en el mismo sitio, las enfermedades persisten. Con la rotación, la enfermedad no tiene hospedero al menos por un tiempo, y entonces baja el nivel de infestación y la presión de inóculo. 
          div(titulo="Variedades resistentes ")
            .px-4
              p.mb-0 Hay variedades que son resistentes a algunas enfermedades. 
          div(titulo="Manejo de residuos vegetales ")
            .px-4
              p.mb-0 Una vez finaliza el ciclo del cultivo, los restos vegetales se deben picar y enviar a la compostera para que se descompongan y se conviertan en abono. Si se dejan en el lote, la enfermedad queda en ellos y persisten en los cultivos. 
          div(titulo="Control de malezas ")
            .px-4
              p.mb-0 Algunas malezas son hospederas de enfermedades. Un cultivo enmalezado es más húmedo, lo que favorece particularmente los hongos. 
          div(titulo="Manejo de distancias de siembra ")
            .px-4
              p.mb-0 En zonas húmedas, no dejar las hileras muy cerca unas de otras, ya que favorecen la humedad y, por ende, las enfermedades. 
          
        
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--beige")
          div(titulo="Manejo de frutos  ")
            .px-4
              p.mb-0 En cultivos en los que el fruto pueda tocar el suelo, manejarlo colgándolos. 
          div(titulo="Trampas de colores ")
            .px-4
              p.mb-0 Los insectos son atraídos por los colores blanco, rojo, azul y amarillo. Se colocan trozos de plástico de 60 cm x 40 cm de estos colores y se les impregna una sustancia pegajosa. Los plásticos se colocan a unos 15-20 cm del suelo, sostenidos por dos estacas. 
          div(titulo="Policultivo ")
            .px-4
              p.mb-0 Al aumentar la biodiversidad del entorno, disminuyen también las enfermedades. 
          div(titulo="Alelopatía ")
            .px-4
              p.mb-0 Son interacciones biológicas entre las especies sembradas en la huerta. Esta condición puede ser favorable o desfavorable para el cultivo. Es el efecto de una planta sobre la otra al liberar compuestos químicos. 
          div(titulo="Podas sanitarias")
            .px-4
              p.mb-0 Consisten en eliminar la parte afectada de la planta y sacarla del cultivo, para evitar que se siga propagando. 
      .col-lg-4.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/81.png', alt='') 
    .titulo-tres: h3 Control de enfermedades
    p.mb-5(data-aos='fade-right') Cuando ya en el cultivo hay daño por enfermedades, se debe controlar bajando la infección, para evitar y frenar este daño. Para ello, se usan productos naturales que se pueden preparar en la finca, reduciendo costos de agroquímicos y con la ventaja de que no son tóxicos para humanos, animales o plantas. 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        div(style="background-color:#dceeb6 ")
          .row.justify-content-center
            .col-lg-3.col-7
              .p-lg-0.p-4: img(src='@/assets/curso/temas/82.png', alt='')
            .col-lg-9
              .p-4
                p.mb-0 #[b Control de enfermedades con biopreparados de plantas] 
                  br
                  |Los métodos de preparación son los mismos que los biopreparados para control de plagas: decocción, infusión, extracto y purín.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3 
      span Uso de productos naturales para control de enfermedades
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3 
        .tabla-a.color-acento-contenido.mb-5
          table
            thead(style="background-color: #ecdb9f")
              tr
                th Nombre
                th Para controlar
            tbody
              tr
                td Extracto de ruda
                td Antracnosis
              tr
                td Purín de caléndula
                td Bacterias
              tr
                td Extracto de ajo
                td Gota
              tr
                td Infusión o extracto de caléndula o manzanilla
                td Hongos en general
              tr
                td Purín de ortiga
                td Hongos en semilleros
              tr
                td Infusión de albahaca
                td Hongos en hojas
      .col-lg-6.col-7: img(src='@/assets/curso/temas/83.png', alt='')
    .titulo-tres: h3 Principios tradicionales del manejo de las enfermedades de las plantas
    p.mb-5(data-aos='fade-right') Los siguientes son los principios que tradicionalmente han servido de base al control de enfermedades, basados en la eliminación. La agroecología no promueve la exclusión de la enfermedad sino su manejo, de tal manera que no cause pérdidas a los cultivos, aunque la enfermedad esté presente. Dichos principios son: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/84.png', alt='') 
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--beige")
          div(titulo="Evasión")
            .px-4
              p.mb-0 Consiste en seleccionar una época del año o un lugar para implementar el cultivo, libre de la presencia de la enfermedad o con condiciones que no permitan un desarrollo de la infección.
          div(titulo="Exclusión")
            .px-4
              p.mb-0 Consiste en el manejo del cultivo en condiciones que no permitan la entrada de la infección.
          div(titulo="Erradicación")
            .px-4
              p.mb-0 Consiste en el ataque al agente infeccioso hasta lograr su ausencia total. No se usa en el manejo agroecológico.
          div(titulo="Protección")
            .px-4
              p.mb-0 Consiste en evitar la infección por medio de aplicaciones de químicos. No se usa en el manejo agroecológico.
          div(titulo="Resistencia")
            .px-4
              p.mb-0 Consiste en cultivar solamente variedades o híbridos resistentes a las infecciones. No se usa en el manejo agroecológico.
          div(titulo="Terapia")
            .px-4
              p.mb-0 Consiste en procedimientos curativos una vez la enfermedad haya logrado su presencia. No se usa en el manejo agroecológico. 
    p.mb-5(data-aos='fade-right') #[b Los métodos de manejo son:  ]
    .fondo-slyder.mn.p-5.mb-4
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo legal (reglamentario) 
              p Normatividad cuarentenaria para evitar la entrada de enfermedades a zonas libres.  
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/85.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo físico 
              p Prácticas de podas u otras que disminuyan el nivel de infección en el cultivo. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/86.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo cultural 
              p Prácticas culturales, tales como manejo integrado de arvenses, aporques, podas, cultivos intercalados y cultivos asociados. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/87.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo biológico 
              p Manejo de poblaciones de enemigos biológicos de la enfermedad a controlar. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/88.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo químico 
              p Aplicaciones de plaguicidas de origen químico. Este manejo no se contempla en el sistema agroecológico. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/89.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo genético 
              p Manipulación genética para disminuir infecciones. No se contempla en el manejo agroecológico. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/90.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Manejo integrado 
              p Conjunto de prácticas de manejo para lograr el menor daño posible a los cultivos, haciendo un uso racional de los recursos, de manera ecológica. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/91.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema5',
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
