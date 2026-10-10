import express,{Application,Request,Response} from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app:Application=express();

app.use(express.json());
app.use(cors());

app.use("/api/v1",router)

app.get('/',(req:Request, res:Response)=>{
    res.send(
        {
            success:true,
            message:"Welcome to task basic server"
        }
    )
})
export default app;