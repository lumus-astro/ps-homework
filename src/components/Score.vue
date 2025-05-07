<script setup>
import IconLike from "../icons/IconLike.vue";

const props = defineProps({
  score: {type: Number, required: true}
})
</script>

<template>
  <div class="score">
    {{ props.score }}
    <IconLike/>
  </div>
</template>

<style scoped>
.score {
  padding: 12px 24px 12px 24px;
  border: none;
  border-radius: 36px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--color-btn-bg-primary);
  background: var(--color-btn-bg-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
