<script setup>
import { ref } from 'vue';

const actividades = ref([
  {
    nombre: 'Parapente',
    descripcion: 'Vuela sobre paisajes impresionantes con total seguridad y experimenta la libertad del vuelo.',
    dificultad: 'Moderada',
    requisitos: 'Buena salud física, sin miedo a las alturas.',
    precio: '$150',
    imagen: './img/parapente.jpg',
  },
  {
    nombre: 'Rafting',
    descripcion: 'Desciende por rápidos emocionantes en balsa y siente la adrenalina del río.',
    dificultad: 'Alta',
    requisitos: 'Saber nadar, buena condición física.',
    precio: '$120',
    imagen: './img/rafting.webp',
  },
  {
    nombre: 'Escalada en roca',
    descripcion: 'Supera desafiantes rutas de escalada en montañas y acantilados.',
    dificultad: 'Alta',
    requisitos: 'Buena condición física, sin miedo a las alturas.',
    imagen: './img/roca.jpg',
  },
  {
    nombre: 'Bungee jumping',
    descripcion: 'Salta al vacío desde un puente o plataforma y siente la adrenalina de la caída libre.',
    dificultad: 'Alta',
    requisitos: 'Buena salud física, sin problemas cardíacos.',
    precio: '$80',
    imagen: './img/bungee.jpg',
  },
  {
    nombre: 'Paracaidismo',
    descripcion: 'Salta desde un avión a gran altura y disfruta de la caída libre antes de abrir el paracaídas.',
    dificultad: 'Alta',
    requisitos: 'Buena salud física, sin problemas cardíacos.',
    precio: '$200',
    imagen: './img/paracaidismo.webp',
  },
  {
    nombre: 'Espeleología',
    descripcion: 'Explora cuevas subterráneas y descubre paisajes ocultos bajo tierra.',
    dificultad: 'Moderada',
    requisitos: 'Buena condición física, sin claustrofobia.',
    precio: '$100',
    imagen: './img/espeleologia.jpg',
  }
]);
</script>
<template>
  <div class="q-pa-md background">
    <h1 class="text-h4 text-center text-bold q-mb-lg">Deportes Extremos</h1>

    <div v-for="(actividad, index) in actividades" :key="actividad.nombre"
      class="actividad-item q-pa-md q-mb-md shadow-2 rounded-borders"
      :style="{ backgroundColor: index % 2 === 0 ? '#f5f5dc' : '#284638', color: index % 2 === 0 ? 'black' : 'white' }">
      <div class="row items-center q-col-gutter-md"
        :style="{ 'flex-direction': index % 2 === 0 ? 'row' : 'row-reverse' }">
        <div class="col-12 col-md-4">
          <q-img :src="actividad.imagen" :alt="actividad.nombre" class="actividad-imagen rounded-borders" />
        </div>
        <div class="col-12 col-md-8">
          <div class="text-h5 text-bold">{{ actividad.nombre }}</div>
          <div class="text-body1">{{ actividad.descripcion }}</div>
          <div class="text-caption text-weight-bold">
            <p>Dificultad: {{ actividad.dificultad }}</p>
            <p>Requisitos: {{ actividad.requisitos }}</p>
            <p v-if="actividad.precio">Precio: {{ actividad.precio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background {
  background-color: #32323243;
  /* Gris claro de fondo */
}

.actividad-item {
  transition: transform 0.2s, box-shadow 0.2s;
  /* Transiciones suaves */
}

.actividad-item:hover {
  transform: translateY(-5px);
  /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra más pronunciada */

}

.actividad-imagen {
  max-width: 100%;
  height: 250px;
  /* Altura fija para mantener la consistencia */
  object-fit: cover;
  /* Ajusta la imagen para que cubra el espacio */
}
</style>