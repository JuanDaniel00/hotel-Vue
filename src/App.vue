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
  <q-layout view="hHr lpr fFf" class="animated-background">

    <q-header reveal none class="bg-primary text-white header ">
      <q-toolbar class="divBtnMenu">
        <div class="contBtnMenu" @click="toggleRightDrawer">
          <q-btn class="btnMenu " dense flat round icon="menu" size="20px" style="pointer-events: none;" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated :overlay="false">
      <q-list class="menuLateral">
        <div class="divCloseMenu">
          <q-toolbar class="bg-primary text-white QCloseMenu">
            <q-btn class="btnCloseMenu" dense flat round icon="close" @click="toggleRightDrawer" />
          </q-toolbar>
        </div>

        <div class="divContMenu">
          <div class="divItemsMenu">

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Inicio</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/servicios">
              <q-item-section avatar>
                <q-icon name="build"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Servicios</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/habitaciones">
              <q-item-section avatar>
                <q-icon name="hotel"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Habitaciones</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/deportes">
              <q-item-section avatar>
                <q-icon name="sports_soccer"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Deportes</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/contacto">
              <q-item-section avatar>
                <q-icon name="contacts"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Contacto</q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div class="divRedesMenu">
            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon class="iconSocial" name="fab fa-whatsapp"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon class="iconSocial" name="fab fa-instagram"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-icon class="iconSocial" name="fab fa-twitter"></q-icon>
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
  background-color: #2e5845;
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
  background-color: #2e582f;
}

.btnMenu {
  color: #fffae0 !important;
  position: absolute;
  left: 19%;
  top: 19%;
  z-index: 1;
}


.menuLateral {
  background-color: #24533e;
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
  background-color: #ffec84 !important;
  display: flex;
  justify-content: flex-end;
}

.btnCloseMenu {
  color: #2e5845 !important;
}

.divItemsMenu {
  margin-top: 20px;
}

.divRedesMenu {
  display: flex;
  justify-content: space-around;
}


.iconSocial {
  color: #ffec84;
  font-size: 20px;
}
</style>
