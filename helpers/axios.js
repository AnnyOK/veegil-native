import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.BASE_URL,'base_url')
export const Axios = axios.create({
    baseURL:'http://localhost/5000',headers:{
        Accept:'*/*',
        "Content-Type":'application/json'
    }

})