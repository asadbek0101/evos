<template>
    <div id="card">
      <img :src="img" alt="">
      <p class="title">{{title}}</p>
      <p class="discreption">{{discreption}}</p>
      <p class="price">{{price}} so'm</p>
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "AppCard",
  props:{
    img:String,
    title:String,
    price:Number,
    discreption:String
  }
}
</script>

<style scoped lang="scss">
    #card{
      background-color: white;
      width: 400px;
      cursor: pointer;
      transition: .3s;
      padding: 20px;
      &:hover{
        box-shadow: 0 0 3px 2px #dedede;
      }
      img{
        width: 100%;
      }
      .title{
        font-size: 22px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        margin-top: 10px;
      }
      .discreption{
        font-size: 16px;
        color: #a89b9b;
        font-family: "Roboto", sans-serif;
        margin: 14px 0;
      }
      .price{
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: green;
        font-weight: bold;
      }
    }
</style>