<template>
  <div class="container">
    <table class="table" >
        <thead>
            <tr>
            <th scope="col">Product</th>
            <th scope="col">Order Amount</th>
            <th scope="col">Order Amount (Charges)</th>
            </tr>
        </thead>
        <tbody v-for="(userdetail,i) in userdetails" :key="i">
                <tr v-for="(orderdtl,j) in orderdetails" :key="j">
                    <td v-if="(orderdtl.userdetail_id == userdetail.id)">
                       <table>
                           <tbody v-for="(ord,j) in orders" :key="j">
                               <tr v-if="ord.userdetail_id == orderdtl.userdetail_id">
                                    <td v-for="prod in products" :key="prod">
                                       <b v-if="prod.id == ord.product_id">
                                           <img
                                            :src="url + prod.images"
                                            alt="abc"
                                            width="100px"
                                            height="100px"
                                            class="mb-2"
                                        />
                                        </b>
                                    </td>
                                    <td v-for="prod in products" :key="prod">
                                       
                                           <b v-if="prod.id == ord.product_id">{{prod.pname}}</b>
                                        
                                    </td>
                                </tr>
                           </tbody>
                        </table> 
                    </td>
                    <td v-if="(orderdtl.userdetail_id == userdetail.id)">
                        {{orderdtl.producttotal}}
                    </td>
                    <td v-if="(orderdtl.userdetail_id == userdetail.id)">
                        {{orderdtl.finalTotal}}
                    </td>
                </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
name:"Myorders",
data(){
    return{url: "http://127.0.0.1:8000/uploads/",user_id:null,product:undefined,orderdetails:undefined,orders:undefined,userdetails:undefined}
},
mounted(){
	axios.get("http://127.0.0.1:8000/api/product").then($res=>{
     console.log($res.data);
     this.product = $res.data.Product;
   }),
   this.user_id = localStorage.getItem('uid');
   axios.get(`http://127.0.0.1:8000/api/myorders/${this.user_id}`).then($res=>{
    this.orderdetails = $res.data.orderdetail;
    this.orders =$res.data.orders;
    this.userdetails=$res.data.userdetail;
     console.log(this.userdetails);
   });
}
}
</script>

<style>

</style>