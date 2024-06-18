<template>
  <q-page class="q-pa-md no-border">
    <div class="row full-width contenedor1">
      <div class="col-12 col-md-6 boxShadow">
        <q-carousel animated v-model="slide" infinite autoplay arrows height="400px" transition-prev="slide-right"
          transition-next="slide-left">
          <q-carousel-slide :name="1" img-src="/img/piscina.jpg" />
          <q-carousel-slide :name="2" img-src="/img/cuartos.jpeg" />
          <q-carousel-slide :name="3" img-src="/img/vistas.jpg" />
        </q-carousel>
      </div>

      <div class="col-12 col-md-6 content-area">
        <h1 class="text-h4">Bienvenido al Hotel Mirador del Fonce</h1>
        <p>
          Descubre la belleza de San Gil, Santander, desde nuestro acogedor hotel.
          Sumérgete en nuestra piscina con vistas panorámicas, relájate en nuestro
          spa de lujo y deléitate con los sabores de nuestro restaurante gourmet.
        </p>
        <q-btn to="/reservas" color="secondary" label="Reservar ahora" class="q-mt-md" no-caps />
      </div>
    </div>

    <div class="row full-width q-mt-xl contenedor2 contCards">
      <div class="col-12 col-md-4">
        <q-card>
          <q-img class="card-image" src="/img/piscinaVistas.jpg" />
          <q-card-section>
            <div class="text-h6">Piscina con Vistas Panorámicas</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-img class="card-image" src="/img/spa.jpg" />
          <q-card-section>
            <div class="text-h6">Spa y Relajación</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-img class="card-image" src="/img/restaurante.jpg" />
          <q-card-section>
            <div class="text-h6">Restaurante Gourmet</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
</script>

<style scoped>
.contCards {
  display: flex;
  /* Activa flexbox para alinear los elementos */
  justify-content: center;
  /* Centra los elementos horizontalmente */
  flex-wrap: wrap;
  /* Permite que las imágenes se ajusten en varias filas si es necesario */
  gap: 10px;
  /* Espacio entre las tarjetas */
  padding: 20px 0;
  /* Espacio superior e inferior */
  /* Elimina el padding lateral */
}

.col-12.col-md-4 {
  /* Estilo para cada columna (tarjeta) */
  flex: 1 1 30%;
  /* Hace que cada tarjeta ocupe un tercio del espacio disponible */
  max-width: 30%;
  /* Limita el ancho máximo para evitar que las tarjetas se estiren demasiado */
  min-width: 250px;
  /* Establece un ancho mínimo para que las tarjetas no se reduzcan demasiado */
}

/* Paleta de colores */
.contenedor1 {
  background-color: #f5f5dc;
  /* Crema */
  color: #2e5845;
  /* Verde */
  padding: 2% 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Sombra sutil */
  margin-top: 2%;
  /* Espacio superior */
}

.contenedor2 {
  background-color: #2e5845;
  /* Verde */
  color: #f5f5dc;
  /* Crema */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Sombra sutil */
  margin-top: 10%;
}

/* Tipografía */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
}

p,
a,
button {
  font-family: "Open Sans", sans-serif;
}

/* Botón */
.q-btn {
  background-color: #b8860b;
  /* Dorado */
  color: white;
}

/* Otros estilos */
.no-border {
  border: none;
  padding: 0;
}

.boxShadow {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.505);
}

.text-h6 {
  font-size: 1.25rem;
  color: #2e5845;
}

.card-image {
  height: 200px;
  object-fit: cover;
}

.content-area {
  padding: 20px 20px 20px 40px;
  /* Espacio interno */
  display: flex;
  /* Activa flexbox para alinear los elementos */
  flex-direction: column;
  /* Alinea los elementos verticalmente */
  justify-content: center;
  /* Centra los elementos horizontalmente */
  /* Espacio entre los elementos */
  font-family: "Open Sans", sans-serif;
  /* Tipografía */
  color: #2e5845;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: justify;
  /* Justifica el texto */

}

.q-carousel {
  border-radius: 10px;
  /* Bordes redondeados para el carrusel */
  overflow: hidden;
}
</style>
