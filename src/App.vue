<script setup>
import Button from "./components/Button.vue";
import Toolbar from "./components/Toolbar.vue";
import Card from "./components/Card.vue";
</script>

<template>
  <div class="page">
    <div class="header">
      <Toolbar/>
    </div>

    <div class="content">
      <Button>
        <template #default>Начать игру</template>
      </Button>

      <Card/>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-bg-main);
}

.header {
  height: 120px;
  padding: 0 60px;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
</style>
