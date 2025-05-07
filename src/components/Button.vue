<script setup></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  width: 100%;
  max-width: 335px;
  padding: 16px 10px;
  border: none;
  border-radius: 100px;
  font-family: inherit;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0;
  color: var(--color-btn-text);
  background: var(--color-btn-bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button:hover {
  background: var(--color-btn-bg-primary-hover);
}
</style>
