<template>
  <section>
    <Slider />
   
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
             <Product v-for="product in arr" :key="product.id" :id="product.id" :name="product.pname" :image="product.product_image[0].images" :price="product.product_attribute_assoc.price" :quantity="product.product_attribute_assoc.quantity" :features="product.product_attribute_assoc.features"/>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Slider from "./includes/Slider.vue";
import Sidebar from "./includes/Sidebar.vue";
import Product from "./Product.vue";
import axios from "axios";


export default {
  name: "Main",
   
  components: {
    Slider,
    Sidebar,
    Product,
    
    
  },
  
  
   data() {
    return {
      arr: null,
    
      
        
    };
  },

   mounted(){
   axios.get("http://127.0.0.1:8000/api/product")
    .then($res=>{
      console.log($res.data);
      this.arr=$res.data.products;

    })
 },
  
   
  
};
</script>

<style>
</style>