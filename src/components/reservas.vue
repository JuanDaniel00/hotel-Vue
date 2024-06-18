<script setup>import { ref } from 'vue';
import Swal from 'sweetalert2';


const tiposHabitaciones = ['Estándar', 'Deluxe', 'Suite'];

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  fechaLlegada: '',
  fechaSalida: '',
  tipoHabitacion: '',
  numeroPersonas: 1,
});

// Función para validar el correo electrónico
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const submitForm = () => {
  // Validar que todos los campos estén llenos
  if (Object.values(formData.value).some(value => !value)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor llene todos los campos',
    });
    return;
  }

  // Validar el correo electrónico
  if (!isValidEmail(formData.value.email)) {
    Swal.fire({
      icon: 'error',
      title: 'Correo inválido',
      text: 'Por favor, ingrese un correo electrónico válido.',
    });
    return;
  }

  // Mostrar alerta de éxito
  Swal.fire({
    icon: 'success',
    title: '¡Reserva realizada!',
    text: 'Tu reserva ha sido realizada con éxito.',
    confirmButtonText: 'Aceptar'
  });

  // Limpiar los datos del formulario
  Object.keys(formData.value).forEach(key => {
    formData.value[key] = '';
  });
};

</script>



<template>
  <q-page class="q-pa-md background">
    <h1 class="text-h4">Reservar Habitación</h1>

    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input v-model="formData.nombre" label="Nombre Completo" lazy-rules
        :rules="[val => val && val.length > 0 || 'Por favor ingrese su nombre']" />
      <q-input v-model="formData.email" label="Correo Electrónico" lazy-rules :rules="[
        val => val && val.length > 0 || 'Por favor ingrese su correo',
        isValidEmail
      ]" />
      <q-input v-model="formData.telefono" label="Teléfono" lazy-rules
        :rules="[val => val && val.length > 0 || 'Por favor ingrese su teléfono']" />

      <q-input v-model="formData.fechaLlegada" filled type="date" label="Fecha de Llegada" />
      <q-input v-model="formData.fechaSalida" filled type="date" label="Fecha de Salida" />

      <q-select v-model="formData.tipoHabitacion" :options="tiposHabitaciones" label="Tipo de Habitación">
        <template v-slot:selected-item="scope">
          <div class="custom-selected-item">
            {{ scope.opt }}
          </div>
        </template>

        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label>{{ scope.opt }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-input v-model.number="formData.numeroPersonas" type="number" label="Número de Personas" min="1" />
      <q-btn label="Reservar" type="submit" />
    </q-form>
  </q-page>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to right, #ffecd2, #fce09f);
  box-shadow: 0 0 0 10px rgba(255, 236, 210, 0.367);
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.text-h4 {
  color: #2e5845;
  font-weight: bold;
}

.q-form {
  max-width: 400px;
  margin: 0 auto;
}

.q-gutter-md {
  padding: 0 24px;
}

.q-input {
  margin-bottom: 16px;
}

.q-btn {
  margin-top: 16px;
}

.q-select {
  margin-bottom: 16px;
}

.q-btn {
  background-color: #2e5845;
  color: #fffae0;
}

.q-btn:hover {
  background-color: #2e582f;
}

/* Estilo para el menú desplegable */
.q-menu {
  background-color: #fce09f;
  /* Color de fondo del menú */
  color: #333;
  /* Color de texto del menú */
  border-radius: 8px;
  /* Bordes redondeados */
}

/* Estilo para los elementos del menú */
.q-item {
  padding: 10px 15px;
  background: #fce09f;
}

.q-item__label {
  font-weight: 500;
  color: #000;
}

/* Estilo para el elemento seleccionado */
.q-item--active .q-item__label {
  color: #2e5845;
  font-weight: bolder;
  /* Color del texto seleccionado */
}
</style>