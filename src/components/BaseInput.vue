<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    class="input"
    :class="`input--${variant}`"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  variant: { type: String, default: 'default' }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.input {
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--color-border);
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
  background: var(--color-surface);
  color: var(--color-text);
}

.input:focus {
  border-color: var(--color-accent);
}

.input--dark {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-surface);
}

.input--dark::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
</style>