<script setup>
import { ref } from 'vue';

const habitaciones = ref([
  {
    "nombre": "Suite Junior",
    "descripcion": "Amplia suite con sala de estar, cama king size, jacuzzi y balcón privado.",
    "precio": 250,
    "imagen": "/img/hb2.png"
  },
  {
    "nombre": "Suite Presidencial",
    "descripcion": "Lujosa suite con sala de estar, comedor, cama king size, jacuzzi y terraza privada.",
    "precio": 400,
    "imagen": "/img/hb3.png"
  },
  {
    "nombre": "Habitación Familiar",
    "descripcion": "Espaciosa habitación con dos camas dobles, baño privado y vistas al jardín.",
    "precio": 180,
    "imagen": "/img/hb4.png"
  },
  {
    "nombre": "Habitación Deluxe",
    "descripcion": "Elegante habitación con cama king size, baño privado y vistas al mar.",
    "precio": 200,
    "imagen": "/img/hb5.png"
  },
  {
    "nombre": "Suite Nupcial",
    "descripcion": "Romántica suite con cama king size, jacuzzi, chimenea y terraza privada.",
    "precio": 300,
    "imagen": "/img/hb6.png"
  },
  {
    "nombre": "Habitación Doble",
    "descripcion": "Acogedora habitación con dos camas individuales, baño privado y vistas al jardín.",
    "precio": 150,
    "imagen": "/img/hb7.png"
  },
  {
    "nombre": "Suite Ejecutiva",
    "descripcion": "Moderna suite con sala de estar, cama king size, baño de lujo y balcón privado.",
    "precio": 280,
    "imagen": "/img/hb8.png"
  },
  {
    "nombre": "Habitación Triple",
    "descripcion": "Confortable habitación con tres camas individuales, baño privado y vistas al jardín.",
    "precio": 170,
    "imagen": "/img/hb9.png"
  },
  {
    "nombre": "Suite Familiar",
    "descripcion": "Amplia suite con dos habitaciones, sala de estar, cama king size y jacuzzi.",
    "precio": 350,
    "imagen": "/img/hb10.png"
  }
])
</script>

<template>
  <q-page class="q-pa-md ">
    <div class="container background">
      <h1 class="text-h4">Nuestras Habitaciones</h1>

      <div class="row q-col-gutter-md">
        <div v-for="habitacion in habitaciones" :key="habitacion.nombre" class="col-12 col-md-4">
          <q-card class="my-card">
            <q-img class="img" :src="habitacion.imagen" :ratio="16 / 9" />
            <q-card-section>
              <div class="text-h5">{{ habitacion.nombre }}</div>
              <div class="text-subtitle2">{{ habitacion.descripcion }}</div>
              <div class="text-caption">Precio por noche: ${{ habitacion.precio }}</div>
              <q-btn to="/reservas" color="primary" label="Reservar" class="q-mt-md btn" no-caps />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>



<style scoped>
.background {
  background-color: #fffae0db;
  padding: 20px;
  border-radius: 8px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.my-card {
  background-color: #fce09f;
  border-radius: 8px;
  margin-bottom: 16px;
}

.img {
  border-radius: 8px 8px 0 0;
}

.text-h4 {
  color: #2e5845;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  /* Centra el título */
}

.text-h5 {
  color: #2e5845;
  margin-bottom: 8px;
  font-weight: bolder;
}

.text-subtitle2 {
  color: #333;
  margin-bottom: 8px;
}

.text-caption {
  color: #5D4037;
  font-weight: bolder;
  font-size: medium;
}

.btn {
  background-color: #2e5845 !important;
  color: #fffae0;
  margin-top: 16px;
}
</style>
