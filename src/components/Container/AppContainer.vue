<template>
<div class="container">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: "AppContainer"
}
</script>

<style scoped lang="scss">
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
  }
</style>