import userSchema from "../Models/user.model.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const {sign}=pkg

export async function addUser(req,res) {
    const {username,email,password,cpassword}=req.body;
    console.log(username,email,password,cpassword);
    //check fields are empty
    if(!(username&&email&&password&&cpassword))
     return(res.status(404).send({msg:"fields are empty"}));
 //compare password and confirm password 
    if(password!==cpassword)
     return(res.status(404).send({msg:"password not match"}));
 //check email already exist
 const data=await userSchema.findOne({email})
 if(data)
     return(res.status(404).send({msg:"Email already exist try another mail"}));
 //convert password to hashed
 const hpassword=await bcrypt.hash(password,10)
 console.log(hpassword);
 // create user
 await userSchema.create({username,email,password:hpassword}).then(()=>{
     res.status(201).send({msg:"successfully created"})
 }).catch((error)=>{
     res.status(500).send({error})
 })
 }


 export async function loginUser(req,res) {
    try {
        const {email,password}=req.body;
    if(!(email&&password))
        return res.status(404).send({msg:"Fields are empty"});
    const user=await userSchema.findOne({email})
    if(user==null)
        return res.status(404).send({msg:"email is not valid"});
    const success=await bcrypt.compare(password,user.password)
    console.log(success);
    const token=await sign({userID:user._id},process.env.JWT_KEY,
        {expiresIn:"1h"});
    res.status(200).send({msg:"successfully loged in",token})
        
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
}

export async function Home(req, res) {
    try {
      console.log("End point");
      if (!req.user || !req.user.userID) {
        return res.status(401).send({ msg: "User not authenticated" });
      }
      const _id = req.user.userID;
      const user = await userSchema.findOne({ _id });
      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      }
      res.status(200).send({ username: user.username });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
  