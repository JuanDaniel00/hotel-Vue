<!-- paleta de colores 
 fondo: #fffae0, #fce09f, #2e5845, #2e582f
  texto: #2e5845, #fffae0, #333, #fce09f, #000
-->
<template>
  <q-page class="services">
    <div class="container">
      <q-item class="q-mb-lg">
        <q-item-section>
          <q-item-label class="text-h4 text-weight-bold">Nuestros Servicios</q-item-label>
        </q-item-section>
      </q-item>

      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4" v-for="service in services" :key="service.id">
          <q-card class="service-card">
            <q-img :src="service.image" :alt="service.name" class="actividad-imagen" />

            <q-card-section>
              <div class="text-h6 q-mb-sm">{{ service.name }}</div>
              <div class="text-body2">{{ service.description }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';


const services = ref([
  {
    id: 1,
    name: "Alojamiento de Lujo",
    description: "Habitaciones y suites diseñadas para el máximo confort y relajación.",
    image: "./img/cuartos.jpeg",
  },
  {
    id: 2,
    name: "Restaurante Gourmet",
    description: "Disfruta de una experiencia culinaria excepcional con platos exquisitos y vistas panorámicas.",
    image: "./img/restaurante.jpg",
  },
  {
    id: 3,
    name: "Spa y Bienestar",
    description: "Rejuvenece tu cuerpo y mente con nuestros tratamientos de spa y masajes relajantes.",
    image: "./img/spa.jpg",
  },
  {
    id: 4,
    name: "Deportes Extremos",
    description: "Vive la adrenalina con actividades como rafting, parapente, bungee jumping y espeleología.",
    image: "./img/bungee.jpg",
  },
  {
    id: 5,
    name: "Piscina con Vistas",
    description: "Relájate en nuestra piscina mientras disfrutas de las impresionantes vistas de los alrededores.",
    image: "./img/piscinaVistas.jpg",
  },
  {
    id: 6,
    name: "Excursiones y Tours",
    description: "Descubre los lugares más fascinantes de la región con nuestras excursiones guiadas.",
    image: "./img/espeleologia.jpg",
  },
  {
    id: 7,
    name: "Eventos y Bodas",
    description: "Celebra tus eventos especiales en un entorno único y con servicios personalizados.",
    image: "./img/bodas.jpg",
  },
  {
    id: 8,
    name: "Actividades para Niños",
    description: "Diviértete en familia con actividades y entretenimiento para los más pequeños.",
    image: "./img/niños.jpg",
  },
  {
    id: 10,
    name: "Gimnasio y Fitness",
    description: "Mantente en forma durante tu estancia con nuestro completo gimnasio y clases de fitness.",
    image: "./img/gym.jpg",
  }
]);
</script>

<style lang="scss" scoped>
.services {
  background-color: #fffae0;
  padding: 32px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  border: 1px solid #fce09f;
  border-radius: 8px;
}

.service-card img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.text-h4 {
  color: #2e5845;
}

.text-h6 {
  color: #2e5845;
}

.text-body2 {
  color: #333;
}

.col-12,
.col-sm-6,
.col-md-4,
.col-lg-3,
.col-xl-2 {
  padding-left: 16px;
  padding-right: 16px;
}

.actividad-imagen {
  max-width: 100%;
  height: 250px;
  /* Altura fija para mantener la consistencia */
  object-fit: cover;
  /* Ajusta la imagen para que cubra el espacio */
}
</style>
