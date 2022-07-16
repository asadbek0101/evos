<template>
    <header>
           <button @click="$emit('show', show)"> <font-awesome-icon icon="fa-solid fa-suitcase" /> Savat</button>
    </header>
</template>

<script>
export default {
  name: "AppHeader",
  props:{
    show:Boolean
  }
}
</script>

<style scoped lang="scss">
    header{
      padding: 10px 100px;
      text-align: right;
      box-shadow: 0 0 3px 2px #beb6b6;
      background-color: white;
      button{
        border:none;
        background-color: #f6f8f9;
        cursor:pointer;
        padding: 11px 12px;
        border-radius: 4px;
        font-weight: bold;
        font-size: 18px;
        color: #000;
        svg{
          margin-right: 10px;
        }
      }
    }
</style>