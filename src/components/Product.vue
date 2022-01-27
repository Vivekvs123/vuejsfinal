<template>
  
              <div class="col-sm-4" >
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo">
                      <img
                        :src="url+image"
                        class="girl img-responsive"
                        alt="abc"
                      />
                      <h2>Rs. {{ price }}</h2>
                      <div>Model name: {{ name }}</div>
                      <div>Quantity:{{ quantity }}</div>
                      <div>Features: {{ features }}</div>
                      <div class="text-left ">
                        <ul >
                        <li>
                          <button class="btn btn-default add-to-cart" @click="addToCart(id,name,image,price)"
                            ><i class="fa fa-shopping-cart"></i> Add to cart</button
                          ></li>
                            <li>
                            <a href="#" class="btn btn-default add-to-cart"
                              ><i class="fa fa-plus-square"></i>Add to
                              wishlist</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>

<script>
// import { product } from "@/common/Service";
export default {
    name:"Product",

    props:['id','name','image','price','quantity','features'],

     data()
  {
     return{
         url: "http://127.0.0.1:8000/uploads/"  
         };
  },
methods:{
     addToCart(id,name,image,price) {
      if (localStorage.getItem("myCart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let obj = {
          pid: id,
          name:name,
          price: price,
          quantity: 1,
          image: image,

        };
        const found=arr.some((el)=> el.pid == id);
        if(found)
        {
          
          this.$swal('Product Already Added!!',name,'error');
          
          
        }
        else
        {
          arr.push(obj);

       
        
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
        this.$swal('Product Added!!',name,'success');
        }
      } else {
        let arr = [];
        let obj = {
         pid: id,
          name: name,
          price: price,
          quantity: 1,
          image: image,
        };
        arr.push(obj);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
      }
    },
}

}
</script>

<style>

</style>