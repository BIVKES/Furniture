<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--full': full }
    ]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' },
  full: Boolean,
  to: String,
  href: String
})

const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})

const handleClick = (event) => {
  emit('click', event)
}
</script>

<style scoped>
    .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.02em;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    }

    .btn--primary {
    padding: 16px 32px;
    background: var(--color-accent);
    color: var(--color-surface);
    font-size: 14px;
    }

    .btn--primary:hover {
    background: var(--color-accent);
    transform: translateY(-1px);
    }

    .btn--secondary {
    padding: 16px 32px;
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text);
    font-size: 14px;
    }

    .btn--secondary:hover {
    background: var(--color-text);
    color: var(--color-surface);
    }

    .btn--large {
    padding: 20px 40px;
    font-size: 16px;
    }

    .btn--mini {
      padding: 12px;
      font-size: 13px;
    }
</style>