<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-9">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Demo System
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="drawerColor">
      <div class="navigationStyle">
        <q-item v-for="link in essentialLinks" :key="link.title" :to="link.links" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="fontStyle">{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-drawer>

    <q-page-container class="backColor">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: [
        {
          title: 'User Dashboard',
          icon: 'dashboard',
          links: '/dashboard'
        },
        {
          title: 'My Information',
          icon: 'favorite',
          links: '/myInfo'
        }
      ],
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>

.backColor{
  background-color: #f7f7f7
}

</style>

