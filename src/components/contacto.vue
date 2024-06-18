<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-md-8 col-sm-10 background">
        <div class="q-mt-xl">
          <h3 class="text-h5 q-mb-md">Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3963.8355511546097!2d-73.12894414610234!3d6.542440122696085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1718741661248!5m2!1ses-419!2sco"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="q-mb-lg contFormData">
          <div class="q-mb-lg data">
            <h2 class="text-h4 q-mb-md">Contacto</h2>
            <p class="text-subtitle1">
              <b>Hotel Mirador del Fonce</b><br>
              San Gil, Santander, Colombia<br>
              Teléfono: +57 (7) 123 4567<br>
              Email: info@miradordelfonce.com<br>
              Horario de atención: 8:00 AM - 8:00 PM
            </p>
          </div>

          <q-form @submit="submitForm" class="q-gutter-md form">
            <q-input v-model="name" label="Nombre" filled />
            <q-input v-model="email" label="Correo electrónico" filled type="email" />
            <q-input v-model="message" label="Mensaje" filled type="textarea" />
            <q-btn label="Enviar" type="submit" color="primary" />
          </q-form>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2';


export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const submitForm = () => {

      if (!name.value || !email.value || !message.value) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, complete todos los campos.',
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarnos. Nos pondremos en contacto con usted lo antes posible.',
      });

      name.value = '';
      email.value = '';
      message.value = '';

    };

    return { name, email, message, submitForm };
  },
};
</script>

<style scoped>

.contFormData{
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
}

.data{
  width: 50%;
}

.form{
  width: 50%;
}

.background{
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.text-h4{
  color: #2e5845;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.text-h5{
  color: #2e5845;
  margin-bottom: 8px;
  font-weight: bolder;
}

.text-subtitle1{
  color: #333;
  margin-bottom: 8px;
}

.text-caption{
  color: #5D4037;
  font-weight: bolder;
  font-size: medium;
}

.btn{
  background-color: #2e5845 !important;
  color: #fffae0;
  margin-top: 16px;
}



</style>
