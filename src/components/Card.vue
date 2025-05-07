<script setup>
const {number, text} = defineProps({
  number: {type: String, required: true},
  text: {type: String, required: true},
})
const emit = defineEmits(["flip", "change-status"])
</script>

<template>
  <div class="card">
    <div class="inner">
      <span class="number">{{ number }}</span>
      <span class="text">{{ text }}</span>
      <button class="button" @click="emit('flip', number)">Перевернуть</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  min-height: 376px;

  border-radius: 16px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  background: var(--color-card-bg);

  padding: 28px 19px;
}

.inner {
  height: 100%;
  border: 1px solid var(--color-card-border);
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: -7px;
  left: 16px;
  display: block;
  background: var(--color-card-bg);
}

.text {
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
}

.button {
  border: none;
  cursor: pointer;
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  background: var(--color-card-bg);
  display: block;
  bottom: -11px;
  left: 25%;
}
</style>
