 import axios from "axios";

// base url of a api 
 //const BASE_URL = 'http://localhost:5000';

 const BASE_URL = 'http://3.109.65.55:5000';

 //api token
 const Auth_TOKEN = localStorage.getItem('authToken');

 const headers={
    Authorization: "Bearer " + Auth_TOKEN,
 }


 console.log(headers);

 const params={
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role')
}

export const fetchDataFromApi = async(url) => {
    try{
        const {data} =await axios.post(BASE_URL+url,params,{
            headers:headers ,
        })
        return data;

    } catch(err){
        console.log(err);
        return err;
    }

 }

 // api for login for admin
 export const loginApi = async(url,data) => {
    try{
          return {data} =  await axios.post(BASE_URL+url,data)
    } catch(err){
        console.log(err.message);
        return err;
    }

 }

  export const addDataUsingApi = async(url,data) => {
     try{
           return {data} =  await axios.post(BASE_URL+url,data,{
            headers:headers,
           })
     } catch(err){
         console.log(err.message);
         return err;
     }
 
  }

 // base url of a api 
 const BASE_URL1 = 'http://127.0.0.1:3002';

//  export const addDataUsingApi = async(url,data) => {
//     try{
//           return {data} =  await axios.post(BASE_URL1+url,data)
//     } catch(err){
//         console.log(err.message);
//         //return err;
//     }

//  }


  export const fetchDataFromAnotherApi = async(url) => {
    try{
        const {data} =await axios.get(BASE_URL+url,{
            headers:headers ,
        })
        return data;

    } catch(err){
        console.log(err);
        return err;
    }
 
  }

  export const editDataUsingApi = async(url,data) => {
    try{
        return {data} =  await axios.patch(BASE_URL+url,data,{
         headers:headers,
        })
  } catch(err){
      console.log(err.message);
      return err;
  }

 }

 export const editDataUsingApiputmethod = async(url,data) => {
    try{
        return {data} =  await axios.put(BASE_URL+url,data,{
         headers:headers,
        })
  } catch(err){
      console.log(err.message);
      return err;
  }

 }

 export const deleteDataUsingApi = async(url,data) => {
    try{
        return {data} =  await axios.delete(BASE_URL+url,data,{
         headers:headers,
        })
  } catch(err){
      console.log(err.message);
      return err;
  }

 }
 