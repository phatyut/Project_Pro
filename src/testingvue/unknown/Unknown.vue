<template>
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>

<script>
export default {
  data() {
    return {
      date: "2026-01-25"
    }
  },
  methods: {
    toTitleDate(d) {
      // Long, descriptive format
      return new Date(d).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    },
    formatDate(d) {
      // Short, user-facing format
      return new Date(d).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    }
  }
}
</script>
