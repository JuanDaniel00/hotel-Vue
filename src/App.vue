<script>
import { ref } from 'vue'

export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<template>
  <q-layout view="hHr lpr fFf">

    <q-header reveal none class="bg-primary text-white header">
      <q-toolbar class="divBtnMenu">
        <div class="contBtnMenu" @click="toggleRightDrawer">
          <q-btn class="btnMenu " dense flat round icon="menu" size="20px" style="pointer-events: none;" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <q-list class="menuLateral">
        <div class="divCloseMenu">
          <q-toolbar class="bg-primary text-white QCloseMenu">
            <q-btn class="btnCloseMenu" dense flat round icon="close" @click="toggleRightDrawer" />
          </q-toolbar>
        </div>

        <div class="divContMenu">
          <div class="divItemsMenu">

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Inicio</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Servicios</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Habitaciones</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Deportes</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Contacto</q-item-label>
              </q-item-section>
            </q-item>

          </div>

          <div class="divRedesMenu">
            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon name="fab fa-whatsapp"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon name="fab fa-instagram"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon name="fab fa-twitter"></q-icon>
              </q-item-section>
            </q-item>
          </div>
        </div>

      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
}

.header {
  background-color: #a9a9a900 !important;
}

.header .q-toolbar {
  padding: 0px;
  height: 100px;
  width: 100px;
}

.divBtnMenu {
  display: flex;
  height: 100%;
  width: 100%;
}

.contBtnMenu {
  background-color: #1976D2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 0 0 100% 0;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contBtnMenu:hover {
  background-color: #1c4b7a;
}

.btnMenu {
  color: white;
  position: absolute;
  left: 19%;
  top: 19%;
  z-index: 1;
}


.menuLateral {
  background-color: #1976D2;
  height: 100%;
}

.divContMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.divCloseMenu {
  display: flex;
  justify-content: flex-end;
}

.QCloseMenu {
  background-color: #ebeff4 !important;
  display: flex;
  justify-content: flex-end;
}

.btnCloseMenu {
  color: #1976D2;
}

.divItemsMenu {
  margin-top: 20px;
}

.divRedesMenu {
  display: flex;
  justify-content: space-around;
}

.divRedesMenu q-item {
  background-color: #ebeff4;
  border-radius: 50%;
  padding: 5px;
}
</style>
