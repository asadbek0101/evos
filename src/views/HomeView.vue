<template>
  <div class="home" :style="{height: show? '100vh':''}">
      <AppHeader :show="show" @show="showFunction($event)"/>
    <AppContainer>
      <div>
        <div v-for="(item, i) in product_data" :key="i">
          <p class="for-title">{{item.kategory}}</p>
          <div class="d-flex">
            <AppCard v-for="(produt, t) in item.data" :key="t" :img="produt.img" :title="produt.title" :discreption="produt.discreption" :price="produt.price">
                <div class="incre-decre" v-if="produt.count>0">
                        <button @click="decrement_function(item._id, produt._id)"><font-awesome-icon icon="fa-solid fa-minus" /></button>
                        <p>{{produt.count}}</p>
                        <button @click="increment_function(item._id, produt._id)"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                </div>
              <div class="send-korzinka" v-else>
                <button @click="add_korzinka_product( item._id, produt._id )">Savatga qo'shish</button>
              </div>
            </AppCard>
          </div>
        </div>
      </div>
    </AppContainer>
    <AppKorzinka :data="korzinka_data"
                 :show="show"
                 @show="showFunction($event)"
                 v-if="show" @delete="deleteKorzinka($event)"
                 @decrement="decrementKorzinka($event)"
                 @increment="incrementKorzinka($event)"
                 @addKorzinka="show = false"
                 @buy="buyProduct"
                 @clear="clearProductFromKorzinka"
    />
  </div>
</template>

<script>
import AppKorzinka from "@/components/Korzinka/AppKorzinka";
import AppHeader from "@/components/Header/AppHeader";
import AppCard from "@/components/Card/AppCard";
import AppContainer from "@/components/Container/AppContainer";
import {mapActions} from 'vuex'
export default {
  name: "HomeView",
  components: { AppContainer, AppCard, AppHeader, AppKorzinka},
  data(){
    return{
      show:false,
    }
  },
  computed:{
    korzinka_data(){
      return this.$store.state.korzinka
    },
    product_data(){
      return this.$store.state.products
    }
  },
  methods:{
    ...mapActions(['add_korzinka']),
    ...mapActions(['increment']),
    ...mapActions(['decrement']),
    ...mapActions(['delKorzinka']),
    ...mapActions(['incrementKorzinka']),
    ...mapActions(['decrementKorzinka']),
      ...mapActions(['clearKorzinka']),
    showFunction(e){
      this.show = !e
      console.log(e)
    },
    deleteKorzinka(e){
      if(confirm("Haqiqatdan ham bu maxsulot savatchadan uchirilsinmi ?")){
        this.delKorzinka(e)
      }else{
        console.log("Uchirilmadi")
      }

    },
    add_korzinka_product(itemId, productId){
     let index_kategory = this.product_data.findIndex((t)=>t._id===itemId)
      let index_product = this.product_data[index_kategory].data.findIndex((e)=>e._id === productId)
      let korzinka_product = this.product_data[index_kategory].data[index_product]
      this.product_data[index_kategory].data[index_product].count = 1
      this.add_korzinka({
        _id:korzinka_product._id,
        img:korzinka_product.img,
        title:korzinka_product.title,
        price:korzinka_product.price,
        discreption:korzinka_product.discreption,
        count:korzinka_product.count,
        total_summa: korzinka_product.count * korzinka_product.price
      })
    },
    decrement_function(idK, idP){
      this.decrement({idK, idP})
    },
    increment_function(idK, idP){
      this.increment({idK, idP})
    },
    buyProduct(){
      alert("Sizning buyurtmangiz qabul qilindi")
      this.clearKorzinka()
      this.show = false
    },
    clearProductFromKorzinka(){
      if (confirm("Savatcha tozalansinmi?")) {
        this.clearKorzinka()
        this.show = false
      } else {
        console.log("Savatcha tozalanmadi")
      }

    }

  }
}
</script>

<style scoped lang="scss">
.home{
  background-color: #f6f8f9;
  overflow: hidden;
}
    .d-flex{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .for-title{
      font-size: 34px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      margin: 20px 0;
    }
    .send-korzinka{
      button{
          width: 100%;
        font-size: 16px;
        color: black;
        margin: 20px 0 4px 0;
        padding: 10px;
        cursor:pointer;
        border:none;
        background-color: #f6f8f9;
        border-radius: 2px;
        transition: .4s;
        &:hover{
          background-color: #f1c40f;
        }
      }
    }
    .incre-decre{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f6f8f9;
      border-radius: 2px;
      padding: 0 10px;
      margin: 20px 0 4px 0;
      p{
        font-size: 16px;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
      }
      button{
        font-size: 16px;
        color: black;
        padding: 10px;
        cursor:pointer;
        border:none;
        background-color: #f6f8f9;
        border-radius: 2px;
        transition: .4s;
      }
    }
</style>