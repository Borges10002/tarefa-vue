<template>
  <div>
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="progress">
        <span
          >Progress: <strong>{{ progress }} / {{ max }}</strong></span
        >
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
  },
};
</script>

<style></style>
