import userSchema from "../Models/user.model.js";
import bcrypt from "bcrypt";


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
    const {email,password}=req.body;
    if(!(email&&password))
        return res.status(404).send({msg:"Fields are empty"});
    const user=await userSchema.findOne({email})
    if(user==null)
        return res.status(404).send({msg:"email is not valid"});
    const success=await bcrypt.compare(password,user.password)
    console.log(success);
    if(success){
        res.status(200).send({msg:"login success"})
    }else{
        res.status(404).send({msg:"password is not valid"})
    }
}

export async function Home(req,res){
    try{
        console.log("end point");

        console.log(req.user);
        const _id=req.user.userID;
        const user=await userSchema.findOne({_id});
        res.status(200).send({username:user.username})  
    }catch(error){
        res.status(400).send({error})
    }
}
// const data=await userSchema.find();
//         res.status(200).send(data);