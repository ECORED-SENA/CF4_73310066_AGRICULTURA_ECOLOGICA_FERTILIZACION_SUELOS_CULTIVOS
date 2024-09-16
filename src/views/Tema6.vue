<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-seis
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Procedimiento para obtener bioinsumos 
    p.mb-5(data-aos='fade-right') Los bioinsumos o biopreparados son sustancias o mezclas de origen animal, vegetal y/o mineral con materiales provenientes de la naturaleza, que sirven tanto para la nutrición de las plantas como para el manejo de plagas y enfermedades. 
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Sus ventajas " style="background-color: #dceeb6 ")
            h4 Sus ventajas 
            p Incluyen la disminución de la dependencia de insumos externos, bajos costos, biodegradables y no contaminantes. No generan resistencia como lo hace el uso continuo de plaguicidas químicos. 
          .tarjeta.p-4(titulo="Las desventajas" style="background-color: #dceeb6 ")
            h4 Las desventajas
            p Son que se necesita capacitación para su exitosa preparación, se requiere tiempo para su elaboración, algunos pierden sus propiedades en almacenamiento, tienen efecto residual bajo por su rápida degradación, algunos son tóxicos a pesar de ser naturales, y algunos no han sido validados científicamente. 
      .col-lg-3.col-6: img(src='@/assets/curso/temas/92.png', alt='')
    .tarjeta.h-100.p-4(style="background-color: #f3d02c ").mb-5
      .d-flex.align-items-center
        .row.justify-content-center.align-items-center
          .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.svg', alt='')
          .col-lg-8
            h4 Pódcast
            p Los invitamos  a escuchar el pódcast de procedimiento para obtener bioinsumost. En este episodio, Don Campos, Asusena y Evaristo compartirán recetas y técnicas para preparar bioinsumos caseros. Los oyentes aprenderán a utilizar ingredientes naturales que pueden encontrar en su finca, permitiéndoles proteger y nutrir sus cultivos de forma ecológica y económica.  
            TarjetaAudio.mb-3.bg-white(
              texto="Procedimiento para obtener bioinsumos"
              :audio="require('../assets/curso/temas/audio3.mp3')"
            )
    p.mb-5(data-aos='fade-right') A continuación, se indican los procedimientos para la obtención de bioinsumos básicos en el control de plagas y enfermedades de los cultivos: 
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1 Preparación de caldo de ceniza 
    p.mb-5(data-aos='fade-right') Solución hecha de ceniza de madera para mejorar la fertilidad del suelo y controlar plagas.  
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Insumos" :icono="require('@/assets/curso/temas/93.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 Los insumos se requieren son:  
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 5 kg de ceniza bien cernida. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 10 L de agua.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Caneca de 8 gal. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 1/2 lb de jabón de coco. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Olla o caneca metálica para cocinarlo.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/96.png', alt='')
      .py-4.py-md-5(titulo="Preparación " :icono="require('@/assets/curso/temas/94.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El proceso se preparación es:  
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold A
                p.mb-0  Mezclar el agua, la ceniza y el jabón desmenuzado. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold B
                p.mb-0 Calentar y dejar hervir por 20 minutos, revolviendo bien. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold C
                p.mb-0 Dejar enfriar. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold D
                p.mb-0  Colar. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold E
                p.mb-0  Guardar en la caneca plástica.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/97.png', alt='')
      .py-4.py-md-5(titulo="Usos" :icono="require('@/assets/curso/temas/95.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El uso que se le debe dar es:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Sacar 1 L de mezcla y agregarlo a la fumigadora de 20 L, completar con agua limpia.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Aplicar al follaje de los cultivos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Sirve para la desinfección de semilleros, control de hongos del suelo, control de cochinillas, escamas y gusanos cogolleros.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/98.png', alt='')
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.2 Preparación de purín de helecho 
    p.mb-5(data-aos='fade-right') Fermentado de helecho usado como fertilizante y repelente natural de insectos. 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Insumos" :icono="require('@/assets/curso/temas/93.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 Los insumos se requieren son:  
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Caneca limpia que no sea de color rojo ni amarillo. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Las plantas que se utilicen no pueden estar fumigadas. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Agua limpia, preferiblemente de lluvia.  
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Levadura de panadería. 
          .col-lg-4.col-7: img(src='@/assets/curso/temas/101.png', alt='')
      .py-4.py-md-5(titulo="Preparación " :icono="require('@/assets/curso/temas/94.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El proceso se preparación es:  
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold A
                p.mb-0  Picar muy bien la planta que se va a utilizar, por ejemplo, helecho marranero. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold B
                p.mb-0 Tomar 3 partes de helecho picado finamente y colocarlo en el fondo de la caneca. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold C
                p.mb-0 Agregar 7 partes de agua. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold D
                p.mb-0  Agregar 1 cucharadita de levadura. Revolver bien.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold E
                p.mb-0  Cubrir con una tela. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold F
                p.mb-0  Colocar, si es posible, la caneca debajo de un árbol frondoso. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold G
                p.mb-0  Revolver diariamente durante 7-10 días.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold H
                p.mb-0  Los primeros días el purín “hierve” e incluso produce malos olores. Cuando cesa la efervescencia y deja de oler, ya está listo. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold I
                p.mb-0  Colar el purín y guardar en un recipiente tapado. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span(style="color: #12263F ").fw-bold J
                p.mb-0  El bagazo que quedó en el colador se puede usar (en el caso del helecho) alrededor de las plantas para ahuyentar hormigas arrieras o también incorporarlo a la pila de compostaje. 
          .col-lg-4.col-7: img(src='@/assets/curso/temas/99.png', alt='')
      .py-4.py-md-5(titulo="Usos" :icono="require('@/assets/curso/temas/95.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El uso que se le debe dar es:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Colocar 5 galones de purín en la caneca de 55 galones.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Completar con agua.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Agregar 20-60 g de jabón blanco desmenuzado.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Aplicar al suelo en el caso del purín de helecho. Otros purines se pueden agregar directamente a las plantas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Si no se necesita preparar esta cantidad de purín, se pueden disminuir las cantidades, siempre conservando las proporciones.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/100.png', alt='')
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.3 Preparación de purín con base en ajo y ají 
    p.mb-5(data-aos='fade-right') Mezcla fermentada de ajo y ají utilizada como insecticida orgánico y fungicida. 
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Insumos" :icono="require('@/assets/curso/temas/93.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 Los insumos se requieren son:  
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 2 cabezas de ajo. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 3 cucharadas de ají picante.
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 6 cucharadas de alcohol. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 8 cucharadas de aceite de cocina. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 1/4 de barra de jabón de coco. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 20 L de agua.
              
          .col-lg-4.col-7: img(src='@/assets/curso/temas/102.png', alt='')
      .py-4.py-md-5(titulo="Preparación " :icono="require('@/assets/curso/temas/94.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El proceso se preparación es:  
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Moler los ajos con el ají. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Agregar el alcohol.
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Completar a 2 L con agua limpia y dejar durante 3 dias. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 A los tres días, aparte mezclar jabón con el aceite en 1L de agua. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Agregar a la fumigadora la mezcla de ajo-ají y la mezcla de aceite-jabón, todo colado. 
              
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Completar a 20 L en la fumigadora.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/103.png', alt='')
      .py-4.py-md-5(titulo="Usos" :icono="require('@/assets/curso/temas/95.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 El uso que se le debe dar es:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Para control de pulgones y mosca blanca.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Aplicar temprano en la mañana o pasada la tarde para evitar los momentos más soleados.
              li.d-flex
                i.fas.fa-check-circle(style="color: #BDAF7F ")
                p.mb-0 Dirigir la aplicación al follaje.
              
          .col-lg-4.col-7: img(src='@/assets/curso/temas/104.png', alt='')










</template>

<script>
export default {
  name: 'Tema6',
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
