<script setup>
import ToolBar from "@/components/ToolBar.vue";
</script>

<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view v-slot="{Component}">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

/* router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
