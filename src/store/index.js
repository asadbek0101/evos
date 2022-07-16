import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[
      {
        _id:100,
        kategory:"Lavashlar",
        data:[
          {
            _id:101,
            title:"Mini Lavash",
            img:"https://pasta.uz/upload/products/23456.jpg",
            price:21000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0
          },
          {
            _id:102,
            title:"Mini Lavash",
            img:"https://pasta.uz/upload/products/23456.jpg",
            price:21000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0
          },
          {
            _id:103,
            title:"Mini Lavash",
            img:"https://pasta.uz/upload/products/23456.jpg",
            price:21000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0
          },
          {
            _id:104,
            title:"Mini Lavash",
            img:"https://pasta.uz/upload/products/23456.jpg",
            price:21000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0
          }
        ]
      },
      {
        _id:200,
        kategory: "Gamburgerlar",
        data:[
          {
            _id:201,
            title:"Chizburger",
            img:"https://thumbs.dreamstime.com/b/%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BA%D0%B0-%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B2%D1%80%D0%B5-%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D1%89%D0%B8-34286419.jpg",
            price:24000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0
          },
          {
            _id:202,
            title:"Chizburger",
            img:"https://thumbs.dreamstime.com/b/%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BA%D0%B0-%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B2%D1%80%D0%B5-%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D1%89%D0%B8-34286419.jpg",
            price:24000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0,
          },
          {
            _id:203,
            title:"Chizburger",
            img:"https://thumbs.dreamstime.com/b/%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BA%D0%B0-%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B2%D1%80%D0%B5-%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D1%89%D0%B8-34286419.jpg",
            price:24000,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            count:0,
          },
          {
            _id:204,
            title:"Chizburger",
            img:"https://thumbs.dreamstime.com/b/%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BA%D0%B0-%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B2%D1%80%D0%B5-%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D1%89%D0%B8-34286419.jpg",
            price:24000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
        ]
      },
      {
        _id:300,
        kategory: "Shourmalar",
        data:[
          {
            _id:301,
            title:"Shourma",
            img:"https://img.freepik.com/free-photo/pita-stuffed-with-chicken-and-peppers_2829-17826.jpg?w=2000",
            price:25000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:302,
            title:"Shourma",
            img:"https://img.freepik.com/free-photo/pita-stuffed-with-chicken-and-peppers_2829-17826.jpg?w=2000",
            price:25000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:303,
            title:"Shourma",
            img:"https://img.freepik.com/free-photo/pita-stuffed-with-chicken-and-peppers_2829-17826.jpg?w=2000",
            price:25000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:304,
            title:"Shourma",
            img:"https://img.freepik.com/free-photo/pita-stuffed-with-chicken-and-peppers_2829-17826.jpg?w=2000",
            price:25000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
        ]
      },
      {
        _id:400,
        kategory: "Ichimliklar",
        data:[
          {
            _id:401,
            title:"Coca cola",
            img:"https://www.bozor.com/media/filer_public/e9/da/e9da08ef-2be0-4a83-919f-42010e328d6d/coca-cola-15-l.jpg.160x210_q85_upscale.jpg",
            price:11000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:402,
            title:"Coca cola",
            img:"https://www.bozor.com/media/filer_public/e9/da/e9da08ef-2be0-4a83-919f-42010e328d6d/coca-cola-15-l.jpg.160x210_q85_upscale.jpg",
            price:11000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:403,
            title:"Coca cola",
            img:"https://www.bozor.com/media/filer_public/e9/da/e9da08ef-2be0-4a83-919f-42010e328d6d/coca-cola-15-l.jpg.160x210_q85_upscale.jpg",
            price:11000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
          {
            _id:404,
            title:"Coca cola",
            img:"https://www.bozor.com/media/filer_public/e9/da/e9da08ef-2be0-4a83-919f-42010e328d6d/coca-cola-15-l.jpg.160x210_q85_upscale.jpg",
            price:11000,
            count:0,
            discreption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          },
        ]
      }
    ],
    korzinka:[],
  },
  getters: {
  },
  mutations: {
    ADD_KORZINKA(state, data){
      state.korzinka.push(data)
    },
    INCREMENT(state, data){
      let index = state.products.findIndex((e)=>e._id === data.idK)
      let indexP = state.products[index].data.findIndex((t)=>t._id===data.idP)
      if(state.korzinka.length>0){
        let indexK = state.korzinka.findIndex((k)=>k._id===data.idP)
        state.korzinka[indexK].count++
      }
      state.products[index].data[indexP].count++
    },
    DECREMENT(state, data){
      let index = state.products.findIndex((e)=>e._id === data.idK)
      let indexP = state.products[index].data.findIndex((t)=>t._id===data.idP)
     if(state.korzinka.length>0){
       let indexK = state.korzinka.findIndex((k)=>k._id===data.idP)
       state.korzinka[indexK].count--;
       if(state.korzinka[indexK].count == 0){
         state.korzinka.splice(indexK, 1)
       }
     }


      state.products[index].data[indexP].count--
    },
    DEL_FROM_KORZINKA(state, id){
     if(state.korzinka.length>0){
       let index = state.korzinka.findIndex((p)=>p._id===id)
       state.korzinka.splice(index, 1)
     }
     state.products.map((e)=>{
       e.data.map((t)=>{
         if(t._id==id) t.count = 0
       })
     })
    },
    INCRE_KORZINKA(state, id){
     let index = state.korzinka.findIndex((t)=>t._id===id)
      state.korzinka[index].count ++
      state.products.map((e)=>{
        e.data.map((t)=>{
          if(t._id==id) t.count ++
        })
      })
    },
    DEC_KORZINKA(state, id){
    if(state.korzinka.length>0){
      let index = state.korzinka.findIndex((t)=>t._id===id)
      state.korzinka[index].count --
      if(state.korzinka[index].count == 0){
        state.korzinka.splice(index, 1)
      }
      state.products.map((e)=>{
        e.data.map((t)=>{
          if(t._id==id) t.count --
        })
      })
    }
    },
    CLEAR_KORZINKA(state){
      state.korzinka = []
      state.products.map((element)=>{
        element.data.map((t)=>t.count = 0)
      })

    }
  },
  actions: {
    add_korzinka({commit}, data){
      commit("ADD_KORZINKA", data)
    },
    increment({commit}, data){
      commit("INCREMENT", data)
    },
    decrement({commit}, data){

      commit("DECREMENT", data)
    },
    delKorzinka({commit}, id){
      commit("DEL_FROM_KORZINKA", id)
    },
    decrementKorzinka({commit}, id){
      commit("DEC_KORZINKA", id)
    },
    incrementKorzinka({commit}, id){
      commit("INCRE_KORZINKA", id)
    },
    clearKorzinka({commit}){
      commit("CLEAR_KORZINKA")
    },

  },
  modules: {
  }
})
