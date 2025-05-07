<script setup>

import Score from "./Score.vue";
</script>

<template>
  <div class="container">
  <span class="title">
    Запомни слово
  </span>
    <div>
      <Score score="100"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--color-text-title);
  text-transform: uppercase;
}
</style>
