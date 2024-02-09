 import {User} from "../Models/User.js"
export const register = async(req,res)=>{
   const{name,email,password} = req.body;
   // console.log(req.body);
 let user = await User.findOne({email});
 if(user) return res.json({message:"User already exist........"});
   user = await User.create({name,email,password});
  
  res.json({message:"User Register Sucessfully!",user})

}