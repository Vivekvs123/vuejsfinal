import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data)
{
    return axios.post(`${MAIN_URL}login`,data)
}
export function profile()
{
    var token = localStorage.getItem('token');
    return axios.get(`${MAIN_URL}profile`, { headers: { "Authorization": `Bearer ${token}` } })
}
export function userRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data)
}
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contactus`,data)
}
export function banner()
{
    return axios.get(`${MAIN_URL}banner`)
}
export function servicesCMS()
{
    return axios.get(`${MAIN_URL}cms`)
}
export function categorybyid(id)
{
    return axios.get(`${MAIN_URL}category/${id}`)
}
export function category(data)
{
    return axios.get(`${MAIN_URL}category`,data)
}
export function product(data)
{
    return axios.get(`${MAIN_URL}product`,data)
}
export function changePassword(data)
{
    var token = localStorage.getItem('token');
    return axios.post(`${MAIN_URL}changePassword`,data,{ headers: { "Authorization": `Bearer ${token}` } })
}
export  async function checkout(data)
{
    var token = localStorage.getItem('token');
    
    await axios.post(`${MAIN_URL}checkout`,data,{ headers: { "Authorization": `Bearer ${token}` } })
    .then(res=>{
        //console.log(res);
        localStorage.removeItem("myCart");
        alert(res.data.msg);
        this.$router.push('/');
        window.location.reload()
      })
      .catch(error=>{
        alert("Unauthorized")
        console.log("Something Wrong"+error);
      })
}

export default {userLogin,userRegister,userContact,category,banner,servicesCMS,categorybyid,product,changePassword};