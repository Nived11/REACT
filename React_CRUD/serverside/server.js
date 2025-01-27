import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import connection from './connection.js';
import router from './router.js';

env.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router)


connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started http://localhost:${process.env.PORT}`);
        
    })
})