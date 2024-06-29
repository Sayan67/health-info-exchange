import axios from "axios";
axios.defaults.baseURL="http://localhost:3000"

const signupCitizen = async(data:{name:string,aadhar:string,password:string})=>{
    try{
        const response = await axios.post("/register",data);
        console.log('first', response.data) 
        return response;
    }catch(err){
        return err
    }
}

const loginCitizen = async(data:{aadhar:string,password:string})=>{
    try{
        const response = await axios.post("/auth/citizen",data);
        return response;
    }catch(err){
        return err
    }
}

export {signupCitizen,loginCitizen}