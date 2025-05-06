<script setup>
import Button from "./components/Button.vue";
</script>

<template>
  <div class="page">
    <Button>
      <template #default>Начать игру</template>
    </Button>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-main);
}
</style>
