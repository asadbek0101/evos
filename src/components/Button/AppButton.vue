<template>
  <button @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton"
}
</script>

<style scoped lang="scss">
      button{
        width: 100%;
        border: none;
        cursor: pointer;
        background-color: green;
        color: white;
        padding: 14px;
        border-radius: 4px;
        font-size: 20px;
      }
</style>