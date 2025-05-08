<script setup>
import Score from "./Score.vue"

const props = defineProps({
  score: { type: Number, required: true },
})
</script>

<template>
  <div class="container">
    <span class="title"> Запомни слово </span>
    <div>
      <Score :score="props.score" />
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
