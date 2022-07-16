<template>
    <div id="korzinka">
        <div class="box">
          <div class="top">
            <button @click="$emit('show', show)"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
          </div>
          <div v-if="data.length>0" >
            <div class="for-title">
              <p>Buyurtmangiz</p>
              <button @click="$emit('clear')">Savatni tozalash</button>
            </div>
          <div class="center-box">
            <div v-for="(item, index) in data" :key="index" class="box_product">
              <div class="delete">
                <button @click="$emit('delete', item._id)">
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
              </div>
              <div class="left">
                <img :src="item.img" alt="">
              </div>
              <div class="right">
                <p class="title">{{item.title}}</p>
                <p class="discreption">
                  {{item.discreption}}
                </p>
              </div>
              <div class="over">
                <p class="price">{{item.price * item.count}} so'm</p>
                <div class="incre-dicre">
                  <button @click="$emit('decrement', item._id)"><font-awesome-icon icon="fa-solid fa-minus" /></button>
                  <p class="count">{{item.count}}</p>
                  <button @click="$emit('increment', item._id)"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                </div>
              </div>
            </div>
          </div>
            <div class="total_summa">
                <p>To'plam</p>
                <p class="total">{{summa()}} so'm</p>
            </div>
          </div>
          <div class="center" v-else>
            <img src="../../assets/img/Korzinka_bg.png" alt="">
            <p>Hech narsa topilmadi <br> Savatingiz bo'sh "Menu" ni oching <br> va yoqtirgan mahsulotingizni tanlang</p>
          </div>
          <div class="bottom">
             <AppButton v-if="data.length>0" @onClick="$emit('buy')">
               <p>Buyurtma berish</p>
             </AppButton>
            <AppButton v-else @onClick="$emit('addKorzinka')">
              <p>Savatga qo'shish</p>
            </AppButton>
          </div>
        </div>
    </div>
</template>

<script>
import AppButton from "@/components/Button/AppButton";
export default {
  name: "AppKorzinka",
  components: {AppButton},
  props:{
    data:[String, Number],
    show:Boolean
  },
  data(){
    return{
      sum:0
    }
  },
  methods:{
    summa(){
      let sum = 0
      this.data.map((e)=>{
        sum = sum + e.price * e.count
      })
      return sum
    }
  },
}
</script>

<style scoped lang="scss">
    #korzinka{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10000;
      width: 100%;
      height: 100vh;
      display: flex;
      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      .box{
        width: 38%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 20px 40px;
        .top{
          padding: 10px 0 0 0;
          width: 100%;
          display: flex;
          justify-content: right;
          button{
            background-color: transparent;
            border: none;
            transition: 0.4s;
            &:hover{
              transform: rotate(90deg);
            }
            cursor: pointer;
            svg{
              font-size: 30px;

            }
          }
        }
        .center{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-bottom: 40px;
          img{
            width: 80%;
          }
          p{
            font-size: 20px;
            text-align: center;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            line-height: 25px;
            color: rgb(132, 145, 154);
            letter-spacing: 0.38px;
          }
        }
        .bottom{
          width: 100%;
        }
      }
      .box_product{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;
        .left{
          width: 30%;
          img{
            width: 100%;
            height: 100px;
          }
        }
        .right{
          width: 35%;
        }
      }
      .center-box{
        width: 100%;
        height: 490px;
        overflow: hidden;
        overflow-y: scroll;
        padding: 10px 0;
      }
    }
    .delete{
      width: 5%;
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: .5s;
      &:hover{
        color: red;
        transform:scale(1.1);
      }
      svg{
        font-size: 18px;
      }
    }
    }
    .over{
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      flex-direction: column;
      gap: 20px;
      .incre-dicre{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        button{
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
    .title{
      font-size: 18px;
      font-weight: bold;
      color: black;
      font-family: "Roboto", sans-serif;
    }
    .discreption{
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: #a89b9b;
      margin: 10px 0;
    }
    .price{
      font-size: 18px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      color: green;
    }
    .count{
      font-size: 14px;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
    }
    .for-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #9f9090;
      p{
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
      }
      button{
        font-size: 18px;
        border: none;
        color: red;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .total_summa{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      p{
        font-family: "Roboto", sans-serif;
        font-size: 20px;
      }
      .total{
        color: green;
        font-weight: bold;
      }
    }
</style>