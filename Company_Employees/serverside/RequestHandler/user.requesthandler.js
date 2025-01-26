import userSchema from "../Models/user.model.js";

export async function addEmployee(req,res) {
    const {name,email,designation,phone,experience,salary}=req.body;
    console.log(name,email,designation,phone,experience,salary);
    //check fields are empty
    if(!(name&&email&&designation&&phone&&experience&&salary))
     return(res.status(404).send({msg:"fields are empty"}));    
 //check email already exist
 const data=await userSchema.findOne({email})
 if(data)
     return(res.status(404).send({msg:"Email already exist try another mail"}));
 // create user
 await userSchema.create({name,email,designation,phone,experience,salary}).then(()=>{
     res.status(201).send({msg:"successfully created"})
 }).catch((error)=>{
     res.status(500).send({error})
 })
 }

 export async function Home(req, res) {
    try {
      const user = await userSchema.find();
      console.log(user);
      
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
  
  export async function oneEmployee(req,res){
    const {_id}=req.params
    const users=await userSchema.find({_id});
    console.log(users)
    res.status(200).send(users)
}

export async function deleteEmployee(req,res){
  const {_id}=req.params
     await userSchema.deleteOne({_id})
     .then(()=>{
         res.status(200).send({msg:"Task deleted successfully"})
     })
     .catch((err)=>{
         res.status(500).send(err)
     })
  
}

export async function updateEmployee(req,res){
  const {_id}=req.params
  const {name,designation,email,phone,experience,salary}=req.body;
  await userSchema.findByIdAndUpdate(_id,{name,designation,email,phone,experience,salary})
     .then(()=>{
          res.status(200).send({msg:"Task updated successfully"})
     })
     .catch((err)=>{
          res.status(500).send(err)
     })
}