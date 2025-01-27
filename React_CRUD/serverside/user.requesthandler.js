import userSchema from './model.js';

export async function addUser(req,res){
    const {name,address,email}=req.body;
    console.log(req.body);
    await userSchema.create({name,address,email}).then(()=>{
        res.status(201).send({msg:"successfully addedd"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
    
}

export async function getUser(req,res){
    await userSchema.find().then((data)=>{
        res.status(200).send(data)
    }).catch((error)=>{
        res.status(500).send({error})
    })
}
export async function deleteUser(req,res){
    const {id}=req.params;
    await userSchema.findByIdAndDelete(id).then(()=>{
        res.status(200).send({msg:"successfully deleted"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
}

export async function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, address } = req.body;
    try {
        const updatedUser = await userSchema.findByIdAndUpdate( id,{ name, email, address },);
        if (!updatedUser) {
            return res.status(404).send({ msg: "User not found" });
        }
        res.status(200).send({ msg: "updated successfully"});
        } catch (error) {
        res.status(500).send({ error });
    }
}
