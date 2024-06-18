import Contacto from "../components/contacto.vue";
import Deportes from "../components/deportes.vue";
import Habitaciones from "../components/habitaciones.vue";
import Index from "../components/index.vue";
import Servicios from "../components/servicios.vue";
import Reservas from "../components/reservas.vue";
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    { path: '/contacto', component: Contacto },
    { path: '/deportes', component: Deportes },
    { path: '/habitaciones', component: Habitaciones },
    { path: '/servicios', component: Servicios },
    { path: '/reservas', component: Reservas },
    { path: '/', component: Index }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});